export interface ProjectData {
  title: string;
  description: string;
  fullDescription: string;
  details: string[];
  features: string[];
  tags: string[];
  image: string;
  liveUrl: string;
  sourceUrl: string;
  // Case-study fields (populated for featured projects)
  category?: string;
  challenge?: string;
  contributions?: string[];
  role?: string;
  images?: string[]; // additional screenshots for carousel
}

export const projects: ProjectData[] = [
  {
    title: "Tiger Time",
    description:
      "Hackathon productivity web app built around Pomodoro workflows, interactive utilities, and a high-energy alternate UI mode.",
    fullDescription:
      "A hackathon-built productivity application centered on Pomodoro study cycles, fast interaction loops, and a playful alternate experience designed to keep engagement high without sacrificing usability.",
    details: [
      "Built a Pomodoro-based productivity application with a modular timer system supporting study and break cycles with real-time UI updates.",
      "Engineered interactive features including a to-do list, quote generator, and mini calendar using client-side state management.",
      "Designed and implemented Brainrot Mode, a dynamic alternate UI with a video background and high-engagement interaction model.",
    ],
    features: [
      "Responsive, component-driven interface with theme switching and smooth DOM updates",
      "Modular timer workflow tailored for focused study and break sessions",
      "End-to-end product delivery under hackathon constraints with rapid iteration",
    ],
    tags: ["JavaScript", "HTML", "CSS"],
    image: "/images/thumbnails/TigerTimeThumbnail.png",
    liveUrl: "#",
    sourceUrl: "https://github.com/heyamktr/TheTimeHackathon_NguyenTienKhanhTruong",
  },
  {
    title: "Pixel Knight",
    description:
      "2D platformer game featuring object-oriented game systems, enemy AI, collision handling, and responsive desktop gameplay.",
    fullDescription:
      "A desktop 2D platformer built in Java with an object-oriented architecture that organizes gameplay systems cleanly across rendering, control flow, enemy logic, and physics-driven interactions.",
    details: [
      "Developed a 2D platformer using object-oriented architecture, modeling player systems, enemy AI, and game physics.",
      "Implemented a real-time game loop and state machine to manage scoring, difficulty scaling, and win/loss conditions.",
      "Designed collision detection and enemy movement logic to ensure responsive and consistent gameplay interactions.",
    ],
    features: [
      "Modular UI components including a control panel and avatar system for extensibility",
      "Optimized rendering and event handling for smooth frame updates in a desktop GUI environment",
      "Structured gameplay systems that support customization and future feature growth",
    ],
    tags: ["Java", "Swing", "OOP"],
    image: "/images/thumbnails/pixelKnightThumbnail.png",
    liveUrl: "#",
    sourceUrl: "https://github.com/heyamktr/Pixel-Knight",
  },
  {
    title: "Greencastle Discovery Platform",
    description:
      "Full-stack local discovery platform for events and businesses aggregated from external community sources.",
    fullDescription:
      "A production-oriented local discovery platform built to reduce manual search time by aggregating events and business data from external sources like GoPutnam into a searchable, structured experience.",
    details: [
      "Built a full-stack local discovery platform aggregating events and businesses from external sources, reducing manual search time for users.",
      "Designed and implemented server-side API routes in Next.js to fetch, normalize, and serve structured event data.",
      "Integrated MongoDB for persistent storage, enabling efficient querying of events and business listings.",
    ],
    features: [
      "Dynamic UI built with Next.js App Router and server components",
      "Scalable routing for event and business detail pages such as /events and /businesses/[id]",
      "Data ingestion pipeline to scrape, transform, and structure external website data into JSON",
      "Production-ready deployment setup with environment variables, API separation, and stable database connection handling",
    ],
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "REST APIs"],
    image: "/images/thumbnails/GoGreencastle.png",
    liveUrl: "#",
    sourceUrl: "https://github.com/heyamktr/VKLTigerhack",
    category: "Full-Stack · Local Discovery",
    challenge:
      "Students and residents had no single platform to find local events and businesses — everything required manually searching across multiple scattered sources with no unified view.",
    contributions: [
      "Full-stack data aggregation pipeline from external sources",
      "Server-side API routes with normalized JSON structure",
      "MongoDB integration for persistent event and listing queries",
      "Dynamic routing for event and business detail pages",
    ],
    role: "Full-stack development, API design, data ingestion pipeline, and database integration.",
  },
  {
    title: "Agentic Shopping Assistant",
    description:
      "An AI-powered B2B shopping platform that searches, evaluates, and ranks products according to a user's budget, quality requirements, and delivery constraints.",
    fullDescription:
      "A multi-step product discovery system that turns vague user intent into ranked recommendations using structured retrieval, LLM planning, and review synthesis across multiple sources.",
    details: [
      "Built in Python with Amazon Nova for multi-turn requirement understanding and recommendation planning.",
      "Developed a full-stack platform with FastAPI, React, and Amazon Aurora (PostgreSQL) for search and ranking APIs.",
      "Implemented Playwright scraping and a review summarization pipeline combining Amazon, Reddit, and TikTok signals.",
    ],
    features: [
      "Requirement parsing and recommendation planning with Amazon Nova",
      "Search and ranking APIs backed by Aurora PostgreSQL",
      "Review aggregation pipeline combining multiple external signals",
    ],
    tags: ["React", "FastAPI", "Python", "Amazon Nova", "PostgreSQL", "Playwright"],
    image: "/images/thumbnails/AgenCart.png",
    liveUrl: "#",
    sourceUrl: "https://github.com/giabach1106/Agentic-Shopping-Assistant",
    category: "AI Commerce · Amazon Nova Hackathon",
    challenge:
      "Traditional shopping tools struggle to process several requirements such as price, ratings, quality, and delivery time simultaneously.",
    contributions: [
      "AI-powered natural-language product search with Amazon Nova",
      "Constraint-based product ranking by price, delivery, and reviews",
      "Review aggregation from Amazon, Reddit, and TikTok",
      "Full-stack implementation: FastAPI + React + Aurora PostgreSQL",
    ],
    role: "Full-stack development, AI integration, backend API design, product-data collection, and user-interface implementation.",
  },
  {
    title: "POV-AI Landmark Discovery App",
    description:
      "Mobile-first landmark exploration app that identifies places from images and supports follow-up questions in context.",
    fullDescription:
      "A mobile exploration experience that combines image recognition, geospatial context, and conversational search so users can identify landmarks and keep asking follow-up questions naturally.",
    details: [
      "Built an image recognition pipeline using Gemini Vision API plus Google Maps API and Google Places API.",
      "Implemented a multi-turn conversational interface with Gemini API for landmark, nearby-location, and current-event questions.",
      "Developed the full-stack app with Flutter, Python, and Supabase authentication.",
    ],
    features: [
      "Landmark detection from user-provided imagery",
      "Context-aware follow-up questions about nearby locations and events",
      "Mobile-first Flutter frontend with authenticated user sessions",
    ],
    tags: ["Flutter", "Dart", "Python", "Supabase", "Gemini API", "Google Maps API"],
    image: "/images/thumbnails/POV.png",
    liveUrl: "#",
    sourceUrl: "https://github.com/phamthucquyen/POV",
    category: "Mobile Development · AI Vision",
    challenge:
      "Existing travel apps rely on manual text searches — there was no conversational, camera-first way to instantly identify landmarks and explore surroundings in real time.",
    contributions: [
      "Camera-based landmark recognition via Gemini Vision API",
      "Multi-turn conversational AI for follow-up questions",
      "Geospatial context with nearby events and restaurant discovery",
      "Flutter mobile frontend with Supabase authentication",
    ],
    role: "Solo developer covering mobile UI, Python backend, AI integration, and geospatial feature implementation.",
  },
  {
    title: "AI Workflow Automation System",
    description:
      "Automation pipeline for email triage, scheduling, and document organization using Google services and LLM-based extraction.",
    fullDescription:
      "An internal productivity workflow that processes inbox messages, extracts meeting details, and routes follow-up actions into Google services to reduce repetitive admin work.",
    details: [
      "Built an AI-powered email processing pipeline in Python using Gemini API to summarize messages and extract meeting details.",
      "Integrated Gmail API, Google Calendar API, and Google Drive API to automate downstream workflows.",
      "Reduced administrative workload by 40% through automated prioritization and scheduling actions.",
    ],
    features: [
      "Inbox triage and summarization with structured extraction",
      "Calendar event creation and Drive organization workflows",
      "Operational automation focused on repetitive communication tasks",
    ],
    tags: ["Python", "Gemini API", "Gmail API", "Google Calendar API", "Google Drive API"],
    image: "/images/thumbnails/lecoautomation.png",
    liveUrl: "#",
    sourceUrl: "https://github.com/heyamktr",
  },
  {
    title: "PitchBook",
    description:
      "Full-stack soccer field booking and matchmaking platform tested with five pitch owners in District 2, Ho Chi Minh City. Not affiliated with PitchBook Data.",
    fullDescription:
      "PitchBook is a full-stack platform connecting players with field owners for booking and matchmaking. It supports public and private lobbies, automatic matching, real-time chat, and a bilingual English/Vietnamese UI — tested end-to-end with real pitch owners in Ho Chi Minh City.",
    details: [
      "JWT authentication and role-based access control for owners and players.",
      "Owner dashboards for managing field availability and scheduling.",
      "Public and private matchmaking lobbies with automatic player matching.",
      "Prisma transactions preventing double-booking under concurrent requests.",
      "Real-time chat and notifications via Socket.io.",
      "Bilingual UI with 180+ translation keys (English and Vietnamese).",
    ],
    features: [
      "JWT auth with role-based access for owners and players",
      "Matchmaking lobbies with automatic player pairing",
      "Prisma transactions for concurrency-safe booking",
      "Real-time chat via Socket.io",
      "English/Vietnamese i18n with 180+ translation keys",
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Socket.io", "JWT"],
    image: "/images/PitchBook.png",
    liveUrl: "#",
    sourceUrl: "https://github.com/PhamLeBaDuong/soccer-field-booking-management",
    category: "Full-Stack · Sports Tech",
    challenge:
      "Field owners in Ho Chi Minh City had no digital tool to manage bookings, and players had no platform to find opponents or reserve pitches — everything was done through personal contacts and messaging apps.",
    contributions: [
      "JWT authentication with role-based access (owner vs. player)",
      "Owner dashboards for availability management",
      "Public and private matchmaking with automatic lobby matching",
      "Prisma transactions preventing double-booking under concurrent requests",
      "Real-time chat and notifications via Socket.io",
      "Bilingual UI with 180+ translation keys (English/Vietnamese)",
    ],
    role: "Solo developer — designed and built the full system including auth, booking engine, matchmaking, real-time features, and localization.",
  },
];
