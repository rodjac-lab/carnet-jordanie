export type JordanMoment = {
  slug: string;
  title: string;
  eyebrow: string;
  dates: string;
  place: string;
  summary: string;
  cover: string;
  images: string[];
};

const image = (name: string) => `${import.meta.env.BASE_URL}jordan/selected-v1/${name}.webp`;

export const jordanMoments: JordanMoment[] = [
  {
    slug: "amman",
    title: "Amman",
    eyebrow: "Ville",
    dates: "1 et 12 août 2025",
    place: "Amman",
    summary: "Amman est une capitale ancienne et très vivante, construite sur plusieurs collines et marquée par les traces de nombreuses époques. La citadelle, le théâtre romain et les quartiers plus récents racontent une ville qui a grandi par strates, entre héritages antiques, ottomans et modernes. Aujourd'hui, elle mêle circulation dense, cafés, commerces, immeubles contemporains et scènes de rue plus traditionnelles. On y croise une population nombreuse et diverse, venue de tout le pays et parfois de plus loin, qui donne à la ville son énergie quotidienne. Amman n'est donc pas seulement une porte d'entrée : elle montre aussi une Jordanie urbaine, actuelle, entre mémoire et mouvement.",
    cover: image("PXL_20250801_071850215"),
    images: [
      image("PXL_20250801_071850215"),
      image("PXL_20250801_073158965"),
      image("PXL_20250801_193045755.MP"),
      image("PXL_20250812_174127188"),
    ],
  },
  {
    slug: "jerash-ajloun",
    title: "Jerash et Ajloun",
    eyebrow: "Nord antique",
    dates: "31 juillet 2025",
    place: "Jerash, Ajloun",
    summary: "Jerash est l'une des grandes villes antiques les mieux conservées de la région, avec ses rues à colonnades, ses temples, ses théâtres et son vaste forum ovale. L'ancienne Gérasa rappelle l'importance de la Décapole romaine et la place de ces cités dans les échanges du Proche-Orient. Plus à l'ouest, le château d'Ajloun raconte une autre période, celle des forteresses médiévales et du contrôle des routes à l'époque ayyoubide. Les deux sites se visitent facilement depuis Amman, ce qui en fait une excursion naturelle vers le nord du pays. Ensemble, ils donnent une première lecture de la Jordanie comme carrefour d'empires, de routes et de paysages.",
    cover: image("PXL_20250731_074208069"),
    images: [
      image("PXL_20250731_070457590"),
      image("PXL_20250731_073740899"),
      image("PXL_20250731_080220369"),
      image("PXL_20250731_080922749"),
      image("PXL_20250731_094346725"),
      image("PXL_20250731_095148298"),
    ],
  },
  {
    slug: "chateaux-desert",
    title: "Châteaux du désert",
    eyebrow: "Route",
    dates: "1 août 2025",
    place: "Est jordanien",
    summary: "Les châteaux du désert ne sont pas seulement des ruines isolées : ils racontent la manière dont les pouvoirs omeyyades occupaient, surveillaient et mettaient en valeur ces espaces de route. Certains servaient de relais, de résidences, de lieux de chasse ou de points d'appui dans un territoire traversé par les caravanes. Qasr Amra garde des fresques étonnantes, tandis que Qasr Azraq est associé à Lawrence d'Arabie, qui y installa son quartier général pendant la Révolte arabe. La route entre ces sites fait aussi partie de l'expérience, avec de longues lignes droites, des paysages ouverts et cette impression de traverser une Jordanie plus minérale. C'est une journée où l'histoire apparaît par petites touches, au milieu du désert.",
    cover: image("PXL_20250801_130723270"),
    images: [
      image("PXL_20250801_111830966"),
      image("PXL_20250801_193045755.MP"),
      image("PXL_20250801_130723270"),
      image("PXL_20250801_135618644"),
      image("PXL_20250801_130047123"),
      image("PXL_20250801_134028299"),
    ],
  },
  {
    slug: "nebo-madaba",
    title: "Béthanie, Madaba et le mont Nebo",
    eyebrow: "Mosaïques",
    dates: "2, 3, 10 et 11 août 2025",
    place: "Vallée du Jourdain, Madaba, Nebo",
    summary: "Béthanie au-delà du Jourdain est associée au baptême du Christ par Jean le Baptiste, ce qui en fait l'un des lieux majeurs de la géographie biblique en Jordanie. La proximité du Jourdain donne à la visite une dimension très concrète, entre paysage actuel et récits du Nouveau Testament. À Madaba, les mosaïques rappellent l'importance des communautés chrétiennes anciennes, notamment avec la célèbre carte de la Terre sainte conservée dans l'église Saint-Georges. Le mont Nebo renvoie lui à Moïse, qui aurait contemplé la Terre promise depuis ces hauteurs avant sa mort. Entre ces étapes, le voyage suit une ligne spirituelle et historique où la Bible, les paysages et les traces archéologiques se répondent.",
    cover: image("PXL_20250803_091109155.PANO"),
    images: [
      image("PXL_20250802_130052563"),
      image("PXL_20250803_090646065"),
      image("PXL_20250802_130950653"),
      image("PXL_20250802_124549004"),
      image("PXL_20250803_091109155.PANO"),
      image("PXL_20250802_132124693"),
    ],
  },
  {
    slug: "dana",
    title: "Dana, falaise et lumière du soir",
    eyebrow: "Nature",
    dates: "3 et 4 août 2025",
    place: "Dana",
    summary: "La réserve de biosphère de Dana protège l'un des ensembles naturels les plus riches de Jordanie, avec des paysages qui descendent des hauts plateaux vers les vallées plus chaudes du sud. On y trouve une grande diversité de milieux, de roches, de plantes et d'animaux, dans un espace où les reliefs changent très vite. La réserve préserve notamment des espèces adaptées aux zones arides, des oiseaux, des plantes rares et des habitats fragiles qui seraient facilement menacés sans protection. C'est aussi un lieu habité et parcouru depuis longtemps, où la conservation doit composer avec les villages, les sentiers et les usages locaux. Dana donne ainsi une autre image du pays : moins monumentale que Pétra, mais essentielle pour comprendre la richesse naturelle de la Jordanie.",
    cover: image("PXL_20250803_160804223"),
    images: [
      image("PXL_20250804_052159339"),
      image("PXL_20250804_052801688"),
      image("PXL_20250804_072922049.MP"),
      image("PXL_20250804_063232226"),
      image("PXL_20250804_064521182"),
    ],
  },
  {
    slug: "petra-siq",
    title: "Pétra, le Siq et le Trésor",
    eyebrow: "Pétra",
    dates: "5 août 2025",
    place: "Wadi Musa",
    summary: "Le cœur du voyage : entrée dans le Siq, façades nabatéennes et première apparition du Trésor.",
    cover: image("PXL_20250805_055643148"),
    images: [
      image("PXL_20250805_052136393.PANO"),
      image("PXL_20250805_043801562"),
      image("PXL_20250805_052621633.PANO"),
      image("PXL_20250805_055643148"),
      image("PXL_20250805_060005190"),
    ],
  },
  {
    slug: "petra-night",
    title: "Pétra, hauteurs et nuit",
    eyebrow: "Monastère",
    dates: "6 août 2025",
    place: "Pétra",
    summary: "Pétra est d'abord l'œuvre des Nabatéens, peuple de commerçants qui sut transformer un site de vallées rocheuses en capitale prospère. Leur maîtrise de l'eau est l'une des clés du lieu : canaux, citernes et bassins permettaient de capter, guider et conserver une ressource rare dans cet environnement aride. Le Trésor marque l'entrée la plus spectaculaire, mais le site ne s'arrête pas à cette façade : tombeaux royaux, théâtre, temples, hauts lieux de sacrifice et Monastère composent une ville immense. Pétra s'étend sur plusieurs vallées, avec des escaliers, des détours et des points de vue qui changent sans cesse l'échelle du paysage. Il faut du temps pour l'approcher vraiment, et nos journées l'ont bien montré : près de sept heures de marche par jour pour en saisir seulement une partie.",
    cover: image("PXL_20250806_183501196.NIGHT"),
    images: [
      image("PXL_20250806_071811368"),
      image("PXL_20250806_160432800"),
      image("PXL_20250806_080535131"),
      image("PXL_20250806_083428846"),
      image("PXL_20250806_181156368.MP"),
      image("PXL_20250806_183501196.NIGHT"),
    ],
  },
  {
    slug: "wadi-rum",
    title: "Wadi Rum, piste et ballon",
    eyebrow: "Désert",
    dates: "7 et 8 août 2025",
    place: "Wadi Rum",
    summary: "Le Wadi Rum concentre l'image la plus spectaculaire du désert jordanien : pistes de sable, falaises rouges, arches naturelles et campement sous un ciel très ouvert. La piste en pick-up donne l'échelle du paysage, entre grands blocs de grès et vallées qui semblent se prolonger sans fin. Le lendemain, le vol en ballon ajoute une autre lecture du désert, plus lente et plus silencieuse, au-dessus des reliefs éclairés par le lever du soleil. Voir le ballon se gonfler avant l'aube fait aussi partie du souvenir, avec la chaleur des brûleurs et l'immensité encore sombre autour de nous. C'est une étape où le désert se vit autant au sol que depuis le ciel.",
    cover: image("PXL_20250807_150121404.PANO"),
    images: [
      image("PXL_20250807_150121404.PANO"),
      image("PXL_20250807_153625118"),
      image("PXL_20250807_183014656"),
      image("PXL_20250808_022928539"),
      image("PXL_20250808_024907822"),
      image("PXL_20250808_031112019"),
    ],
  },
  {
    slug: "mers",
    title: "Mer Rouge et mer Morte",
    eyebrow: "Final",
    dates: "9 et 10 août 2025",
    place: "Aqaba, Wadi Mujib, Mer Morte",
    summary: "Après le désert, Aqaba ouvre une étape différente, tournée vers la mer Rouge, ses palmiers, ses lumières de fin de journée et son ambiance balnéaire. La côte est courte en Jordanie, mais elle compte beaucoup : elle donne au pays son accès à la mer, avec une atmosphère plus détendue et plus maritime. Le retour vers la mer Morte change encore de décor, entre chaleur minérale, eau salée et paysages très bas en altitude. Le Wadi Mujib ajoute une parenthèse plus sportive, avec ses gorges, ses passages dans l'eau et ses parois resserrées. Cette dernière séquence rassemble donc deux mers très différentes et une autre manière de finir le voyage, entre baignade, canyon et lumière.",
    cover: image("PXL_20250809_160139363"),
    images: [
      image("PXL_20250809_160139363"),
      image("PXL_20250809_172147195"),
      image("PXL_20250808_101617444.PORTRAIT"),
      image("PXL_20250810_104305615.MP"),
      image("PXL_20250810_100021159"),
      image("PXL_20250810_143740304"),
      image("PXL_20250810_143641414"),
    ],
  },
];
