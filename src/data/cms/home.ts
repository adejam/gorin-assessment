export default {
  topNav: {
    brandIcon: require('../../assets/images/favicon.png'),
    hamburgerIcon: require("../../assets/images/hamburger.png")
  },
  slideView: {
    data: [
      {
        id: 0,
        image: require("../../assets/images/weather-image.png"),
        title: "Morning prayer",
        date: "20.10.2022",
        description: "יום שבת, ה׳ בסיוון תשפ״ב",
      },
      {
        id: 1,
        image: require("../../assets/images/weather-image.png"),
        title: "Afternoon prayer",
        date: "20.10.2022",
        description: "יום שבת, ה׳ בסיוון תשפ״ב",
      },
      {
        id: 2,
        image: require("../../assets/images/weather-image.png"),
        title: "Night prayer",
        date: "20.10.2022",
        description: "יום שבת, ה׳ בסיוון תשפ״ב",
      },
    ]
  },
  featuresList: [
    {
      title: 'Download',
      iconData: {
        icon: require('../../assets/icons/download.png'),
        width: 30,
        height: 25
      },
    },
    {
      title: 'Routine',
      iconData: {
        icon: require('../../assets/icons/bell.png'),
        width: 19,
        height: 25
      },
    },
    {
      title: 'Favourites',
      iconData: {
        icon: require('../../assets/icons/star.png'),
        width: 26,
        height: 25
      }
    },
    {
      title: 'Recents',
      iconData: {
        icon: require('../../assets/icons/clock.png'),
        width: 26,
        height: 26
      }
    },
  ],
  libraryBooks: {
    title: "Shiurim",
    subTitle: "(+50 Learn today)",
    data: [
      {
        id: 0,
        title: "Jumash",
        image: require('../../assets/images/books/jumash.png'),
        progress: 8,
        duration: '4m'
      },
      {
        id: 1,
        title: "tania",
        image: require('../../assets/images/books/tania.png'),
        progress: 25,
        duration: '10m'
      },
      {
        id: 2,
        title: "Rambam",
        image: require('../../assets/images/books/rambam.png'),
        progress: 0,
        duration: '2hrs 30min'
      },
      {
        id: 3,
        title: "haiom",
        image: require('../../assets/images/books/haiom.png'),
        progress: 100,
        duration: '1hr 55min'
      },
    ]
  },
  qouteComponent: {
    author: "Mishneh Tarah",
    quote: "In that era, there will be neither famine or war, envy or competition, for good will flow in abundance and all the delightswill be freely available as dust. The occupation of the entire world will be solerly to know G-d."
  },
  discussionComponent: {
    headingTitle: "Live group discussion",
    data: [
      {
        id: 0,
        title: "Lorem ipsum",
        description: "Lorem ipsum is simply dummy text of the printing",
        host: "Rebba",
        people: [
          require('../../assets/images/people/person1.png'),
          require('../../assets/images/people/person2.png'),
          require('../../assets/images/people/person3.png'),
          require('../../assets/images/people/person1.png'),
          require('../../assets/images/people/person2.png'),
          require('../../assets/images/people/person3.png'),
        ]
      },
      {
        id: 1,
        title: "Lorem ipsum",
        description: "Lorem ipsum is simply dummy text of the printing",
        host: "Rebba",
        people: [
          require('../../assets/images/people/person1.png'),
          require('../../assets/images/people/person2.png'),
          require('../../assets/images/people/person3.png'),
          require('../../assets/images/people/person1.png'),
          require('../../assets/images/people/person2.png'),
          require('../../assets/images/people/person3.png'),
          require('../../assets/images/people/person1.png'),
          require('../../assets/images/people/person2.png'),
        ]
      }
    ]
  },
  audioBooksSection: {
    headingTitle: "Nigunim",
    data: [
      {
        id: 0,
        title: "Calm Jewish",
        subtitle: "To relax",
        sessions: 43,
        image: require('../../assets/images/calm-jewish.png')
      },
      {
        id: 1,
        title: "Chadbad Ni...",
        subtitle: "Chadbod music",
        sessions: 43,
        image: require('../../assets/images/chabod.png')
      },
    ]
  },
  booksListComponent: {
    headingTitle: "Kids",
    data: [
      {
        id: 0,
        title: 'Moises',
        description: "the story of",
        image: require('../../assets/images/moses.png'),
        totalSession: 43
      },
      {
        id: 1,
        title: 'Exodus',
        description: "the exodus from Egypt",
        image: require('../../assets/images/exodus.png'),
        totalSession: 21
      }
    ]
  },
  CTAComponent: {
    ctaText: "Help other Jews illuminate their lives by studying the Torah",
  },
  appreciationComponent: {
    title: "Special thanks",
    subtitle: "to Yossi Mandy Lerman",
    description: "thanks to his generous donation, we can stydy in “Shiurim” today."
  }
}
