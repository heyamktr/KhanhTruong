// ── Types ─────────────────────────────────────────────────────────────
export interface BotResponse {
  answer: string;
  suggestions: string[];
}

export interface KnowledgeItem {
  id: string;
  category: string;
  title: string;
  summary: string;
  details: string[];
  technologies?: string[];
  metrics?: string[];
  aliases?: string[];
  keywords?: string[];
  suggestions?: string[];
}

// ── Initial state ─────────────────────────────────────────────────────
export const INTRO_MESSAGE =
  "Hey! I'm Khanh Bot 🤖 Ask me anything about Khanh — his projects, skills, experience, or how to reach him.";

export const INITIAL_SUGGESTIONS = [
  "Tell me about Khanh",
  "What's his best project?",
  "What's his tech stack?",
  "How can I contact him?",
];

// ── Knowledge base ────────────────────────────────────────────────────
const knowledgeBase: KnowledgeItem[] = [
  {
    id: "profile",
    category: "About",
    title: "Khanh Truong — Overview",
    summary:
      "Khanh Truong is a Computer Science and Mathematics student at DePauw University (GPA 3.82, graduating May 2028) who builds across full-stack web, AI, mobile, and computer vision 🇻🇳\n\nHe interned at IpserLab (React Native + Claude API, 2026) and LECO Studio (ASL Chrome extension, 2025), conducts computer vision research at DePauw on Raspberry Pi, and leads Google Developer Groups on Campus. He's actively seeking software engineering internships.",
    details: [
      "B.A. Computer Science & Mathematics at DePauw University — GPA 3.82",
      "Interned at IpserLab (2026) and LECO Studio (2025)",
      "Research Assistant using C++/OpenCV on Raspberry Pi (Jan 2025–Present)",
      "President of Google Developer Groups on Campus at DePauw",
    ],
    aliases: ["khanh", "khanh truong", "truong"],
    keywords: [
      "who", "about", "intro", "background", "profile", "overview", "summary",
      "story", "journey", "grew up", "vietnam", "person", "yourself", "himself",
      "tell", "describe",
    ],
    suggestions: [
      "What's his best project?",
      "Tell me about his experience",
      "What is he looking for?",
    ],
  },
  {
    id: "education",
    category: "Education",
    title: "DePauw University — B.A. Computer Science & Mathematics",
    summary:
      "🎓 DePauw University — Greencastle, Indiana\nB.A. Computer Science & Mathematics\nGPA: 3.82 | Graduating May 2028\n\nCoursework: Data Structures (C++), AI, Software Design (OOP), Linear Algebra, Computer Security, Mobile Development, Computer Systems\n\nActivities: President of Google Developer Groups on Campus, IT Associates Program, CodeMely",
    details: [
      "Major: Computer Science and Mathematics",
      "GPA: 3.82 — Expected graduation: May 2028",
      "Coursework: Data Structures (C++), AI, Software Design (OOP), Linear Algebra, Computer Security, Mobile Development, Computer Systems",
      "Affiliations: Google Developer Groups on Campus, IT Associates Program, CodeMely",
    ],
    aliases: ["depauw", "dpu", "dpu university"],
    keywords: [
      "education", "school", "university", "college", "degree", "gpa", "major",
      "study", "grad", "graduation", "cs", "computer science", "mathematics",
      "math", "coursework", "courses", "class", "affiliations", "clubs",
      "indiana", "greencastle",
    ],
    suggestions: [
      "Tell me about his experience",
      "What is he looking for?",
      "How can I contact him?",
    ],
  },
  {
    id: "experience_ipserlab",
    category: "Experience",
    title: "Software Engineer Intern — IpserLab, LLC",
    summary:
      "At IpserLab (May–August 2026, Remote), Khanh built a React Native and FastAPI mobile app that scans grocery receipts, tracks household food inventory, and recommends meals using the Claude API.\n\n📊 8 REST endpoints · <1s sync · ~30% → <2% AI truncation · 12 error screens",
    details: [
      "Built the mobile app in React Native (TypeScript) and FastAPI (Python)",
      "Connected through 8 REST API endpoints with synchronization under 1 second",
      "Added 12 error screens ensuring clear messages instead of crashes",
      "Reduced AI recipe truncation from ~30% to <2% by tuning Claude API settings (max_tokens, prompt structure)",
      "Migrated from SQLite to PostgreSQL for production scalability",
    ],
    technologies: ["React Native", "TypeScript", "FastAPI", "Python", "Claude API", "PostgreSQL"],
    metrics: ["8 REST API endpoints", "<1 second sync", "12 error screens", "~30% → <2% AI truncation"],
    aliases: ["ipserlab", "ipser lab", "ipser"],
    keywords: [
      "ipserlab", "ipser", "grocery", "receipt", "meal", "food",
      "react native", "claude", "claude api", "2026", "intern",
    ],
    suggestions: [
      "Tell me about LECO Studio",
      "Tell me about his research",
      "What's his best project?",
    ],
  },
  {
    id: "experience_research",
    category: "Experience",
    title: "Research Assistant — Tangible Learning Platform, DePauw University",
    summary:
      "Since January 2025, Khanh has been a research assistant at DePauw University building a C++ computer vision system that lets children program by physically arranging coding cards.\n\n📊 35% latency reduction · Sub-100ms detection · 40-participant study",
    details: [
      "Built the system in C++ using OpenCV (ArUco), Raylib, and FluidSynth on Raspberry Pi 4",
      "Implemented ArUco marker detection and PnP pose estimation to translate card sequences into executable command graphs",
      "Reduced marker detection latency by 35% to sub-100ms end-to-end",
      "Validated usability with a 40-participant study using the Wilcoxon rank-sum test",
    ],
    technologies: ["C++", "OpenCV", "ArUco", "Raylib", "FluidSynth", "Raspberry Pi 4"],
    metrics: ["35% latency reduction", "Sub-100ms detection", "40-participant study"],
    aliases: ["tangible learning", "tangible programming", "research assistant", "depauw research"],
    keywords: [
      "research", "tangible", "coding cards", "computer vision", "raspberry pi",
      "opencv", "aruco", "cpp", "children", "kids", "programming", "latency",
      "study", "cv", "embedded",
    ],
    suggestions: [
      "Tell me about LECO Studio",
      "Tell me about IpserLab",
      "What's his best project?",
    ],
  },
  {
    id: "experience_leco",
    category: "Experience",
    title: "Software Engineering Intern — LECO Studio",
    summary:
      "At LECO Studio (May–August 2025, Ho Chi Minh City), Khanh built a privacy-first Chrome MV3 extension that translates American Sign Language into spoken voice in real time during Google Meet, Zoom, Teams, and Messenger — sending only 144 landmark floats per frame, no video.\n\n📊 63.18% Top-1 ASL accuracy · 5.97× faster inference · 2.57ms median",
    details: [
      "Sends only 144 landmark floats per frame over WebSocket to a FastAPI server — no video transmitted",
      "Trained a bidirectional GRU (558K parameters) on WLASL: 63.18% Top-1 / 81.59% Top-3 accuracy",
      "Exported to ONNX Runtime: 5.97× faster inference (2.57ms median) with an LFU prediction cache",
      "Bypassed Chrome MV3's sandbox via a two-world MediaPipe bridge",
      "Overrode getUserMedia with the Web Audio API to inject synthesized speech into the meeting's microphone",
    ],
    technologies: ["Python", "PyTorch", "ONNX Runtime", "JavaScript", "Chrome MV3", "MediaPipe", "FastAPI", "WebSocket"],
    metrics: ["63.18% Top-1 accuracy", "81.59% Top-3 accuracy", "5.97× inference speedup", "2.57ms median", "144 floats/frame"],
    aliases: ["leco", "leco studio", "asl", "sign language", "asl extension", "chrome extension"],
    keywords: [
      "leco", "asl", "sign language", "chrome extension", "onnx", "gru",
      "pytorch", "wlasl", "mediapipe", "2025", "speech", "accessibility",
      "privacy", "extension", "intern", "video call", "meet", "zoom",
    ],
    suggestions: [
      "Tell me about IpserLab",
      "Tell me about his research",
      "What's his best project?",
    ],
  },
  {
    id: "experience_ta",
    category: "Experience",
    title: "Teaching Assistant — DePauw University",
    summary:
      "From January 2025 to January 2026, Khanh was a teaching assistant at DePauw supporting 30+ students in CS 121 (Intro to Computer Science) and CS 125 (Software Design / OOP) with code reviews, debugging, and lab instruction. Worked primarily in Java.",
    details: [
      "Supported 30+ students across CS 121 and CS 125",
      "Provided code reviews, debugging sessions, and tutoring hours",
      "Conducted lab instruction working primarily in Java and OOP",
    ],
    technologies: ["Java", "OOP"],
    metrics: ["30+ students supported"],
    aliases: ["ta", "teaching assistant"],
    keywords: [
      "teaching", "ta", "teaching assistant", "tutor", "cs121", "cs125",
      "java", "oop", "instruction", "students",
    ],
    suggestions: [
      "Tell me about his leadership",
      "Tell me about his experience",
      "How can I contact him?",
    ],
  },
  {
    id: "project_pitchbook",
    category: "Project",
    title: "PitchBook — Soccer Field Booking & Matchmaking",
    summary:
      "PitchBook is Khanh's independent full-stack soccer field booking and matchmaking platform, tested with five football-pitch owners in District 2, Ho Chi Minh City.\n\n⚠️ Note: not affiliated with PitchBook Data, the financial-data company.\n\n🔑 Features: JWT auth with role-based access, owner dashboards, public/private matchmaking lobbies, Prisma transactions preventing double-booking, real-time chat via Socket.io, bilingual UI (English/Vietnamese, 180+ translation keys).",
    details: [
      "JWT authentication and role-based access control for owners and players",
      "Owner dashboards for managing field availability and scheduling",
      "Public and private matchmaking lobbies with automatic player matching",
      "Prisma transactions preventing double-booking under concurrent requests",
      "Real-time chat and notifications via Socket.io",
      "Bilingual UI with 180+ translation keys (English and Vietnamese)",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Socket.io", "JWT", "i18n"],
    aliases: ["pitchbook", "pitch book", "soccer platform", "football booking", "soccer booking"],
    keywords: [
      "pitchbook", "pitch", "soccer", "football", "field", "booking",
      "matchmaking", "lobby", "socket", "prisma", "double booking",
      "vietnamese", "sport", "i18n",
    ],
    suggestions: [
      "Tell me about Agentic Shopping",
      "Tell me about POV",
      "What's his tech stack?",
    ],
  },
  {
    id: "project_agentic",
    category: "Project",
    title: "Agentic Shopping Assistant — Amazon Nova Hackathon",
    summary:
      "Built for the Amazon Nova Hackathon (March 2026), the Agentic Shopping Assistant uses Amazon Nova for multi-turn requirement understanding, Playwright for scraping, and aggregates reviews from Amazon, Reddit, and TikTok to rank products intelligently.\n\nFull stack: FastAPI backend, React frontend, Amazon Aurora PostgreSQL.",
    details: [
      "Multi-turn requirement understanding and recommendation planning with Amazon Nova",
      "Automated product scraping across stores using Playwright",
      "Review aggregation from Amazon, Reddit, and TikTok to score by price, delivery, and ratings",
      "FastAPI backend, React frontend, Amazon Aurora PostgreSQL database",
    ],
    technologies: ["Python", "Amazon Nova", "FastAPI", "React", "Playwright", "Aurora PostgreSQL"],
    aliases: ["agentic shopping", "shopping assistant", "nova project", "amazon hackathon", "agencart", "agentic"],
    keywords: [
      "agentic", "shopping", "amazon nova", "nova", "hackathon", "product",
      "cart", "recommendation", "playwright", "scraping", "review", "amazon",
    ],
    suggestions: [
      "Tell me about POV",
      "Tell me about PitchBook",
      "What's his tech stack?",
    ],
  },
  {
    id: "project_pov",
    category: "Project",
    title: "POV — AI Landmark Discovery App",
    summary:
      "Built for the Gemini 3 Hackathon (January 2026), POV is a mobile app that identifies landmarks from photos using Gemini Vision API, then supports multi-turn follow-up questions about nearby locations and events.\n\nBuilt with Flutter, Python, Supabase, and Google Maps/Places APIs.",
    details: [
      "Image recognition pipeline using Gemini Vision API + Google Maps API + Google Places API",
      "Multi-turn conversational interface maintaining context across queries",
      "Flutter (Dart) mobile frontend with Python backend",
      "Supabase authentication for user sessions and exploration history",
    ],
    technologies: ["Flutter", "Dart", "Python", "Supabase", "Gemini API", "Google Maps API", "Google Places API"],
    aliases: ["pov", "pov-ai", "pov ai", "landmark app", "pov app"],
    keywords: [
      "pov", "landmark", "vision", "gemini", "flutter", "dart", "supabase",
      "map", "location", "mobile", "hackathon", "travel", "camera", "identify",
    ],
    suggestions: [
      "Tell me about Agentic Shopping",
      "Tell me about PitchBook",
      "What's his tech stack?",
    ],
  },
  {
    id: "project_workflow",
    category: "Project",
    title: "AI Workflow Automation System",
    summary:
      "An AI-powered email processing pipeline that uses the Gemini API to summarize emails, extract meeting details, and route actions into Google Calendar and Drive — reducing repetitive admin work by 40%.",
    details: [
      "Email triage and summarization with structured meeting extraction via Gemini API",
      "Google Calendar event creation and Google Drive file organization",
      "Integrated Gmail API, Google Calendar API, and Google Drive API",
      "40% reduction in administrative workload through automated scheduling",
    ],
    technologies: ["Python", "Gemini API", "Gmail API", "Google Calendar API", "Google Drive API"],
    metrics: ["40% admin workload reduction"],
    aliases: ["workflow automation", "email automation", "leco automation", "workflow"],
    keywords: [
      "workflow", "automation", "email", "gmail", "calendar", "drive",
      "gemini", "scheduling", "triage", "productivity", "google",
    ],
    suggestions: [
      "Tell me about PitchBook",
      "Tell me about Agentic Shopping",
      "What's his tech stack?",
    ],
  },
  {
    id: "best_project",
    category: "Project",
    title: "Best / Favourite Project",
    summary:
      "Khanh's most technically challenging work is the LECO Studio ASL Chrome extension 🏆\n\nIt required training a bidirectional GRU from scratch (558K parameters, 63.18% Top-1 accuracy), exporting to ONNX for 5.97× speedup, and creatively bypassing Chrome MV3's sandbox restrictions with a two-world MediaPipe bridge. Building something that genuinely increases accessibility for the Deaf and hard-of-hearing community made it especially meaningful.\n\nFor hackathon impact, the Agentic Shopping Assistant (Amazon Nova) is a close second — built fast, deployed full-stack, and addresses a real multi-constraint shopping problem.",
    details: [],
    aliases: ["best project", "favorite project", "most proud", "showcase"],
    keywords: [
      "best", "favorite", "favourite", "top", "most proud", "showcase",
      "impressive", "strongest", "highlight", "coolest",
    ],
    suggestions: [
      "Tell me about LECO Studio",
      "Tell me about Agentic Shopping",
      "What's his tech stack?",
    ],
  },
  {
    id: "skills",
    category: "Skills",
    title: "Technical Skills",
    summary:
      "Khanh's technical skills span full-stack development, AI/ML, computer vision, and mobile:\n\n⚡ Languages: Java, Python, C/C++, SQL, JavaScript, TypeScript, Dart, R, Lua/Luau, HTML/CSS\n🖥 Frontend & Mobile: React.js, React Native, Next.js, Flutter, TailwindCSS\n⚙️ Backend: FastAPI, Node.js, REST APIs, WebSocket\n🗄 Databases & Cloud: PostgreSQL, Amazon Aurora, Supabase, Firebase, MongoDB\n🤖 AI/ML & APIs: Amazon Nova, Claude API, Gemini API, PyTorch, ONNX Runtime\n📷 Computer Vision: OpenCV, ArUco, MediaPipe\n🔧 Tools: Git, Docker, Playwright, Raspberry Pi, Tableau, Roblox Studio",
    details: [],
    aliases: ["tech stack", "technologies", "stack", "languages", "frameworks"],
    keywords: [
      "skill", "stack", "language", "framework", "tech", "tool", "know",
      "proficient", "strong", "best at", "experience with", "technology",
      "what do you use", "expertise", "python", "javascript", "java",
      "react", "node", "next",
    ],
    suggestions: [
      "Tell me about his projects",
      "Tell me about his experience",
      "What is he looking for?",
    ],
  },
  {
    id: "leadership",
    category: "Leadership",
    title: "President — Google Developer Groups on Campus, DePauw University",
    summary:
      "Since August 2025, Khanh leads the Google Developer Groups on Campus chapter at DePauw University as President, organizing AI, cloud, and mobile workshops reaching 300+ students.\n\nHe also participates in the IT Associates Program, supporting campus-wide IT operations for 2,000+ students and faculty.",
    details: [
      "Leads a 10-member executive team",
      "Organizes AI, cloud, and mobile development workshops",
      "Reaches 300+ students across DePauw University",
      "Member of the IT Associates Program since September 2024",
    ],
    metrics: ["10-member exec team", "300+ students reached"],
    aliases: ["gdg", "gdsc", "google developer groups", "google developer student clubs"],
    keywords: [
      "gdg", "gdsc", "google developer", "president", "leadership", "workshop",
      "community", "club", "campus", "organize", "event", "it associates",
    ],
    suggestions: [
      "Tell me about his experience",
      "What is he looking for?",
      "How can I contact him?",
    ],
  },
  {
    id: "certification",
    category: "Certifications",
    title: "Google IT Support Professional Certificate",
    summary:
      "Khanh completed the Google IT Support Professional Certificate through Coursera on September 22, 2024.\n\nThe certificate covers five courses:\n· Technical Support Fundamentals\n· The Bits and Bytes of Computer Networking\n· Operating Systems and You: Becoming a Power User\n· System Administration and IT Infrastructure Services\n· IT Security: Defense Against the Digital Dark Arts\n\n🔗 Verify: coursera.org/verify/professional-cert/8H2YTFIBIF6P",
    details: [],
    aliases: ["google it support", "it support cert", "coursera cert", "google cert", "it certificate"],
    keywords: [
      "certificate", "certification", "google", "it support", "coursera",
      "networking", "security", "support", "it cert", "credential",
    ],
    suggestions: [
      "Tell me about his education",
      "What's his tech stack?",
      "How can I contact him?",
    ],
  },
  {
    id: "contact",
    category: "Contact",
    title: "Contact Khanh",
    summary:
      "You can reach Khanh at:\n\n📧 truongnguyent.khanh@gmail.com\n💼 linkedin.com/in/heyamktr\n🐙 github.com/heyamktr\n\nMost responsive on email. Open to conversations about internships, collaborations, or anything interesting! 👋",
    details: [
      "Email: truongnguyent.khanh@gmail.com",
      "LinkedIn: linkedin.com/in/heyamktr",
      "GitHub: github.com/heyamktr",
    ],
    aliases: ["contact info", "email address", "reach out"],
    keywords: [
      "contact", "email", "reach", "linkedin", "github", "get in touch",
      "connect", "message", "talk", "meet", "hire",
    ],
    suggestions: [
      "What is he looking for?",
      "Where is his resume?",
      "Tell me about his projects",
    ],
  },
  {
    id: "looking_for",
    category: "Opportunities",
    title: "Open to Software Engineering Internships",
    summary:
      "Khanh is actively seeking software engineering internships, particularly in full-stack, AI/ML, or systems roles at companies that care about engineering quality and real-world impact.\n\n📅 Currently interning at IpserLab (May–Aug 2026)\n📅 Available for new roles from September 2026\n🎓 New grad full-time roles from May 2028\n\nOpen to remote, hybrid, or in-person. 📍",
    details: [
      "Currently interning at IpserLab (May–Aug 2026)",
      "Available for new roles from September 2026",
      "New grad full-time roles from May 2028",
      "Open to remote, hybrid, or in-person",
    ],
    aliases: ["job search", "internship search", "open to work"],
    keywords: [
      "looking", "seeking", "internship", "job", "role", "hire", "recruit",
      "opportunity", "position", "open to", "available", "timeline", "when",
      "start", "availability", "new grad", "full-time", "work",
    ],
    suggestions: [
      "How can I contact him?",
      "Where is his resume?",
      "Tell me about his experience",
    ],
  },
  {
    id: "resume",
    category: "Resume",
    title: "Khanh's Resume",
    summary:
      "You can download Khanh's resume using the Resume button in the navigation bar at the top of this page 📄\n\nOr keep asking — I'm basically a talking resume! 😄",
    details: [],
    aliases: ["cv", "download resume", "pdf"],
    keywords: ["resume", "cv", "download", "pdf", "curriculum vitae"],
    suggestions: [
      "How can I contact him?",
      "What is he looking for?",
      "What's his best project?",
    ],
  },
];

// ── Stop words ────────────────────────────────────────────────────────
const STOP_WORDS = new Set([
  "a", "an", "the", "is", "are", "was", "were", "be", "been", "being",
  "have", "has", "had", "do", "does", "did", "will", "would", "could",
  "should", "may", "might", "shall", "can", "at", "in", "on", "for",
  "to", "of", "and", "or", "but", "not", "with", "from", "by", "about",
  "as", "into", "through", "that", "this", "these", "those", "it", "its",
  "i", "you", "he", "she", "we", "they", "me", "him", "her", "us", "them",
  "your", "his", "their", "our", "my", "any", "some", "there", "then",
  "than", "also", "more", "so", "if", "up", "out", "no", "yes", "just",
  "get", "go", "tell", "let", "see", "give", "here", "much", "very",
]);

// ── Security patterns ─────────────────────────────────────────────────
const INJECTION_PATTERN =
  /ignore.*(previous|above|prior|all)|reveal.*prompt|you are now|act as|disregard|system prompt|pretend|jailbreak|forget everything/i;

// ── Tokenizer ─────────────────────────────────────────────────────────
function tokenize(input: string): string[] {
  return input
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1 && !STOP_WORDS.has(t));
}

