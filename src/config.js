module.exports = {
  siteTitle: 'Arpit | Data Scientist',
  siteDescription:
    'I\'m a Data Scientist, currntly pursuing my undergraduate degree in Computer Science and Engineering. I specialize in building Machine Learning models to tackle real-life challenges.',
  siteKeywords:
    'Arpit, ArpitFalcon, Data Science, Machine Learning, Data, Ranchi, BIT, Data Scientist',
  siteUrl: 'https://brittanychiang.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Arpit',
  location: 'Ranchi, India',
  email: 'arpitfalcon1@gmail.com',
  github: 'https://github.com/ArpitFalcon',
  twitterHandle: '@arpitfalcon1',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ArpitFalcon',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/arpitfalcon',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/bchiang7',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/bchiang7',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/arpitfalcon1',
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
      name: 'Work',
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
