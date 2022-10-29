module.exports = {
  siteTitle: 'Nnadi Charles',
  siteDescription:
    'Nnadi Charles is an incoming Software Developer, based in Nigeria, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Nnadi Charles, javascript, blockchain, fullstack developer, react.js, next.js, typescript, php, laravel, javascript, java, gatsby',
  siteUrl: 'https://github.com/Chimennadi',
  siteLanguage: 'en_US',
  name: 'Nnadi .C Charles',
  email: 'Chimennadi66@gmail.com',
  github: 'https://github.com/Chimennadi',
  twitterHandle: '@beekyhe',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Chimennadi',
    },
    {
      name: 'Linkedin',
      url: 'www.linkedin.com/in/nnadi-charles',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/beekyhe?t=yl5dBNP87RVXrusq9vLttw&s=09',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
