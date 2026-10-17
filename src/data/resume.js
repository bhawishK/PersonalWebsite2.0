// Single source of truth for the site content. Mirrors the resume PDF
// (public/pdfs/Resume.pdf) section by section.

export const PROFILE = {
  name: "Bhawish Kumar",
  headline: "Computer Science @ HKBU",
  location: "Hong Kong SAR",
  email: "bhawishkumar000@gmail.com",
  github: "https://github.com/bhawishK",
  githubHandle: "bhawishK",
  linkedin: "https://www.linkedin.com/in/bhawishkumar/",
  linkedinHandle: "bhawishkumar",
  resumePdf: "/pdfs/Resume.pdf",
  photo: "munSpeech",
  summary:
    "I'm a Computer Science undergraduate at Hong Kong Baptist University. I got into CS because I love games, and I stayed because of the problems behind them: how machines perceive the world, how systems talk to each other, and how software can be made for people. Right now my research is on vision-language perception and grounding across campus cameras (IEEE MetaCom 2026). Outside the lab I ship production software and run a student coding community.",
  interests: [
    "Virtual Reality & Augmented Reality",
    "Multimodal Artificial Intelligence",
    "Software design & development",
    "Distributed & cloud systems",
  ],
  stats: [
    { label: "cGPA", value: "3.59", color: "sun" },
    { label: "Publications", value: "2", color: "azure" },
    { label: "Competition awards", value: "3", color: "mint" },
    { label: "Workshops led", value: "11", color: "bubble" },
  ],
};

export const EDUCATION = [
  {
    school: "Hong Kong Baptist University",
    location: "Hong Kong",
    degree: "B.Sc. (Hons) in Computer Science",
    gpaLabel: "cGPA",
    gpa: "3.59",
    dates: "Aug 2023 – Expected 2027",
    concentration: "Computing and Software Technologies",
    honors: [
      "Full Scholarship for Overseas Applicants",
      "Outstanding Student Leadership Award",
      "Outstanding Student Performance Award",
      "Undergraduate Scholarship",
    ],
    kind: "Degree",
    color: "azure",
  },
  {
    school: "Beijing Normal–Hong Kong Baptist University",
    location: "Zhuhai, China",
    degree: "Extended Study Programme",
    gpaLabel: "GPA",
    gpa: "3.60",
    dates: "Feb 2025 – Jun 2025",
    honors: [],
    kind: "Exchange",
    color: "mint",
  },
  {
    school: "London School of Economics",
    location: "London, UK",
    degree: "Entrepreneurship Bootcamp",
    dates: "Jun 2026",
    honors: ["Best Pitch Award"],
    kind: "Bootcamp",
    color: "coral",
  },
];

export const PUBLICATIONS = [
  {
    authors: [
      "Muhammad Ahmad Nadeem*",
      "Luka Turmanidze*",
      "Bhawish Kumar*",
      "Habibul Bashar*",
      "Martin Man Ting Choy",
      "Kenny Kam Kong Cheng",
    ],
    title: "Language and Vision-Conditioned Perception and Grounding Across Campus Cameras",
    venue: "IEEE MetaCom 2026",
    status: "To appear",
    note: "* Equal contribution",
    project: "vision-language-grounding",
    color: "grape",
  },
  {
    authors: ["Simon Ho Wang", "Bhawish Kumar"],
    title:
      "Bridging gaps in student engagement: Innovative data governance in Language Centre administration",
    venue:
      "Engagement in the Digital Age: International Conference on Language Teaching and Learning, p. 139, 2024",
    status: "Conference abstract",
    color: "tangerine",
  },
];

