// Central image catalog. Every image on the site (hero bitmap, projects,
// leadership galleries, side quests) is referenced by key from here, so
// swapping a photo only needs a change in this file.
//
// Paths with special characters must be URL-encoded (e.g. "+" as %2B).

export const MEDIA = {
  // ---- Photo catalog (/public/photo_catalog) ----
  cameraPerception: {
    src: "/photo_catalog/project_covers/camera.png",
    alt: "Vision-language perception and grounding across campus cameras",
    caption: "Campus camera perception",
    tag: "RESEARCH",
  },
  threeKingdoms: {
    src: "/photo_catalog/project_covers/three_kingdoms.png",
    alt: "War of the Three Kingdoms game engine",
    caption: "War of the Three Kingdoms",
    tag: "WORK",
  },
  chatServer: {
    src: "/photo_catalog/project_covers/chat_server.png",
    alt: "Multithreaded C++ chat server",
    caption: "C++ chat server",
    tag: "WORK",
  },
  foodDelivery: {
    src: "/photo_catalog/project_covers/food_delivery.png",
    alt: "Food delivery microservices system",
    caption: "Food delivery microservices",
    tag: "WORK",
  },
  keystrokePi: {
    src: "/photo_catalog/project_covers/keystroke_pi.jpg",
    alt: "Keystroke Pi interactive Raspberry Pi installation",
    caption: "Keystroke Pi",
    tag: "WORK",
  },
  libraryMS: {
    src: "/photo_catalog/Library_Management_System.png",
    alt: "Library management system",
    caption: "Library management system",
    tag: "WORK",
  },
  buhackClosing: {
    src: "/photo_catalog/Buhack_closing.jpg",
    alt: "BUHack hackathon closing ceremony",
    caption: "BUHack closing ceremony",
    tag: "LEAD",
  },
  hwmunManilaSpeech: {
    src: "/photo_catalog/HWMUN_Manila_Speech.jpg",
    alt: "Bhawish giving a speech at Harvard WMUN Manila",
    caption: "Speech at HWMUN Manila",
    tag: "LEAD",
  },
  hwmunManilaCollab: {
    src: "/photo_catalog/HWMUN_Manila_Collaboration.jpg",
    alt: "Collaborating with delegates at Harvard WMUN Manila",
    caption: "Collaborating in Manila",
    tag: "LEAD",
  },
  hwmunTaipei: {
    src: "/photo_catalog/HWMUN_taipei.jpeg",
    alt: "Harvard WMUN Taipei",
    caption: "HWMUN Taipei",
    tag: "LEAD",
  },
  hwmunTaipeiGroup: {
    src: "/photo_catalog/HWMUN_taipei_group.jpeg",
    alt: "Group photo at Harvard WMUN Taipei",
    caption: "The delegation in Taipei",
    tag: "LEAD",
  },
  lse: {
    src: "/photo_catalog/LSE.JPG",
    alt: "LSE Generate Entrepreneurship Bootcamp",
    caption: "LSE Generate bootcamp",
    tag: "LEAD",
  },
  lsePitching: {
    src: "/photo_catalog/LSE_Pitching.JPG",
    alt: "Bhawish pitching at LSE Generate",
    caption: "Pitching at LSE",
    tag: "LEAD",
  },
  yceAward: {
    src: "/photo_catalog/YCE_Award.jpeg",
    alt: "Young Creative Entrepreneur (YCE) Award",
    caption: "YCE Award",
    tag: "LEAD",
  },
  samsungAward: {
    src: "/photo_catalog/samsung.jpeg",
    alt: "Merit Award at Samsung Solve for Tomorrow for FoodBites",
    caption: "Samsung Solve for Tomorrow",
    tag: "LEAD",
  },
  workshopHtmlCss: {
    src: "/photo_catalog/workshops/session1.png",
    alt: "Workshop session 1: Introduction to HTML & CSS",
    caption: "HTML & CSS",
    tag: "LEAD",
  },
  workshopBootstrap: {
    src: "/photo_catalog/workshops/session2.png",
    alt: "Workshop session 2: Creating modern websites with Bootstrap and Gen-AI",
    caption: "Bootstrap & Gen-AI",
    tag: "LEAD",
  },
  workshopJs1: {
    src: "/photo_catalog/workshops/session3.png",
    alt: "Workshop session 3: JS Essentials 1",
    caption: "JS Essentials 1",
    tag: "LEAD",
  },
  workshopJs2: {
    src: "/photo_catalog/workshops/session4.png",
    alt: "Workshop session 4: JS Essentials 2",
    caption: "JS Essentials 2",
    tag: "LEAD",
  },

  // ---- Earlier images ----
  travelLake: {
    src: "/images/Traveling.jpg",
    alt: "Bhawish sitting on a rock by a snowy mountain lake",
    caption: "Mountain lake",
    tag: "TRAVEL",
  },
  reflection: {
    src: "/images/Reflection.jpg",
    alt: "Bhawish sitting on a wooden deck overlooking green hills",
    caption: "Somewhere quiet",
    tag: "TRAVEL",
  },
  cycling: {
    src: "/images/Cycling.jpg",
    alt: "Bike handlebar on an evening cycling lane",
    caption: "Evening rides",
    tag: "LIFE",
  },
  munSpeech: {
    src: "/BK.jpg",
    alt: "Bhawish speaking in a Model UN committee",
    caption: "Model UN committee",
    tag: "LEAD",
  },
  munNotes: {
    src: "/b-cover.JPG",
    alt: "Committee notes and sticky notes on a desk",
    caption: "Committee notes",
    tag: "LEAD",
  },
  stage: {
    src: "/images/Debating.jpg",
    alt: "Bhawish speaking on stage with a microphone",
    caption: "On stage",
    tag: "LEAD",
  },
  lateNight: {
    src: "/in-cover.png",
    alt: "Collage of cycling, a hilltop view and code on a laptop at 3:27 AM",
    caption: "3:27 AM debugging",
    tag: "WORK",
  },
  hkbumunSite: {
    src: "/projectA.png",
    alt: "HKBUMUN conference website on a laptop mockup",
    caption: "HKBUMUN website",
    tag: "WORK",
  },
  uniFinder: {
    src: "/projectB.png",
    alt: "University Finder map on a laptop mockup",
    caption: "University Finder",
    tag: "WORK",
  },
  foodbites: {
    src: "/FOODBITESDEMO.gif",
    alt: "FoodBites food redistribution platform demo",
    caption: "FoodBites demo",
    tag: "WORK",
  },
};

export const media = (key) => MEDIA[key] ?? null;
