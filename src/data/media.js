// Central image catalog. Every image on the site (hero bitmap, projects,
// leadership galleries, side quests) is referenced by key from here, so
// swapping a photo only needs a change in this file.
//
// The current entries are SAMPLE images reused from /public. Replace `src`
// (and `caption` / `alt`) once the custom catalog is ready. Suggested folders:
//   /public/images/hero/        /public/images/projects/<slug>/
//   /public/images/leadership/  /public/images/life/

export const MEDIA = {
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