export const EXPERIENCE = [
  {
    org: "IPv4 Superhub Limited",
    location: "Tsim Sha Tsui, Hong Kong",
    role: "Full Stack Developer Intern",
    dates: "Jun 2025 – Present",
    current: true,
    bullets: [
      "Implemented event-driven payment workflows integrating Stripe invoice and WebSocket-based payment-completion updates across backend and customer interfaces.",
      "Developed multi-factor authentication and role-based authorization, including employee permissions and method-level access controls improving system security by 30%.",
      "Addressed duplicate-charge behavior, and refactored authentication and transaction components to separate responsibilities and validate inputs.",
    ],
    color: "coral",
  },
  {
    org: "Language Centre, Hong Kong Baptist University",
    location: "Hong Kong",
    role: "Student Assistant",
    dates: "Sep 2024 – Jan 2025",
    bullets: [
      "Organized generative AI workshops for 50+ students for AI-assisted language learning.",
      "Collaborated on development of an in-house chatbot serving 100+ users.",
    ],
    color: "azure",
  },
  {
    org: "Language Centre, Hong Kong Baptist University",
    location: "Hong Kong",
    role: "Software Developer Intern",
    dates: "Jun 2024 – Aug 2024",
    bullets: [
      "Debugged full-stack link-shortening application and devised new interface designs in Figma, reducing bugs by 30%.",
      "Developed Python scripts to clean, transform, and organize Excel-based academic records, automating repetitive preparation tasks and reducing manual effort in preparing data for subsequent use.",
    ],
    color: "mint",
  },
];

