// Public, impersonal destination data. Keep bookings and personal travel dates out of this file.
export const sources = [
 {name:'Office de tourisme de Fuengirola',url:'https://www.thisisfuengirola.org/'},
 {name:'Valence · Office national du tourisme',url:'https://www.spain.info/en/destination/valencia/'},
 {name:'Renfe · Horaires et billets',url:'https://www.renfe.com/es/en'},
 {name:'Renfe · Cercanías de Madrid',url:'https://www.renfe.com/es/en/suburban/suburban-madrid'},
 {name:'Renfe · Réseaux Cercanías',url:'https://www.renfe.com/es/en/suburban'}
];
export const places = [
 {id:'fuengirola',name:'Le bord de mer de Fuengirola',city:'Costa del Sol',kind:'Balade',text:'Prendre le temps de découvrir les plages et la vie de cette ville côtière. Choisir une portion à son rythme, puis faire demi-tour quand on le souhaite.',detail:'Prévoir de l’eau, de l’ombre et des pauses. Les parcours détaillés restent à valider.',source:0},
 {id:'ceramique',name:'Musée national de la céramique',city:'Valence',kind:'Musée',text:'Une façade spectaculaire et une autre porte d’entrée sur Valence : la céramique et les arts décoratifs.',detail:'Vérifier les horaires, l’accessibilité et les billets sur le site officiel avant la visite.',source:1},
 {id:'ivam',name:'IVAM',city:'Valence',kind:'Musée',text:'Une halte autour de l’art moderne pour compléter la découverte du centre historique.',detail:'La programmation et les conditions de visite peuvent changer.',source:1},
 {id:'marche',name:'Mercado Central',city:'Valence',kind:'Gourmand',text:'Découvrir les étals du marché moderniste et les saveurs locales au cœur de la ville.',detail:'Consulter les jours et horaires d’ouverture. Ce lieu n’est pas une recommandation de restaurant précise.',source:1},
 {id:'arts',name:'La Cité des arts et des sciences',city:'Valence',kind:'Balade',text:'Une architecture singulière à découvrir à l’extrémité du jardin du Turia.',detail:'Distinguer la promenade extérieure et les espaces de visite payants.',source:1},
 {id:'saler',name:'El Saler & El Palmar',city:'Valence',kind:'Excursion',text:'Une idée d’échappée vers les paysages côtiers et une pause autour de la paella.',detail:'Préparer les transports et les conditions d’accès avant de partir.',source:1}
];
export const destinations = [
 {id:'madrid',name:'Madrid',label:'L’arrivée & le retour',symbol:'01',className:'',text:'De l’aéroport aux grandes gares : prendre ses repères avant de rejoindre le sud.',href:'destination/madrid'},
 {id:'costa',name:'Costa del Sol',label:'Le temps de la mer',symbol:'02',className:'coast',text:'Fuengirola comme point de départ, des promenades et des échappées à préparer.',href:'destination/costa'},
 {id:'valence',name:'Valence',label:'Culture & douceur de vivre',symbol:'03',className:'east',text:'Architecture, marchés et musées : une ville à découvrir à pied, par petites étapes.',href:'destination/valence'}
];
// Approximate city-centre reference points; not addresses or boarding locations.
export const points = [{name:'Madrid',lat:40.4168,lon:-3.7038},{name:'Málaga',lat:36.7213,lon:-4.4214},{name:'Fuengirola',lat:36.539,lon:-4.624},{name:'Valence',lat:39.4699,lon:-.3763},{name:'Barcelone',lat:41.3851,lon:2.1734}];

