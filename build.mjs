import {cp,mkdir,readFile,readdir,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
await mkdir('dist',{recursive:true});await cp('public','dist',{recursive:true});
async function walk(root){let files=[];for(const d of await readdir(root,{withFileTypes:true})){const path=`${root}/${d.name}`;if(d.isDirectory())files.push(...await walk(path));else files.push(path);}return files;}
const files=(await walk('public')).sort(),hash=createHash('sha256');for(const file of files)hash.update(await readFile(file));const version=hash.digest('hex').slice(0,12);
const paths=files.map(f=>'./'+f.slice(7));
const sw=`const VERSION='escales-${version}';
const ASSETS=${JSON.stringify(paths)};
const URLS=ASSETS.map(p=>new URL(p,self.registration.scope).href);
async function status(){const cache=await caches.open(VERSION);let done=0;for(const url of URLS)if(await cache.match(url))done++;return {ready:done===URLS.length,done,total:URLS.length};}
async function download(port){const cache=await caches.open(VERSION);let done=0;for(const url of URLS){const response=await fetch(url,{cache:'reload'});if(!response.ok)throw Error('Une ressource ne peut pas être chargée.');await cache.put(url,response);done++;port?.postMessage({type:'PROGRESS',done,total:URLS.length});}return status();}
self.addEventListener('install',event=>{event.waitUntil((async()=>{const keys=await caches.keys();if(keys.some(k=>k.startsWith('escales-')&&k!==VERSION)){await download();}})());});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const state=await status();if(state.ready){for(const key of await caches.keys())if(key.startsWith('escales-')&&key!==VERSION)await caches.delete(key);}await self.clients.claim();})());});
self.addEventListener('message',event=>{const port=event.ports[0];if(event.data.type==='ACTIVATE'){self.skipWaiting();return;}event.waitUntil((async()=>{try{const result=event.data.type==='DOWNLOAD'?await download(port):await status();port?.postMessage({type:'DONE',...result});}catch(error){port?.postMessage({type:'DONE',error:error.message});}})());});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;event.respondWith((async()=>{const cache=await caches.open(VERSION);const url=event.request.mode==='navigate'?new URL('./index.html',self.registration.scope).href:event.request.url;const cached=await cache.match(url);if(cached)return cached;try{return await fetch(event.request);}catch{if(event.request.mode==='navigate')return new Response('<!doctype html><html lang="fr"><meta name="viewport" content="width=device-width"><title>Guide non téléchargé</title><h1>Connexion nécessaire</h1><p>Le guide n’a pas encore été téléchargé intégralement. Reconnectez-vous puis choisissez Télécharger le guide hors ligne.</p></html>',{status:503,headers:{'Content-Type':'text/html; charset=utf-8'}});return Response.error();}})());});
`;
await writeFile('dist/sw.js',sw);await writeFile('dist/.nojekyll','');console.log(`Built ${files.length} assets; version ${version}`);