// `details` (long-form paragraphs) and `gallery` are placeholders to be filled in.
// Gallery items: { media: "<key from MEDIA>", caption?: "..." }
export const PROJECTS = [
  {
    slug: "vision-language-grounding",
    title: "Vision Language Perception and Grounding Across Campus Cameras",
    tech: ["Python", "NVIDIA Isaac Sim"],
    category: "Research",
    bullets: [
      "Collaborated on the conversion of everyday language into pinpoint locations and classify the degree of SAR located via reasoning grounded in spatial relations. Preliminary results show 95.6% accuracy.",
      "Integrated Qwen-based candidate verification with local and remote inference backends, validated outputs, and deterministic fallback mechanisms.",
      "Revised person selection to preserve all detected candidates under bounded detail-crop budgets, incorporating soft scene evidence and landmark-based detection refinement.",
    ],
    summary: "Turning everyday language into precise locations across a network of campus cameras.",
    metric: "95.6% accuracy",
    highlight: "IEEE MetaCom 2026 · To appear",
    cover: "cameraPerception",
    details: [
      "The full write-up will be added after the paper appears at IEEE MetaCom 2026.",
    ],
    gallery: [],
    links: {},
    color: "grape",
  },
  {
    slug: "three-kingdoms-engine",
    title: "War of the Three Kingdoms Game Engine",
    tech: ["Kotlin", "Object-Oriented Design"],
    category: "Game",
    bullets: [
      "Designed and implemented object-oriented design patterns using Kotlin to establish game rules & mechanics.",
      "Created design patterns like Strategy and State, enabling interaction & gameplay strategies within the engine.",
    ],
    summary: "A hidden-role card battle whose rules live in Factory, Command, Strategy, and State.",
    cover: "threeKingdoms",
    details: [
      "War of the Three Kingdoms is a Kotlin console simulation of a hidden-role card battle. Four to eight players sit as Lord, Loyalist, Rebel, or Spy. They draw from a shuffled deck of Attack, Dodge, Peach, delayed spells, Duel, and equipment, then play until the Lord side, the Rebels, or the Spy wins. What you see is a text log: setup, cards created, skills, judgments, attacks, and the result.",
      "The deck does not know the concrete card classes. CardFactory builds each card from a separate deck configuration, and general factories do the same for players. Skills observe game events, and the Spy watches the Lord. Lightning, Acedia, and Duel are commands that resolve either immediately or at judgment time. Each role carries a Strategy that chooses whom to attack. Circular seating, attack range, and horse equipment decide whether that target is actually in reach.",
      "Health is a State, not a flag buried in the turn loop. Liu Bei plays differently once he drops below the health threshold, then returns to the healthy behavior when he recovers. The same split — Factory for creation, Observer for reactions, Command for effects, Strategy for targets, State for condition — is what keeps a rules-heavy card game from collapsing into one class.",
    ],
    gallery: [
      { media: "tkSetup", caption: "Setup · Cao Cao enters" },
      { media: "tkCardFactory", caption: "Card factory building the deck" },
      { media: "tkAttack", caption: "Sima Yi attacks Lord Liu Bei" },
      { media: "tkDodge", caption: "Attack, then dodge" },
      { media: "tkDuel", caption: "Duel" },
      { media: "tkDistance", caption: "Distance and horses" },
      { media: "tkEntourage", caption: "Entourage" },
      { media: "tkSkills", caption: "Skills" },
      { media: "tkStrategy", caption: "A role picks its target" },
      { media: "tkState", caption: "Health state and judgment" },
      { media: "tkUmlEngine", caption: "Game engine", wide: true },
      { media: "tkUmlFactory", caption: "Card factory and deck", wide: true },
      { media: "tkUmlCommand", caption: "Command-based card effects", wide: true },
      { media: "tkUmlStrategy", caption: "Role strategies", wide: true },
      { media: "tkUmlSkills", caption: "Skills", wide: true },
      { media: "tkUmlState", caption: "Healthy and unhealthy states", wide: true },
    ],
    links: { github: "https://github.com/bhawishK/War-of-Three-Kingdoms-Game-Engine" },
    color: "coral",
  },
  {
    slug: "multithreaded-chat-server",
    title: "Multithreaded Chat Server",
    tech: ["C++", "Winsock", "Python", "PyQt5"],
    category: "Systems",
    bullets: [
      "Collaborated on multithreaded C++ chat server with XOR-based encryption, supporting real-time & group messaging.",
      "Designed & implemented Python GUI client enabling user friendly experience & navigation.",
    ],
    summary: "Real-time and group messaging over a multithreaded, encrypted C++ server with a PyQt5 client.",
    cover: "chatServer",
    details: [
      "A C++ server and a Python client talk over TCP. Messages are XOR-encrypted and hex-encoded before they leave the socket. From the PyQt5 window you can direct-message someone with /msg, create a group, and send into that group. The server keeps the live user list and the group list in step while people connect and disconnect.",
      "Each connection runs on its own thread through WinSock. Mutexes guard the shared maps so one client’s login cannot race another client’s group update. An earlier console client is still in the repository as the first prototype. The GUI client is the one in the demo.",
    ],
    video: "https://youtu.be/YYSP43V1WGY",
    gallery: [],
    links: { github: "https://github.com/bhawishK/Chat-Server" },
    color: "azure",
  },
  {
    slug: "food-delivery-microservices",
    title: "Food Delivery Microservices",
    tech: ["Java", "Spring Boot", "Eureka", "Docker"],
    category: "Backend",
    bullets: [
      "Microservices-based food delivery system with authentication, order tracking, restaurant management & deployment.",
    ],
    summary: "Spring Boot microservices for authentication, order tracking and restaurant management.",
    cover: "foodDelivery",
    details: [
      "Food Delivery is a full-stack platform split so each part can be deployed, scaled, and replaced on its own. The services do not call hard-coded addresses. They register with Netflix Eureka and find each other through that registry. Every service ships in its own Docker image.",
      "Four services sit behind a Next.js client. Restaurant Listing is where you browse and add restaurants. Food Catalogue owns each menu: items, availability, and price. Order creates an order and keeps it. User handles signup, login, and who placed the order. When an order is placed, Order asks the others to verify the restaurant, fetch items and prices, and validate the user.",
      "The client covers the path a person actually takes: create an account, sign in, browse restaurants, open a menu, and order. Building it meant drawing those boundaries first, then wiring discovery, containerizing each service, and keeping persistence behind JPA so a service can use the database that fits it without the others knowing.",
    ],
    gallery: [
      { media: "foodHome", caption: "All restaurants", wide: true },
      { media: "foodRestaurant", caption: "A restaurant", wide: true },
      { media: "foodCreate", caption: "Create a restaurant" },
      { media: "foodSignup", caption: "Sign up" },
      { media: "foodSignin", caption: "Sign in" },
      { media: "foodArchitecture", caption: "Four services, one Eureka registry", wide: true },
    ],
    links: { github: "https://github.com/bhawishK/Food-Delivery-Application-Microservices" },
    color: "tangerine",
  },
  {
    slug: "keystroke-pi",
    title: "Keystroke Pi",
    tech: ["Python", "Pygame", "Raspberry Pi"],
    category: "Installation",
    bullets: [
      "Collaborated on interactive Raspberry Pi installation program that challenges people to identify their own writing among nine lines of locally generated AI text.",
    ],
    summary: "A cyberdeck that learns your typing and writes nine ghost lines beside your own.",
    cover: "keystrokePi",
    details: [
      "Keystroke Pi is a small cyberdeck: a 720 × 720 screen, a board of red tactile keys, and a camera, held in a frosted 3D-printed shell. Ten lines of serif text sit on the display. One line is yours. The other nine are ghosts. They type when you type, and the piece asks whether you can still pick out your own writing.",
      "Nothing is pretrained, and nothing leaves the device. A character-level model of order three lives in the same process that draws the screen. Each accepted key — a letter, a digit, or a space — is remembered against the three characters before it, together with how long you paused. Every ghost then schedules one predicted character. The wait is the median pause for that prefix, nudged so the nine lines never type in lockstep. If you outrun a ghost, its queue waits instead of spilling the line all at once.",
      "The limits are part of the object. Two thousand prefixes, sixty-four samples each, and forty-two characters visible so the square stays readable. What it learns is saved on the Pi as a small JSON file. Hold Backspace for two seconds and it forgets: the lines, the queues, and the file. Esc keeps the model and leaves. Input, learning, prediction, and drawing all run together, at 60 frames, in the thing in your hands.",
    ],
    gallery: [
      { media: "keystrokeInstall", caption: "Screen, red keys, camera" },
    ],
    links: { github: "https://github.com/bhawishK/Keystroke-pi" },
    color: "mint",
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Best Pitch Award",
    where: "London School of Economics",
    date: "Aug 2026",
    description:
      "Developed blockchain-based invoice financing, supporting invoice verification, tokenization, and smart-contract integration to connect SMEs with investors.",
    media: "lse",
    color: "sun",
  },
  {
    title: "Young Creative Entrepreneur",
     where: "Hong Kong Baptist University",
    date: "Sept 2026",
    description:
      "Won prototype funding for ArtDeck Kit, a cyberdeck for interactive media art combining hardware & software.",
    media: "yceAward",
    color: "bubble",
  },
  {
    title: "Merit Award",
    where: "Samsung Hong Kong",
    date: "April 2026",
    description:
      "Won merit recognition for building a food redistribution platform aligned with UN SDG 2: Zero Hunger.",
    media: "samsungAward",
    color: "leaf",
  },
];

