import {
  bank_app,
  metaversus,
  threeJS,
  lyriks,
  raven_macaw,
  movie_app,
  airbnb_clone,
  promptopia,
  carondara_childrens_day,
  the_hill_poster,
  december,
  africado,
  collaboration,
  gameday,
  meet_the_champ,
  unit_hangout,
  tidywash_flyer,
  abahi,
  aisha,
  zion,
  flex,
  owie,
  owie1,
  owie2,
  susan,
  suzie,
} from '../../public/assets';

export const photosInfo = [
  {
    name: 'David',
    key: 'David',
    description: 'Via S&B Multimedia Studios, Makurdi',
    image: owie2,
  },
  {
    name: 'Justina',
    key: 'Justina',
    description: 'Via S&B Multimedia Studios, Makurdi',
    image: abahi,
  },
  {
    name: 'Susan',
    key: 'Susan',
    description: 'Via S&B Multimedia Studios, Makurdi',
    image: susan,
  },
  {
    name: 'Aisha',
    key: 'Aisha',
    description: 'Via S&B Multimedia Studios, Makurdi',
    image: aisha,
  },
  {
    name: 'Zion',
    key: 'Zion',
    description: 'Via S&B Multimedia Studios, Makurdi',
    image: zion,
  },
  {
    name: 'David',
    key: 'David1',
    description: 'Via JNOD Studios, Abuja',
    image: owie,
  },
  {
    name: 'Suzie',
    key: 'Suzie',
    description: 'Via S&B Multimedia Studios, Makurdi',
    image: suzie,
  },
  {
    name: 'El Flex',
    key: 'El Flex',
    description: 'Via S&B Multimedia Studios, Makurdi',
    image: flex,
  },
  {
    name: 'David',
    key: 'David2',
    description: 'Via JNOD Studios, Abuja',
    image: owie1,
  },
];

export const graphicsInfo = [
  {
    name: 'The Hill Poster',
    description: 'Movie Poster designed as personal practice project',
    image: the_hill_poster,
  },
  {
    name: 'Meet The Champ',
    description: 'NBA flier designed as personal practice project',
    image: meet_the_champ,
  },
  {
    name: 'Hello December',
    description: 'Flier designed for new month(December)',
    image: december,
  },
  {
    name: 'Tidy Wash',
    description: 'Logo and Flier designed for a brand that offers cleaning services',
    image: tidywash_flyer,
  },
  {
    name: 'Gameday',
    description: 'NBA flier designed as personal practice project',
    image: gameday,
  },
  {
    name: 'Unit Hangout',
    description: 'Flier designed for a Church Unit Hangout Event',
    image: unit_hangout,
  },
  {
    name: 'Carondara Childrens Day',
    description: 'Flier designed for an NGO Event',
    image: carondara_childrens_day,
  },
  {
    name: 'Carondara Collaboration',
    description: 'Flier designed for an NGO Event',
    image: collaboration,
  },
  {
    name: 'Africado Youth Conference',
    description: 'Flier designed for an NGO Event',
    image: africado,
  },
];

export const projectsInfo = [
  {
    name: 'Airbnb Clone',
    tech: ['Next.JS', 'TailwindCSS', 'NextAuth', 'Typescript', 'Prisma', 'MongoDB', 'Cloudinary'],
    description:
      'This is an Airbnb Clone with full CRUD Functionality, built with NEXT.JS, Typescript, Prisma, MongoDB, NextAuth, Cloudinary.',
    image: airbnb_clone,
    github: 'https://github.com/UjiDavid/airbnb',
    link: 'https://rent-project-ujidavid.vercel.app/',
    projectUrl: '/airbnb',
  },
  {
    name: 'Promptopia',
    tech: ['Next.JS', 'NextAuth', 'TailwindCSS', 'MongoDB'],
    description:
      'Promptopia is a Full Stack Application that allows users add AI Prompts that can be copied and used by anyone. Built using Next.JS, MongoDB, NextAuth',
    image: promptopia,
    github: 'https://github.com/UjiDavid/promptopia',
    link: 'https://promptopia-ujidavid.vercel.app/',
    projectUrl: '/promptopia',
  },
  {
    name: 'HooBank',
    tech: ['React.JS', 'TailwindCSS'],
    description:
      'Hoo Bank is a Bank website with a modern desgin, it is a  responsive React JS application consisting of a stunning hero section, high-quality assets and gradients, business stats, reusable feature sections with call-to-action buttons, testimonials, and more!',
    image: bank_app,
    github: 'https://github.com/UjiDavid/bank_app',
    link: 'https://bank-app-ujidavid.vercel.app/',
    projectUrl: '/hoobank',
  },
  {
    name: 'Metaversus',
    tech: ['Next.JS', 'Framer Motion', 'TailwindCSS'],
    description:
      'Metaversus is a web3 project about the Metaverse. It has soft and pleasant gradients, and cool and complex animations created using framer motion.',
    image: metaversus,
    github: 'https://github.com/UjiDavid/metaversus',
    link: 'https://metaversus-ujidavid.vercel.app/',
    projectUrl: '/metaversus',
  },
  {
    name: '3D Shirt',
    tech: ['React', 'ThreeJS', 'React Three Fiber', 'Framer Motion'],
    description:
      '3D Shirt is a react app, with some cool 3D effects from Three JS. It enables users customize a shirt with custom colors or texture, users can also imprint a custom logo on the shirt. And download an image of the customized shirt.',
    image: threeJS,
    github: 'https://github.com/UjiDavid/threejs',
    link: 'https://threejs-ujidavid.vercel.app/',
    projectUrl: '/3Dshirt',
  },
  {
    name: 'Lyriks',
    tech: ['React.JS', 'TailwindCSS', 'Redux', 'RapidAPI'],
    description:
      'Lyriks is a music player that uses the Shazam API to play music and display lyrics, it also uses Geolocation API to recommend songs based on the location of the User.',
    image: lyriks,
    github: 'https://github.com/UjiDavid/lyriks',
    link: 'https://david-lyrics-app.netlify.app/',
    projectUrl: '/lyriks',
  },
  {
    name: 'Raven & Macaw HMO',
    description:
      'Raven & Macaw HMO is a Health Management Organisation website built. I built it as part of an interview assesment.',
    tech: ['React.JS'],
    image: raven_macaw,
    github: 'https://github.com/UjiDavid/raven-macaw',
    link: 'https://raven-macaw.vercel.app',
    projectUrl: '/raven_macaw',
  },
  {
    name: 'Movie App',
    tech: ['React.JS', 'OmdbAPI'],
    description:
      'Movie App is a movie website where you can search any movie and it displays movies based on the search query, infomation about a particular movie is displayed when the user selects a movie.',
    image: movie_app,
    github: 'https://github.com/UjiDavid/movie_app',
    link: 'https://movie-app-ujidavid.vercel.app/',
    projectUrl: '/movie_app',
  },
];
