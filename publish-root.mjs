// Mirror the tested static build to the root for GitHub Pages branch publishing.
// README.md remains repository documentation; index.html is the web entry point.
import {cp,readdir} from 'node:fs/promises';
for(const entry of await readdir('dist',{withFileTypes:true})) {
  await cp(`dist/${entry.name}`,entry.name,{recursive:true});
}
console.log('Static application mirrored to repository root for main / (root) Pages.');