// Research supplied and verified separately against the linked official sources.
places.splice(0, places.length);
sources.push({"name": "Le front de mer & Sohail · référence", "url": "https://turismo.fuengirola.es/wp-content/uploads/2024/11/241108-GUIA-FUENGIROLA-SIN-HOTELES.pdf"});
places.push({...{"id": "sohail", "name": "Le front de mer & Sohail", "city": "Costa del Sol", "kind": "Balade", "text": "Plaza de la Constitución → paseo marítimo → embouchure du río Fuengirola → pied du château Sohail. Environ 3 à 4 km selon le retour, 2 à 3 h avec pauses.", "detail": "Le front de mer est largement plat ; la montée finale au château est en pente. Les vues extérieures restent une option si le château est fermé. Éviter les berges en cas de fortes pluies ou d’alerte locale."},source:sources.length-1});
sources.push({"name": "Los Boliches & la Finca del Secretario · référence", "url": "https://www.visitafuengirola.com/ciudad/historia/"});
places.push({...{"id": "boliches", "name": "Los Boliches & la Finca del Secretario", "city": "Costa del Sol", "kind": "Musée", "text": "Une promenade de quartier, des vestiges romains, puis le retour par la mer. Environ 2 à 3 km, 2 h avec visite.", "detail": "Vérifier l’ouverture de l’enceinte archéologique et du centre d’interprétation."},source:sources.length-1});
sources.push({"name": "Une matinée à Carvajal · référence", "url": "https://turismo.fuengirola.es/wp-content/uploads/2024/11/241108-GUIA-FUENGIROLA-SIN-HOTELES.pdf"});
places.push({...{"id": "carvajal", "name": "Une matinée à Carvajal", "city": "Costa del Sol", "kind": "Balade", "text": "C-1 jusqu’à Carvajal, puis promenade au bord de l’eau vers Torreblanca ou Los Boliches. Parcours adaptable de 2 à 4 km.", "detail": "La gare et la plage ne sont pas au même niveau. Retour possible depuis une autre gare ; vérifier le trajet du jour."},source:sources.length-1});
sources.push({"name": "Bodega Charolais · référence", "url": "https://www.bodegacharolais.com/seccion-restaurante.html"});
places.push({...{"id": "charolais", "name": "Bodega Charolais", "city": "Costa del Sol", "kind": "Restaurant", "text": "Tapas, portions à partager et cuisine traditionnelle avec touches basques : une idée pour une soirée au centre.", "detail": "Demander la carte et réserver si l’on souhaite une table."},source:sources.length-1});
sources.push({"name": "Los Marinos José · référence", "url": "https://www.marinosjose.com/"});
places.push({...{"id": "marinos", "name": "Los Marinos José", "city": "Costa del Sol", "kind": "Restaurant", "text": "Poissons et fruits de mer à Carvajal, pour un repas plus spécial.", "detail": "Demander le prix et le poids avant de commander un poisson entier ou un produit au prix du marché."},source:sources.length-1});
sources.push({"name": "Málaga : marché, ruelles & port · référence", "url": "https://www.renfe.com/es/es/cercanias/cercanias-malaga"});
places.push({...{"id": "malaga", "name": "Málaga : marché, ruelles & port", "city": "Costa del Sol", "kind": "Excursion", "text": "C-1 vers Málaga Centro-Alameda. Marché d’Atarazanas → centre historique → cathédrale extérieure → port. Environ 4 à 5 km dans la journée, à raccourcir à volonté.", "detail": "Ajouter un seul musée. Vérifier les horaires du marché et du train de retour."},source:sources.length-1});
sources.push({"name": "Museo del Vidrio y Cristal · référence", "url": "https://museovidrioycristalmalaga.com/informacion.html"});
places.push({...{"id": "verre", "name": "Museo del Vidrio y Cristal", "city": "Costa del Sol", "kind": "Musée", "text": "À Málaga, du verre et des arts décoratifs dans une maison : une halte plus intime.", "detail": "Visites guidées : confirmer la langue, le départ et l’ouverture."},source:sources.length-1});
sources.push({"name": "Mijas Pueblo, village blanc · référence", "url": "https://turismo.mijas.es/images/Guias/PLANO_MIJAS_ESP-ING-FRA-ALE_JUNIO_2025_ok-1.pdf"});
places.push({...{"id": "mijas", "name": "Mijas Pueblo, village blanc", "city": "Costa del Sol", "kind": "Excursion", "text": "Plaza Virgen de la Peña → ruelles → Casa Museo → jardins et belvédères de la Muralla. Environ 2 à 3 km, une demi-journée ou une journée.", "detail": "Rues en pente et pavés. Préparer autobus ou taxi selon les horaires du jour."},source:sources.length-1});
sources.push({"name": "Benalmádena, à composer · référence", "url": "https://www.renfe.com/es/es/cercanias/cercanias-malaga"});
places.push({...{"id": "benalmadena", "name": "Benalmádena, à composer", "city": "Costa del Sol", "kind": "Excursion", "text": "C-1 jusqu’à Benalmádena-Arroyo de la Miel, puis parc de la Paloma et front de mer.", "detail": "Le Pueblo en hauteur, Arroyo de la Miel et la marina sont des secteurs distincts. Vérifier le trajet local ; envisager un retour en taxi."},source:sources.length-1});
sources.push({"name": "Le centre ancien & le marché · référence", "url": "https://www.visitvalencia.com/en/what-to-see-valencia"});
places.push({...{"id": "valence-centre", "name": "Le centre ancien & le marché", "city": "Valence", "kind": "Balade", "text": "Mercado Central → Lonja de la Seda → Plaza Redonda → Plaza de la Reina → Plaza de la Virgen. Environ 3 km, une demi-journée avec visites.", "detail": "Venir au marché en matinée. Vérifier les ouvertures le dimanche et les jours fériés."},source:sources.length-1});
sources.push({"name": "Central Bar · référence", "url": "https://www.mercadocentralvalencia.es/Mercado/VerParada?ComprarWeb=False&PuestoId=179"});
places.push({...{"id": "centralbar", "name": "Central Bar", "city": "Valence", "kind": "Restaurant", "text": "Dans le Mercado Central, une pause de type esmorzaret, sandwich ou tapas.", "detail": "Le marché n’est pas un lieu de souper. Vérifier les heures d’ouverture."},source:sources.length-1});
sources.push({"name": "Horchatería Santa Catalina · référence", "url": "https://www.horchateriasantacatalina.com/"});
places.push({...{"id": "horchata", "name": "Horchatería Santa Catalina", "city": "Valence", "kind": "Café", "text": "Horchata et fartons, ou chocolat selon l’envie : une pause douce au centre.", "detail": "Consulter la carte et les horaires avant de se déplacer."},source:sources.length-1});
sources.push({"name": "Un tronçon des jardins du Turia · référence", "url": "https://www.visitvalencia.com/en/what-to-do-valencia/nature-in-valencia/parks-and-gardens-valencia/turia-gardens"});
places.push({...{"id": "turia", "name": "Un tronçon des jardins du Turia", "city": "Valence", "kind": "Balade", "text": "Torres de Serranos → pont de la Trinitat → secteur du Palau de la Música. Choisir 3 à 5 km dans l’ancien lit du fleuve devenu jardin.", "detail": "Le parc est long : prévoir un point de sortie et un retour adaptés."},source:sources.length-1});
sources.push({"name": "Museo de la Seda · référence", "url": "https://www.visitvalencia.com/en/what-to-do-valencia/valencian-culture/museum-in-valencia/silk-museum"});
places.push({...{"id": "soie", "name": "Museo de la Seda", "city": "Valence", "kind": "Musée", "text": "Une découverte du rôle de la soie dans l’histoire valencienne.", "detail": "Choisir ce musée ou La Almoina selon les ouvertures et les envies."},source:sources.length-1});
sources.push({"name": "La Almoina · référence", "url": "https://www.visitvalencia.com/en/what-to-see-valencia"});
places.push({...{"id": "almoina", "name": "La Almoina", "city": "Valence", "kind": "Musée", "text": "Une visite archéologique au cœur de la vieille ville.", "detail": "Vérifier les horaires officiels et les conditions d’accès."},source:sources.length-1});
sources.push({"name": "Casa Montaña & le Cabanyal · référence", "url": "https://www.visitvalencia.com/que-hacer-valencia/gastronomia/restaurantes-valencia/bodega-casa-montana"});
places.push({...{"id": "montana", "name": "Casa Montaña & le Cabanyal", "city": "Valence", "kind": "Restaurant", "text": "Ruelles du quartier maritime, promenade au bord de mer, puis tapas et vins à Casa Montaña. Calle José Benlliure, 69.", "detail": "Réserver. Pour une paella ailleurs, privilégier le midi et vérifier le minimum de convives ainsi que le prix par personne."},source:sources.length-1});
sources.push({"name": "Le vieux Madrid · référence", "url": "https://www.esmadrid.com/historias-centenarias-madrid"});
places.push({...{"id": "madrid-old", "name": "Le vieux Madrid", "city": "Madrid", "kind": "Balade", "text": "Puerta del Sol → Plaza Mayor → Plaza de la Villa → Almudena et Palais royal, extérieurs → Plaza de Oriente. Environ 3 km, 2 à 3 h.", "detail": "Ajouter le palais à l’intérieur uniquement avec un créneau confirmé."},source:sources.length-1});
sources.push({"name": "La Mallorquina · référence", "url": "https://www.esmadrid.com/historias-centenarias-madrid"});
places.push({...{"id": "mallorquina", "name": "La Mallorquina", "city": "Madrid", "kind": "Café", "text": "Une pause pâtisserie sur la Puerta del Sol.", "detail": "Vérifier la carte et les possibilités de s’installer sur place."},source:sources.length-1});
sources.push({"name": "Casa Labra · référence", "url": "https://www.esmadrid.com/en/restaurants/casa-labra"});
places.push({...{"id": "labra", "name": "Casa Labra", "city": "Madrid", "kind": "Restaurant", "text": "Une idée pour des tapas de morue, Calle de Tetuán, 12.", "detail": "La fiche touristique indique la salle restaurant fermée. Prévoir la taverne, sans repas assis garanti ; vérifier la situation."},source:sources.length-1});
sources.push({"name": "Museo Cerralbo & Debod · référence", "url": "https://www.esmadrid.com/en/house-museums"});
places.push({...{"id": "cerralbo", "name": "Museo Cerralbo & Debod", "city": "Madrid", "kind": "Musée", "text": "Un palais privé et ses collections, puis Plaza de España et jardins autour du temple de Debod. Environ 2 km plus le musée.", "detail": "Une demi-journée à composer selon les ouvertures."},source:sources.length-1});
sources.push({"name": "Museo del Romanticismo · référence", "url": "https://www.esmadrid.com/informacion-turistica/museo-del-romanticismo"});
places.push({...{"id": "romanticismo", "name": "Museo del Romanticismo", "city": "Madrid", "kind": "Musée", "text": "Intérieurs du XIXe siècle, peintures et objets du quotidien dans un cadre intime.", "detail": "Fermeture habituelle le lundi, horaires d’hiver plus courts. Le Café del Jardín est annoncé temporairement fermé : ne pas y prévoir de rendez-vous garanti."},source:sources.length-1});
sources.push({"name": "Casa Museo Lope de Vega · référence", "url": "https://www.esmadrid.com/en/house-museums"});
places.push({...{"id": "lope", "name": "Casa Museo Lope de Vega", "city": "Madrid", "kind": "Musée", "text": "Une petite maison liée au grand écrivain, dans le Barrio de las Letras.", "detail": "Vérifier les visites guidées et réserver avant de se déplacer."},source:sources.length-1});
sources.push({"name": "Les lettres & le Retiro · référence", "url": "https://www.esmadrid.com/en/house-museums"});
places.push({...{"id": "retiro", "name": "Les lettres & le Retiro", "city": "Madrid", "kind": "Balade", "text": "Plaza de Santa Ana → Barrio de las Letras → Paseo del Prado → une portion du Retiro. Environ 3 à 4 km.", "detail": "Par mauvais temps, choisir un musée. Vérifier travaux et accès avant de compter sur l’intérieur du Palacio de Cristal."},source:sources.length-1});
sources.push({"name": "Du Born à la Barceloneta · référence", "url": "https://www.barcelonaturisme.com/wv3/en/"});
places.push({...{"id": "born", "name": "Du Born à la Barceloneta", "city": "Barcelone", "kind": "Balade", "text": "Born → Santa Maria del Mar, extérieur → Port Vell → Barceloneta. Environ 3 km, 2 à 3 h.", "detail": "Le terminal de croisière peut être loin du vieux port. Prévoir séparément le transport jusqu’au terminal confirmé ; protéger documents et téléphone."},source:sources.length-1});
export const railSteps = [
['À Madrid : rejoindre la T4','Après les contrôles éventuels et les bagages, repérer le terminal. La gare Cercanías de l’aéroport est à la T4. Depuis une autre aérogare, suivre la navette officielle vers la T4. Ne pas supposer que le vol y arrive.'],
['Vers la bonne gare','Suivre « Renfe / Cercanías » et vérifier le trajet du jour vers Atocha. Un changement à Chamartín peut être nécessaire ; ne pas compter sur un train direct sans vérification. Consulter Renfe et le personnel.'],
['Une alternative depuis l’aéroport','Le bus jaune Exprés Aeropuerto dessert Atocha en journée et termine à Cibeles la nuit. Prévoir les aléas de circulation. En taxi officiel, donner le nom exact de la gare figurant sur le billet.'],
['À Puerta de Atocha–Almudena Grandes','Les quais Cercanías et les grandes lignes occupent des espaces distincts. Suivre « Salidas / Alta Velocidad », garder billet et pièce d’identité accessibles. Après un vol long-courrier, choisir une correspondance généreuse et un billet modifiable : aucune marge ne garantit la correspondance.'],
['À Málaga María Zambrano','Suivre « Cercanías », puis la C-1 direction Fuengirola. Vérifier si Los Boliches, Torreblanca, Carvajal ou Fuengirola convient le mieux à la destination. Ce train est distinct du train à grande vitesse.'],
['Le billet de proximité','Certains billets Renfe incluent un « Combinado Cercanías ». Vérifier le code et les conditions ; tous les transporteurs et tarifs ne l’incluent pas.']
];
export const railSources=[['Aena · train à Madrid-Barajas','https://www.aena.es/en/adolfo-suarez-madrid-barajas/getting-there/trains.html'],['EMT · Exprés Aeropuerto','https://www.emtmadrid.es/Bloques-EMT-Contenido/Aeropuerto.aspx?lang=es-ES'],['Renfe · Cercanías Málaga','https://www.renfe.com/es/es/cercanias/cercanias-malaga'],['Renfe · Málaga María Zambrano','https://www.renfe.com/es/es/inspirate/estaciones/malaga-maria-zambrano'],['Renfe · Valence–Madrid','https://www.renfe.com/es/fr/inspirate/rutas/valencia-madrid']];
export const ports=[
['Arrecife · Lanzarote','Charco de San Ginés → église San Ginés → bord de mer et pont vers le Castillo de San Gabriel selon l’accès. Environ 2 à 3 km, 2 à 3 h au centre.','Le quai exact peut ajouter beaucoup de marche. Pour Timanfaya, prévoir une excursion avec une marge confortable.','https://turismolanzarote.com/fr/arrecife/'],
['Santa Cruz · Tenerife','Plaza de España → marché Nuestra Señora de África → TEA si exposition ouverte → rues commerçantes. Environ 3 km, 3 à 4 h.','Le marché se découvre plutôt en première partie de journée. La Laguna demande un trajet supplémentaire ; éviter d’ajouter le Teide à une courte escale.','https://www.webtenerife.com/que-hacer/ocio/compras/mercados/mercado-nuestra-senora-de-africa/'],
['Las Palmas · Gran Canaria','Choisir Las Canteras pour la promenade en bord de mer, ou Vegueta → Plaza Santa Ana → Casa de Colón → Triana pour la culture.','Compter 3 à 4 h pour Vegueta. Le port est dans un autre secteur : réserver du temps pour le retour.','https://www.grancanaria.com/turismo/isla-de-gran-canaria/municipios-de-gran-canaria/las-palmas-de-gran-canaria/recorrervegueta/'],
['Funchal · Madère','Front de mer → cathédrale → Mercado dos Lavradores → vieille ville et Rua de Santa Maria. Environ 3 à 4 h avec pauses.','Demander le prix des fruits. Monte implique un déplacement en hauteur. En cas de nuit au port confirmée, garder une autre journée pour un jardin ; éviter une levada lointaine avant l’appareillage.','https://www.visitmadeira.com/en/what-to-do/culture-passionates/heritage/monuments-and-architecture/mercado-dos-lavradores/'],
['Tanger','Grand Socco → Petit Socco → médina → Kasbah. Environ 3 à 4 h avec pauses, montées et pavés.','Un guide officiel avec un rendez-vous précis peut faciliter la visite. Ne pas confondre Tanger-ville et Tanger Med ; vérifier l’heure du navire.','https://www.visitmorocco.com/fr/voyage/tanger/medina']
];
export const pois=[
{name:'Castillo Sohail',city:'Fuengirola',lat:36.525,lon:-4.629,source:'https://en.wikipedia.org/wiki/Sohail_Castle'},
{name:'Finca del Secretario',city:'Fuengirola',lat:36.55786453,lon:-4.61311356,source:'https://es.wikipedia.org/wiki/Finca_del_Secretario'},
{name:'Mercado Central',city:'Valence',lat:39.473503,lon:-.378942,source:'https://es.wikipedia.org/wiki/Mercado_Central_de_Valencia'},
{name:'Lonja de la Seda',city:'Valence',lat:39.474417,lon:-.378444,source:'https://en.wikipedia.org/wiki/Llotja_de_la_Seda'},
{name:'Torres de Serranos',city:'Valence',lat:39.479293,lon:-.375933,source:'https://en.wikipedia.org/wiki/Torres_de_Serranos'},
{name:'Plaza Mayor',city:'Madrid',lat:40.415364,lon:-3.707391,source:'https://en.wikipedia.org/wiki/Plaza_Mayor,_Madrid'},
{name:'Museo Cerralbo',city:'Madrid',lat:40.423684,lon:-3.714577,source:'https://es.wikipedia.org/wiki/Museo_Cerralbo'},
{name:'Parque del Retiro',city:'Madrid',lat:40.415,lon:-3.68389,source:'https://en.wikipedia.org/wiki/Retiro_Park'},
{name:'Port Vell (pas le terminal de croisière)',city:'Barcelone',lat:41.37675,lon:2.184639,source:'https://commons.wikimedia.org/wiki/Category:Port_Vell'},
{name:'Mercado dos Lavradores',city:'Funchal',lat:32.648639,lon:-16.903889,source:'https://en.wikipedia.org/wiki/Mercado_dos_Lavradores'}
];
const cafes=[
['lorena-centre','Lorena Café Fuengirola','Paseo Jesús Santos Rein, 1','Tartine, sandwich ou pause café : consulter la carte pour composer un repas léger.','https://lorenacafe.com/locales/'],
['lorena-boliches','Lorena Café Los Boliches','Avenida Ramón y Cajal, 48','Une pause dans le quartier de Los Boliches. Vérifier la carte et les horaires de ce point de vente.','https://lorenacafe.com/locales/'],
['tahona','Tahona de Chana','Avenida de los Boliches, 16','Boulangerie-pâtisserie pour une douceur et une pause café. Vérifier les horaires de cette adresse.','https://tahonadechana.es/tiendas/'],
['churros','Churrería Plaza del Carmen','Plaza del Carmen, 5','Churros, café ou chocolat le matin : une idée avant la Finca del Secretario.','https://www.thisisfuengirola.org/listing/churrer%C3%ADa-plaza-del-carmen/26105101/']
];
for(const [id,name,address,text,url] of cafes){sources.push({name,url});places.push({id,name,city:'Costa del Sol',kind:'Café',text,detail:address+' · Fuengirola. Adresse vérifiée ; position précise non publiée.',source:sources.length-1});}
sources.push({name:'Los Marinos Paco',url:'https://www.losmarinospaco.es/en/contact.html'});
places.push({id:'paco',name:'Los Marinos Paco',city:'Costa del Sol',kind:'Restaurant',text:'Un chiringuito décontracté à Carvajal, pour poisson, salades et plats à partager.',detail:'Paseo Marítimo Rey de España, 158. Autre établissement que Los Marinos José. Demander le prix avant de commander les poissons entiers au kilo ; confirmer l’ouverture.',source:sources.length-1});
places.find(p=>p.id==='marinos').detail+=' Adresse : Paseo Marítimo Rey de España, 161.';