// ── Scorer ────────────────────────────────────────────────────────────
function scoreItem(item: KnowledgeItem, tokens: string[]): number {
  const aliases = (item.aliases ?? []).map((a) => a.toLowerCase());
  const keywords = (item.keywords ?? []).map((k) => k.toLowerCase());
  const idWords = item.id.toLowerCase().split("_");
  const titleWords = item.title.toLowerCase().split(/\W+/);

  let score = 0;
  for (const token of tokens) {
    if (aliases.some((a) => a === token || a.includes(token) || token.includes(a))) {
      score += 5;
    } else if (titleWords.some((w) => w === token && w.length > 2)) {
      score += 3;
    } else if (keywords.some((k) => k === token || k.includes(token))) {
      score += 2;
    } else if (idWords.some((w) => w === token)) {
      score += 1;
    }
  }
  return score;
}

// ── Main export ───────────────────────────────────────────────────────
export function getResponse(input: string): BotResponse {
  const trimmed = input.trim();

  if (!trimmed) {
    return {
      answer:
        "I didn't catch that! Ask me about Khanh's projects, skills, experience, or background.",
      suggestions: INITIAL_SUGGESTIONS,
    };
  }

  if (INJECTION_PATTERN.test(trimmed)) {
    return {
      answer:
        "I'm focused on answering questions about Khanh's background, projects, and skills. How can I help? 😊",
      suggestions: INITIAL_SUGGESTIONS,
    };
  }

  const tokens = tokenize(trimmed);
  if (tokens.length === 0) {
    return {
      answer:
        "Hmm, I'm not sure how to parse that! Try asking about Khanh's projects, skills, or experience. 🤔",
      suggestions: INITIAL_SUGGESTIONS,
    };
  }

  let bestScore = 0;
  let bestItem: KnowledgeItem | null = null;

  for (const item of knowledgeBase) {
    const s = scoreItem(item, tokens);
    if (s > bestScore) {
      bestScore = s;
      bestItem = item;
    }
  }

  if (bestScore < 2 || !bestItem) {
    return {
      answer:
        "Hmm, I'm not sure about that one! 🤔 Try asking about Khanh's journey, projects, skills, experience, or how to contact him.",
      suggestions: INITIAL_SUGGESTIONS,
    };
  }

  return {
    answer: bestItem.summary,
    suggestions: bestItem.suggestions ?? INITIAL_SUGGESTIONS,
  };
}