// Each initiative can hold as many images as needed: { media, caption }
export const LEADERSHIP = [
  {
    org: "HKBU Coding Club",
    role: "Founder & President",
    dates: "Jul 2025 – Jun 2026",
    color: "bubble",
    bullets: [
      "Organized HKBU's first student-led hackathon, leading a team of 8 executive members across partnerships, branding, finance, and operations.",
      "Launched 11 technical workshops for 100+ participants from non-technical backgrounds.",
    ],
    stats: [
      { label: "First student-led hackathon", value: "#1" },
      { label: "Executive members", value: "8" },
      { label: "Technical workshops", value: "11" },
      { label: "Participants", value: "100+" },
    ],
    initiatives: [
      {
        title: "BUHack: HKBU's First Student-Led Hackathon",
        description:
          "From zero to a full hackathon: partnerships, branding, finance and operations run by an 8-person executive team.",
        color: "coral",
        images: [{ media: "buhackClosing", caption: "BUHack closing ceremony" }],
      },
      {
        title: "Technical Workshop Series",
        description:
          "11 hands-on workshops that took 100+ participants from non-technical backgrounds to their first working project.",
        color: "azure",
        images: [
          { media: "workshopHtmlCss", caption: "Session 1 · HTML & CSS" },
          { media: "workshopBootstrap", caption: "Session 2 · Bootstrap & Gen-AI" },
          { media: "workshopJs1", caption: "Session 3 · JS Essentials 1" },
          { media: "workshopJs2", caption: "Session 4 · JS Essentials 2" },
        ],
      },
    ],
  },
  {
    org: "Harvard World Model United Nations",
    role: "Delegate · Hong Kong Baptist University",
    dates: "2024 – 2025",
    color: "grape",
    bullets: [
      "Examined the socio-political challenges of mining practices in the Democratic Republic of Congo and presented technology-related policy solutions.",
    ],
    initiatives: [
      {
        title: "Harvard WMUN",
        description: "Representing HKBU on the international stage.",
        color: "grape",
        images: [
          { media: "hwmunManilaSpeech", caption: "Speaking in committee" },
          { media: "hwmunManilaCollab", caption: "Collaborating with delegates" },
          { media: "hwmunTaipei", caption: "HWMUN" },
          { media: "hwmunTaipeiGroup", caption: "With the delegation" },
        ],
      },
    ],
  },
];

