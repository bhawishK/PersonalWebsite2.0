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
    "Vision-language perception & spatial grounding",
    "Multimodal reasoning with LLMs / VLMs",
    "Simulation for embodied AI (NVIDIA Isaac Sim)",
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
    school: "Hong Kong Baptist University (HKBU)",
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
    school: "Beijing Normal–Hong Kong Baptist University (BNBU)",
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
    school: "London School of Economics (LSE Generate)",
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
    details: [],
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
    summary: "A game engine whose rules and mechanics are built on Strategy and State patterns.",
    cover: "threeKingdoms",
    details: [],
    gallery: [],
    links: {},
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
    details: [],
    gallery: [],
    links: {},
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
    details: [],
    gallery: [],
    links: { github: "https://github.com/BhawishKumarLohana/CloudKitchen" },
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
    summary: "An interactive installation: can you spot your own writing among nine lines of AI text?",
    cover: "keystrokePi",
    details: [],
    gallery: [],
    links: {},
    color: "mint",
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Top 20 Cyberport CUPP & Best Pitch Award",
    where: "London School of Economics",
    date: "June 2026",
    description:
      "Developed blockchain-based invoice financing, supporting invoice verification, tokenization, and smart-contract integration to connect SMEs with investors.",
    media: "lse",
    color: "sun",
  },
  {
    title: "Young Creative Entrepreneur (YCE) Award",
    date: "Sept 2026",
    description:
      "Won prototype funding for ArtDeck Kit, a cyberdeck for interactive media art combining hardware & software.",
    media: "yceAward",
    color: "bubble",
  },
  {
    title: "Merit Award at Samsung Solve for Tomorrow",
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
  { id: "profile", label: "About" },
  { id: "education", label: "Education" },
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "leadership", label: "Leadership" },
  { id: "juniors", label: "For Juniors" },
];
