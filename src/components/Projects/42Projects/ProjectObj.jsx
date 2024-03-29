import images from "../../../module/Images";

const projects = [
  {
	id : 1,
    title: "Fdf File-De-Fer",

    imgUrl: images.fdf,

    description:
      "La représentation en relief d'un terrain est une pratique clef de la cartographie moderne.\n" +
      " Par exemple, en cette ère d'exploration spatiale, avoir une reproduction en trois\n" +
      "dimensions de la surface de Mars est un prérequis indispensable à la conquête de cette\n" +
      "planète.\n" +
      "Autre exemple, comparer des représentations en trois dimensions d'une zone où l'activité tectonique est importante permet de mieux comprendre ces phénomènes et leur\n" +
      "évolution, donc d'être mieux préparé.\n",

    language: "C",

    lien: "https://github.com/tetedecactus/fdf",
  },
  {
	id : 2,
    title: "Cub3D",

    imgUrl: images.cub3d,

    description:
      "Ce projet est inspiré du jeu Wolfeinstein3D, considéré comme le premier FPS" +
      "jamais développé. Il vous permettra d'explorer la technique du ray-casting. Votre objectif" +
      "est de faire une vue dynamique au sein d'un labyrinthe, dans lequel vous devrez trouver" +
      "votre chemin.",

    language: "C",

    lien: "https://github.com/tetedecactus/cub3d",
  },
  {
	id : 3,
    title: "Transcendence",

    imgUrl: images.transcendence_gif,

    description:
      "Ce project consiste à créer un site web pour participer à une compétition du célèbre" +
      "jeu Pong !" +
      "Grâce à votre site web, les utilisateurs pourront jouer à Pong entre eux. Vous fournirez" +
      "une interface utilisateur, un chat et des parties en ligne multijoueurs en temps réel !",

    language: "NestJs | Angular | PostgreSQL | Prisma | Figma | Github",

    lien: "https://github.com/tetedecactus/",
  },
];

export default projects;