export const SKILLS = [
  {
    group: "Languages",
    items: ["Java", "Kotlin", "Swift", "Python", "C/C++", "JavaScript", "TypeScript", "HTML", "CSS"],
    color: "coral",
  },
  {
    group: "Frameworks",
    items: ["Spring Boot", "Expo", "React.js", "React Native", "Next.js", "Express.js", "Tailwind CSS"],
    color: "azure",
  },
  {
    group: "Developer Tools",
    items: ["Git", "Postman", "Docker", "Linux", "AWS", "Alibaba Cloud", "MySQL", "MongoDB", "Kubernetes"],
    color: "mint",
  },
  {
    group: "Natural Languages",
    items: ["English", "Urdu", "Hindi", "Sindhi"],
    color: "sun",
  },
];

export const STUDY_NOTES = [
  {
    subject: "Backend",
    topic: "Spring Boot Basics",
    summary: "A beginner's guide to Spring Boot. Start here if you've never built a backend before.",
    level: 1,
    updatedAt: "Jul 2025",
    pdf: "/pdfs/SpringBoot_basics.pdf",
    color: "mint",
  },
  {
    subject: "Databases",
    topic: "All SQL",
    summary: "The important SQL in one place, useful for database courses and your first backend project.",
    level: 1,
    updatedAt: "Sept 2025",
    pdf: "/pdfs/ALLSQL.pdf",
    color: "sun",
  },
  {
    subject: "Backend",
    topic: "Spring Boot Microservices",
    summary: "The next step once a single service feels easy: the microservice patterns used in enterprise full stack development.",
    level: 2,
    updatedAt: "Aug 2025",
    pdf: "/pdfs/SpringBoot_MS.pdf",
    color: "azure",
  },
  {
    subject: "DevOps",
    topic: "Kubernetes",
    summary: "Basic DevOps: getting Spring applications running on Kubernetes.",
    level: 3,
    updatedAt: "Jul 2026",
    pdf: "/pdfs/Spring Kubernetes.pdf",
    color: "grape",
  },
];

export const INSPIRATION = {
  name: "Dr. Abdus Salam",
  note: "Nobel laureate in Physics (1979)",
  text: "Education is the most powerful weapon to change the world.",
  image: "/drabdussalam.jpg",
};

export const NAV = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/achievements", label: "Achievements" },
  { href: "/leadership", label: "Leadership" },
  { href: "/skills", label: "Skills" },
  { href: "/juniors", label: "For Juniors" },
];
