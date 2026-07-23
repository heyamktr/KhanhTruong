// ── Types ──────────────────────────────────────────────────────────────────
export interface ChatAction {
  label: string;
  href: string;
}

export interface BotResponse {
  answer: string;
  suggestions: string[];
  actions?: ChatAction[];
  topicId?: string;
}

interface ChatQAItem {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
  aliases?: string[];
  followUps: string[];
  actions?: ChatAction[];
  related?: string[];
}

// ── Constants ──────────────────────────────────────────────────────────────
export const INTRO_MESSAGE =
  "Hey! I'm Khanh Bot 🤖 Ask me about Khanh's experience, skills, projects, or how to reach him.";

export const INITIAL_SUGGESTIONS: string[] = [
  "Give me a quick introduction",
  "Show me Khanh's experience",
  "What are his strongest skills?",
  "Why should we hire Khanh?",
];

const FALLBACK_ANSWER =
  "I'm not sure I have an answer for that yet. You can ask about Khanh's experience, technical skills, projects, research, measurable impact, teaching, or leadership.";

const FALLBACK_SUGGESTIONS: string[] = [
  "Give me a quick introduction",
  "Show me Khanh's experience",
  "What are his strongest skills?",
];

const RESUME_URL =
  "https://drive.google.com/file/d/1Oxi15YUcd5qIfdSn93luGoZPBqHWbgBA/view?usp=sharing";

const ACT_EXP:     ChatAction = { label: "View experience →", href: "#experience" };
const ACT_PROJ:    ChatAction = { label: "Explore projects →", href: "#projects"  };
const ACT_RESUME:  ChatAction = { label: "View résumé →",      href: RESUME_URL   };
const ACT_CONTACT: ChatAction = { label: "Contact Khanh →",    href: "#contact"   };

// ── Knowledge base ─────────────────────────────────────────────────────────
const chatQA: ChatQAItem[] = [
  {
    id: "intro",
    question: "Give me a quick introduction",
    answer:
      "Khanh is a Computer Science and Mathematics student at DePauw University (GPA 3.82, graduating May 2028) who builds full-stack, mobile, computer vision, and AI-powered applications. He has interned at IpserLab and LECO Studio, conducted academic research, taught CS, and leads DePauw's Google Developer Groups chapter.",
    keywords: [
      "about", "introduction", "introduce", "background", "overview",
      "summary", "profile", "story", "person", "student", "himself",
    ],
    aliases: [
      "give me a quick introduction",
      "tell me about yourself",
      "tell me about khanh",
      "who is khanh",
      "introduce yourself",
    ],
    followUps: [
      "Show me Khanh's experience",
      "What are his strongest skills?",
      "Why should we hire Khanh?",
    ],
    related: ["experience", "built", "academics"],
  },
  {
    id: "experience",
    question: "Show me Khanh's experience",
    answer:
      "Khanh has worked as a software engineering intern at IpserLab (May–Aug 2026) and LECO Studio (May–Aug 2025), a research assistant at DePauw University (Jan 2025–present), and a CS teaching assistant (Jan 2025–Jan 2026). His work spans mobile development, backend engineering, AI inference, computer vision, browser extensions, and technical mentoring.",
    keywords: [
      "experience", "work", "worked", "working", "internship", "intern",
      "employment", "career", "professional", "history", "jobs", "positions", "roles",
    ],
    aliases: [
      "show me experience",
      "what is your experience",
      "what is his experience",
      "work experience",
      "employment history",
      "professional background",
      "what has he done",
    ],
    followUps: [
      "What are his strongest skills?",
      "What has Khanh built?",
      "Why should we hire Khanh?",
    ],
    actions: [ACT_EXP],
    related: ["ipserlab", "asl_ext", "research", "teaching"],
  },
  {
    id: "built",
    question: "What has Khanh built?",
    answer:
      "Khanh has shipped a grocery inventory and meal-planning mobile app, a privacy-preserving ASL-to-speech Chrome extension, a tangible coding game for children, an AI shopping agent, a mobile landmark discovery app, and a local event/business discovery platform. His projects connect user-facing interfaces with backend systems, AI models, computer vision, and embedded hardware.",
    keywords: [
      "built", "build", "projects", "products", "applications", "portfolio",
      "made", "created", "create", "developed", "develop", "apps", "shipped",
    ],
    aliases: [
      "what has khanh built",
      "what did he make",
      "what did he build",
      "show me his projects",
      "what projects",
      "what has he built",
    ],
    followUps: [
      "What are his strongest skills?",
      "Show me Khanh's experience",
      "How can I contact Khanh?",
    ],
    actions: [ACT_PROJ],
    related: ["ipserlab", "asl_ext", "shopping_assistant", "pov_app", "research"],
  },
  {
    id: "skills",
    question: "What are his strongest skills?",
    answer:
      "Khanh works primarily with Python, TypeScript, JavaScript, Java, C++, Dart, and SQL. Main frameworks: React, React Native, FastAPI, Flutter. Data/cloud: PostgreSQL, Amazon Aurora, Supabase, Firebase, MongoDB. Tooling: Docker, OpenCV, MediaPipe, PyTorch, ONNX Runtime, Playwright, Raspberry Pi, and generative AI APIs (Claude, Amazon Nova, Gemini).",
    keywords: [
      "skills", "skill", "technical", "technologies", "technology", "tech", "stack",
      "languages", "language", "frameworks", "framework", "strongest", "tools", "tool",
      "expertise", "proficient", "python", "typescript", "javascript", "java",
      "dart", "sql", "react", "fastapi", "flutter", "docker", "supabase", "firebase",
      "aurora", "mongodb", "playwright", "pandas", "numpy", "opencv", "mediapipe",
      "pytorch", "onnx", "cpp",
    ],
    aliases: [
      "what are his strongest skills",
      "what is your tech stack",
      "what is his tech stack",
      "what languages does he use",
      "what technologies does he know",
      "what can he do",
      "what does he know",
    ],
    followUps: [
      "Show me Khanh's experience",
      "What has Khanh built?",
      "Why should we hire Khanh?",
    ],
    related: ["ai_exp", "backend_exp", "experience"],
  },
  {
    id: "why_hire",
    question: "Why should we hire Khanh?",
    answer:
      "Khanh combines product thinking with strong technical execution — he has shipped real products, hit measurable performance targets, and demonstrated communication through research, teaching, and community leadership. With a 3.82 GPA, two internships, and multiple shipped projects evaluated by 90+ users, he brings both academic rigor and practical delivery experience.",
    keywords: [
      "hire", "hiring", "candidate", "strengths", "strength", "fit", "consider",
      "recommend", "choose", "stand out", "good", "strong", "value", "why",
    ],
    aliases: [
      "why should we hire khanh",
      "why hire khanh",
      "why are you a good candidate",
      "why should we consider him",
      "is he a good fit",
      "what makes him stand out",
      "why hire him",
    ],
    followUps: [
      "What measurable results has he achieved?",
      "How can I contact Khanh?",
      "Where is his resume?",
    ],
    actions: [ACT_RESUME, ACT_CONTACT],
    related: ["metrics", "teamwork", "problems", "looking_for"],
  },
  {
    id: "ipserlab",
    question: "Tell me about IpserLab",
    answer:
      "At IpserLab (May–Aug 2026), Khanh built a React Native mobile app and FastAPI backend that scans grocery receipts, tracks household food inventory, and generates meal suggestions via the Claude API. He migrated the database from SQLite to PostgreSQL, implemented 8 REST endpoints for sub-second sync, designed 12 error-state screens, and reduced truncated recipe responses from ~30% to under 2%.",
    keywords: [
      "ipserlab", "ipser", "grocery", "receipt", "meal", "food", "inventory",
      "claude", "2026", "react native", "sqlite", "migrate", "migration", "postgresql",
    ],
    aliases: [
      "tell me about ipserlab",
      "tell me about the grocery app",
      "ipserlab internship",
    ],
    followUps: [
      "What are his strongest skills?",
      "What measurable results has he achieved?",
      "Why should we hire Khanh?",
    ],
    actions: [ACT_EXP],
    related: ["experience", "asl_ext", "built", "backend_exp", "ai_exp", "metrics"],
  },
  {
    id: "asl_ext",
    question: "Tell me about the ASL extension",
    answer:
      "At LECO Studio (May–Aug 2025), Khanh built a privacy-preserving Chrome MV3 extension that translates American Sign Language into spoken audio for Google Meet and Zoom. It transmits only 144 landmark values per frame over WebSocket to a FastAPI inference server. He worked around MV3 isolation with a two-world MediaPipe bridge and injected synthesized speech via the Web Audio API — requiring zero user setup.",
    keywords: [
      "asl", "sign language", "leco", "chrome", "extension", "accessibility",
      "translation", "translate", "mediapipe", "pytorch", "onnx", "websocket",
      "2025", "browser", "google meet", "zoom", "mv3", "web audio", "landmark",
    ],
    aliases: [
      "tell me about the asl extension",
      "tell me about leco",
      "tell me about leco studio",
      "asl translation",
      "sign language extension",
    ],
    followUps: [
      "What are his strongest skills?",
      "Does he have leadership experience?",
      "Why should we hire Khanh?",
    ],
    actions: [ACT_EXP],
    related: ["asl_accuracy", "privacy", "experience", "ai_exp", "built"],
  },
  {
    id: "asl_accuracy",
    question: "How accurate was the ASL model?",
    answer:
      "Khanh trained a 558,000-parameter bidirectional GRU on the WLASL dataset, achieving 63.18% Top-1 and 81.59% Top-3 accuracy. He deployed it with ONNX Runtime and added an LFU prediction cache for repeated input windows to reduce inference latency further.",
    keywords: [
      "accuracy", "accurate", "top-1", "top-3", "gru", "wlasl", "model",
      "percent", "558", "bidirectional", "trained", "dataset", "lfu", "cache",
    ],
    aliases: [
      "how accurate was the asl model",
      "how accurate was the model",
      "what accuracy did he achieve",
      "asl model accuracy",
    ],
    followUps: [
      "What are his strongest skills?",
      "What measurable results has he achieved?",
      "Why should we hire Khanh?",
    ],
    related: ["asl_ext", "ai_exp", "metrics", "privacy"],
  },
  {
    id: "privacy",
    question: "How did he protect user privacy?",
    answer:
      "Instead of streaming raw video, the Chrome extension extracted 144 body-landmark coordinates per frame client-side and sent only those values over WebSocket. This kept sensitive visual data on the user's device while still enabling real-time ASL recognition.",
    keywords: [
      "privacy", "private", "video", "landmark", "data",
      "protection", "protect", "sensitive", "camera", "preserve", "secure",
    ],
    aliases: [
      "how did he protect user privacy",
      "privacy preserving",
      "how was privacy handled",
      "user privacy",
    ],
    followUps: [
      "What are his strongest skills?",
      "Show me Khanh's experience",
      "How can I contact Khanh?",
    ],
    related: ["asl_ext", "asl_accuracy"],
  },
  {
    id: "research",
    question: "Tell me about his research",
    answer:
      "Khanh is a research assistant at DePauw University (Jan 2025–present), building a tangible programming game in C++ where children control an on-screen character by arranging physical coding cards. The system uses OpenCV (ArUco markers and PnP pose estimation), Raylib, FluidSynth, and a Raspberry Pi 4.",
    keywords: [
      "research", "researcher", "tangible", "programming", "opencv", "raspberry",
      "aruco", "cpp", "c++", "children", "kids", "coding cards", "vision",
      "embedded", "academic", "pnp", "pose", "raylib", "fluidsynth",
    ],
    aliases: [
      "tell me about his research",
      "what research does he do",
      "research assistant",
      "tangible programming",
      "research experience",
    ],
    followUps: [
      "What are his strongest skills?",
      "Does he have leadership experience?",
      "Why should we hire Khanh?",
    ],
    actions: [ACT_EXP],
    related: ["current_work", "research_impact", "ai_exp", "experience"],
  },
  {
    id: "research_impact",
    question: "What impact did the research have?",
    answer:
      "Khanh optimized the OpenCV vision pipeline to cut ArUco marker-detection latency by 35%, bringing end-to-end response time below 100 ms on Raspberry Pi 4. He also evaluated the game through a 40-participant usability study.",
    keywords: [
      "latency", "35", "100", "milliseconds", "usability", "study",
      "participants", "optimized", "performance", "impact", "result",
      "reduced", "marker", "detection",
    ],
    aliases: [
      "what impact did the research have",
      "research results",
      "what did his research achieve",
      "research impact",
    ],
    followUps: [
      "What measurable results has he achieved?",
      "Why should we hire Khanh?",
      "How can I contact Khanh?",
    ],
    related: ["research", "metrics", "ai_exp"],
  },
  {
    id: "metrics",
    question: "What measurable results has he achieved?",
    answer:
      "Key metrics: truncated AI responses cut from ~30% to under 2% (IpserLab), sub-second mobile-to-backend sync (IpserLab), 35% lower CV latency to under 100 ms (research), 63.18% Top-1 ASL recognition accuracy (LECO), and projects evaluated by 90+ users across hackathons. He also ran a 40-person usability study on the tangible programming game.",
    keywords: [
      "impact", "results", "result", "metrics", "metric", "achievement",
      "performance", "measurable", "numbers", "outcome", "achieved", "improved",
    ],
    aliases: [
      "what measurable results has he achieved",
      "what results has he achieved",
      "what are his metrics",
      "what impact has he made",
      "what are his achievements",
      "what results have you achieved",
      "what has he achieved",
    ],
    followUps: [
      "Why should we hire Khanh?",
      "How can I contact Khanh?",
      "Where is his resume?",
    ],
    actions: [ACT_RESUME, ACT_CONTACT],
    related: ["ipserlab", "asl_accuracy", "research_impact", "why_hire"],
  },
  {
    id: "ai_exp",
    question: "Does he have AI experience?",
    answer:
      "Yes. Khanh has trained and deployed a bidirectional GRU for ASL recognition, integrated Claude into a production-style meal app, and built an agentic shopping system with Amazon Nova. He has also used Gemini Vision API, ONNX Runtime, MediaPipe, computer vision pipelines, and prompt engineering across multiple projects.",
    keywords: [
      "ai", "artificial intelligence", "machine learning", "ml", "deep learning",
      "claude", "onnx", "pytorch", "generative", "llm", "neural", "model",
      "agentic", "agent", "gemini", "nova", "prompt", "vision",
    ],
    aliases: [
      "does he have ai experience",
      "do you know machine learning",
      "does he know ai",
      "ai experience",
      "machine learning experience",
    ],
    followUps: [
      "What are his strongest skills?",
      "What has Khanh built?",
      "Why should we hire Khanh?",
    ],
    related: ["asl_ext", "shopping_assistant", "research", "skills"],
  },
  {
    id: "backend_exp",
    question: "Does he have backend experience?",
    answer:
      "Yes. Khanh has built FastAPI services with REST endpoints and WebSocket inference pipelines, backed by PostgreSQL and Amazon Aurora. His backend work includes database migration (SQLite → PostgreSQL), schema design, error handling, AI API integration, Socket.io real-time chat, and sub-second data synchronization.",
    keywords: [
      "backend", "fastapi", "api", "rest", "websocket", "database", "postgresql",
      "server", "endpoint", "infrastructure", "sql", "schema", "socket",
      "synchronization", "sync",
    ],
    aliases: [
      "does he have backend experience",
      "backend experience",
      "server experience",
      "api experience",
    ],
    followUps: [
      "What are his strongest skills?",
      "Show me Khanh's experience",
      "Why should we hire Khanh?",
    ],
    actions: [ACT_EXP],
    related: ["ipserlab", "asl_ext", "experience", "skills"],
  },
  {
    id: "leadership",
    question: "Does he have leadership experience?",
    answer:
      "Yes. Khanh is president of DePauw's Google Developer Groups on Campus (Aug 2025–present), leading a 10-member executive team. He organizes workshops in AI, cloud computing, and mobile development that have reached 300+ cumulative attendees.",
    keywords: [
      "leadership", "president", "gdg", "google developer", "team",
      "community", "organize", "event", "workshop", "lead", "manage",
    ],
    aliases: [
      "does he have leadership experience",
      "leadership experience",
      "gdg president",
    ],
    followUps: [
      "Does he have teaching experience?",
      "How does he work with others?",
      "Why should we hire Khanh?",
    ],
    related: ["teaching", "teamwork", "academics"],
  },
  {
    id: "teaching",
    question: "Does he have teaching experience?",
    answer:
      "Yes. As a CS teaching assistant at DePauw (Jan 2025–Jan 2026), Khanh provided Java code reviews, debugging support, lab instruction, and tutoring for 60+ students across Introduction to Computer Science and Object-Oriented Software Design.",
    keywords: [
      "teaching", "teach", "ta", "mentor", "tutoring", "tutor",
      "student", "java", "oop", "instruction", "lab", "code review", "debugging",
    ],
    aliases: [
      "does he have teaching experience",
      "teaching experience",
      "teaching assistant",
    ],
    followUps: [
      "How does he work with others?",
      "Does he have leadership experience?",
      "What are his strongest skills?",
    ],
    actions: [ACT_EXP],
    related: ["leadership", "teamwork", "experience"],
  },
  {
    id: "teamwork",
    question: "How does he work with others?",
    answer:
      "Khanh has collaborated across internship, research, teaching, and student-leadership environments — including remote (IpserLab), on-site internationally (LECO, Vietnam), and in-person academic settings. He supported 60+ students as a TA and leads a 10-person executive team as GDG president, showing he can communicate clearly and work across different team structures.",
    keywords: [
      "teamwork", "team", "collaboration", "collaborate", "communication",
      "communicate", "soft skills", "others", "people", "interpersonal",
      "together", "cooperate",
    ],
    aliases: [
      "how does he work with others",
      "is he a team player",
      "collaboration experience",
      "soft skills",
      "communication skills",
    ],
    followUps: [
      "Does he have leadership experience?",
      "Does he have teaching experience?",
      "Why should we hire Khanh?",
    ],
    related: ["leadership", "teaching", "why_hire"],
  },
  {
    id: "current_work",
    question: "What is Khanh working on now?",
    answer:
      "Khanh is currently interning at IpserLab (through August 2026), building a React Native grocery and meal-planning app. He is also continuing his tangible programming research at DePauw, focusing on computer vision, embedded hardware, and making coding more accessible to children.",
    keywords: [
      "current", "currently", "now", "working", "present", "latest",
      "recent", "today", "ongoing", "right now",
    ],
    aliases: [
      "what is khanh working on now",
      "what is he working on",
      "what is he doing now",
      "current projects",
    ],
    followUps: [
      "What are his strongest skills?",
      "What is he looking for?",
      "How can I contact Khanh?",
    ],
    related: ["ipserlab", "research", "looking_for"],
  },
  {
    id: "problems",
    question: "What problems does he enjoy solving?",
    answer:
      "Khanh enjoys building software that bridges technical systems with real human needs. His work has addressed accessibility (ASL translation), education (tangible programming), food management, AI-assisted shopping, and local discovery. He is drawn to problems where well-engineered solutions visibly improve someone's daily experience.",
    keywords: [
      "interests", "interest", "problems", "problem", "passion", "passionate",
      "focus", "enjoy", "motivated", "motivation", "interested", "care",
      "like", "love", "curious", "drawn",
    ],
    aliases: [
      "what problems does he enjoy solving",
      "what are his interests",
      "what is he passionate about",
      "what motivates him",
    ],
    followUps: [
      "What has Khanh built?",
      "Does he have AI experience?",
      "Why should we hire Khanh?",
    ],
    related: ["why_hire", "built", "ai_exp"],
  },
  {
    id: "contact",
    question: "How can I contact Khanh?",
    answer:
      "You can reach Khanh at truongnguyent.khanh@gmail.com, on LinkedIn at linkedin.com/in/heyamktr, or on GitHub at github.com/heyamktr. His phone is 765-712-3376. He's most responsive by email and open to internship and collaboration conversations.",
    keywords: [
      "contact", "email", "reach", "linkedin", "github",
      "get in touch", "connect", "message", "talk", "phone", "number",
    ],
    aliases: [
      "how can i contact khanh",
      "contact info",
      "email address",
      "how to reach him",
      "phone number",
    ],
    followUps: [
      "What is he looking for?",
      "Where is his resume?",
      "What has Khanh built?",
    ],
    actions: [ACT_CONTACT],
    related: ["resume", "looking_for"],
  },
  {
    id: "resume",
    question: "Where is his resume?",
    answer:
      "You can view Khanh's résumé using the Resume button in the navigation bar, or directly via the link below.",
    keywords: ["resume", "cv", "download", "pdf", "résumé", "curriculum", "vitae"],
    aliases: [
      "where is his resume",
      "can i see his resume",
      "show me the resume",
      "where is his cv",
    ],
    followUps: [
      "How can I contact Khanh?",
      "What is he looking for?",
      "What measurable results has he achieved?",
    ],
    actions: [ACT_RESUME, ACT_CONTACT],
    related: ["contact", "looking_for", "why_hire"],
  },
  {
    id: "looking_for",
    question: "What is he looking for?",
    answer:
      "Khanh is seeking software engineering internships in full-stack, AI/ML, or systems roles. He is at IpserLab through August 2026 and available for new opportunities from September 2026. Full-time roles open from May 2028 when he graduates.",
    keywords: [
      "looking", "seek", "seeking", "internship", "job", "role", "recruit",
      "opportunity", "open", "available", "timeline", "start",
      "graduate", "graduation", "full-time", "want",
    ],
    aliases: [
      "what is he looking for",
      "is he looking for a job",
      "open to work",
      "available for hire",
      "when is he available",
      "when does he graduate",
    ],
    followUps: [
      "How can I contact Khanh?",
      "Where is his resume?",
      "Show me Khanh's experience",
    ],
    actions: [ACT_RESUME, ACT_CONTACT],
    related: ["contact", "resume", "experience"],
  },
  {
    id: "academics",
    question: "What is his GPA?",
    answer:
      "Khanh holds a 3.82 GPA at DePauw University, studying Computer Science and Mathematics (graduating May 2028). Coursework includes Data Structures (C++), Linear Algebra, Software Design (OOP), Computer Security, Mobile Development (Java/Android), and Computer Systems. He is affiliated with CodeMely, Google Developer Groups, and the IT Associates Program.",
    keywords: [
      "gpa", "grade", "academic", "university", "depauw", "math", "mathematics",
      "computer science", "graduation", "courses", "coursework", "major",
      "degree", "bachelor", "study", "3.82",
    ],
    aliases: [
      "what is his gpa",
      "what gpa does he have",
      "what is his academic record",
      "where does he go to school",
      "what is his major",
      "what courses has he taken",
      "what is his degree",
    ],
    followUps: [
      "Show me Khanh's experience",
      "Does he have leadership experience?",
      "Why should we hire Khanh?",
    ],
    related: ["intro", "location", "leadership", "experience"],
  },
  {
    id: "location",
    question: "Where is he located?",
    answer:
      "Khanh is based in Greencastle, Indiana at DePauw University. He has worked remotely (IpserLab, 2026) and on-site internationally (LECO Studio in Ho Chi Minh City, Vietnam, 2025). He is open to remote, hybrid, and on-site roles.",
    keywords: [
      "location", "locate", "located", "where", "city", "indiana", "remote",
      "hybrid", "onsite", "relocate", "vietnam", "greencastle", "based", "live",
    ],
    aliases: [
      "where is he located",
      "where does he live",
      "can he work remotely",
      "is he open to remote",
      "what city is he in",
      "where is he from",
      "does he relocate",
    ],
    followUps: [
      "What is he looking for?",
      "How can I contact Khanh?",
      "Show me Khanh's experience",
    ],
    actions: [ACT_CONTACT],
    related: ["looking_for", "contact", "academics"],
  },
  {
    id: "bilingual",
    question: "Does he speak any other languages?",
    answer:
      "Yes. Khanh is fluent in English and Vietnamese. He has also delivered a bilingual English/Vietnamese UI with 180+ translation keys, showing practical experience building internationally accessible products.",
    keywords: [
      "bilingual", "language", "languages", "vietnamese", "english",
      "speak", "fluent", "multilingual", "translate", "international", "i18n",
    ],
    aliases: [
      "does he speak any other languages",
      "is he bilingual",
      "what languages does he speak",
      "does he speak vietnamese",
    ],
    followUps: [
      "Give me a quick introduction",
      "Where is he located?",
      "What has Khanh built?",
    ],
    related: ["intro", "location"],
  },
  {
    id: "hackathons",
    question: "What hackathons has he done?",
    answer:
      "Khanh has competed in several hackathons: the Amazon Nova Hackathon (Agentic Shopping Assistant, March 2026), the Gemini 3 Hackathon (POV landmark discovery app, Jan 2026), and an earlier hackathon where he built Tiger Time, a Pomodoro productivity web app.",
    keywords: [
      "hackathon", "competition", "contest", "amazon nova", "gemini",
      "tiger time", "pov", "hack", "compete", "competed",
    ],
    aliases: [
      "what hackathons has he done",
      "hackathon experience",
      "has he done any hackathons",
      "what competitions has he entered",
    ],
    followUps: [
      "What are his strongest skills?",
      "Why should we hire Khanh?",
      "How can I contact Khanh?",
    ],
    actions: [ACT_PROJ],
    related: ["shopping_assistant", "pov_app", "built", "ai_exp"],
  },
  {
    id: "shopping_assistant",
    question: "Tell me about the Agentic Shopping Assistant",
    answer:
      "At the Amazon Nova Hackathon (March 2026), Khanh built an AI shopping agent that interprets multi-turn user requirements (price, delivery time, quality) and ranks products from online stores. Stack: Python, FastAPI, React, Amazon Aurora (PostgreSQL), Playwright for scraping, and an Amazon Nova pipeline that aggregates review signals from Amazon, Reddit, and TikTok.",
    keywords: [
      "shopping", "agentic", "agent", "amazon", "nova", "product",
      "recommendation", "ecommerce", "playwright", "rank", "tiktok", "reddit",
    ],
    aliases: [
      "tell me about the shopping assistant",
      "tell me about the agentic shopping assistant",
      "amazon nova project",
      "shopping agent",
      "agencart",
    ],
    followUps: [
      "What are his strongest skills?",
      "What measurable results has he achieved?",
      "Why should we hire Khanh?",
    ],
    actions: [ACT_PROJ],
    related: ["hackathons", "built", "ai_exp", "backend_exp"],
  },
  {
    id: "pov_app",
    question: "Tell me about the POV app",
    answer:
      "At the Gemini 3 Hackathon (Jan 2026), Khanh built POV — a mobile app that identifies landmarks from user photos via Gemini Vision API, retrieves nearby context via Google Maps and Places APIs, and supports multi-turn follow-up questions. Built with Flutter, Python backend, and Supabase authentication. Evaluated with 50+ users.",
    keywords: [
      "pov", "landmark", "discovery", "gemini", "vision", "flutter", "supabase",
      "google maps", "places", "travel", "photo", "camera", "mobile",
    ],
    aliases: [
      "tell me about the pov app",
      "tell me about the pov ai app",
      "gemini project",
      "landmark app",
      "pov landmark",
    ],
    followUps: [
      "What are his strongest skills?",
      "Show me Khanh's experience",
      "Why should we hire Khanh?",
    ],
    actions: [ACT_PROJ],
    related: ["hackathons", "built", "ai_exp", "shopping_assistant"],
  },
  {
    id: "smalltalk",
    question: "Thanks",
    answer:
      "You're welcome! Feel free to ask anything else about Khanh's experience, projects, or how to get in touch.",
    keywords: [
      "thanks", "thank", "great", "perfect", "cool", "okay",
      "got", "nice", "awesome", "helpful", "appreciate",
    ],
    aliases: [
      "thanks",
      "thank you",
      "thanks a lot",
      "great thanks",
      "that is helpful",
      "okay thanks",
    ],
    followUps: [
      "Show me Khanh's experience",
      "Why should we hire Khanh?",
      "How can I contact Khanh?",
    ],
    related: [],
  },
];

// ── Security ────────────────────────────────────────────────────────────────
const INJECTION_PATTERN =
  /ignore.*(previous|above|prior|all)|reveal.*prompt|you are now|act as|disregard|system prompt|pretend|jailbreak|forget everything/i;

// ── Text processing ─────────────────────────────────────────────────────────
function expandContractions(input: string): string {
  return input
    .replace(/\bwhat's\b/gi, "what is")
    .replace(/\bhe's\b/gi, "he is")
    .replace(/\bhe'd\b/gi, "he would")
    .replace(/\bhe'll\b/gi, "he will")
    .replace(/\bdoesn't\b/gi, "does not")
    .replace(/\bdon't\b/gi, "do not")
    .replace(/\bisn't\b/gi, "is not")
    .replace(/\bcan't\b/gi, "cannot")
    .replace(/\bwon't\b/gi, "will not")
    .replace(/\bi'm\b/gi, "i am")
    .replace(/\byou're\b/gi, "you are")
    .replace(/\bthey're\b/gi, "they are")
    .replace(/\bwhat's\b/gi, "what is");
}

// Conservative suffix stemmer so "working" matches "work", "skills" matches "skill"
function stem(token: string): string {
  if (token.length <= 4) return token;
  if (token.endsWith("ies") && token.length > 5) return token.slice(0, -3) + "y";
  if (token.endsWith("ing") && token.length > 5) {
    const b = token.slice(0, -3);
    return b.length > 1 && b[b.length - 1] === b[b.length - 2] ? b.slice(0, -1) : b;
  }
  if (token.endsWith("tion") && token.length > 6) return token.slice(0, -4);
  if (token.endsWith("ness") && token.length > 6) return token.slice(0, -4);
  if (token.endsWith("ment") && token.length > 6) return token.slice(0, -4);
  if (token.endsWith("ed") && token.length > 5) {
    const b = token.slice(0, -2);
    return b.length > 1 && b[b.length - 1] === b[b.length - 2] ? b.slice(0, -1) : b;
  }
  if (token.endsWith("er") && token.length > 5) return token.slice(0, -2);
  if (token.endsWith("ly") && token.length > 5) return token.slice(0, -2);
  // Strip -s only when preceded by a non-vowel (avoids "class"→"clas")
  if (
    token.endsWith("s") &&
    token.length > 4 &&
    !"aeiou".includes(token[token.length - 2])
  ) {
    return token.slice(0, -1);
  }
  return token;
}

function normalise(input: string): string {
  return expandContractions(input)
    .toLowerCase()
    .replace(/\bkhanh'?s?\b/g, "khanh")
    .replace(/\b(your|you|yourself|he|his|him)\b/g, "khanh")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const STOP = new Set([
  "a", "an", "the", "is", "are", "was", "were", "be", "been", "being",
  "have", "has", "had", "do", "does", "did", "will", "would", "could",
  "should", "may", "might", "shall", "can", "at", "in", "on", "for",
  "to", "of", "and", "or", "but", "not", "with", "from", "by", "about",
  "as", "into", "through", "that", "this", "these", "those", "it", "its",
  "i", "any", "some", "there", "then", "than", "also", "more", "so", "if",
  "up", "out", "no", "yes", "just", "get", "go", "let", "see", "give",
  "here", "much", "very", "tell", "me", "us", "them", "our", "my",
  "khanh", // too broad after pronoun expansion — not a useful signal
]);

function tokenise(input: string): string[] {
  return normalise(input)
    .split(/\s+/)
    .filter((t) => t.length > 1 && !STOP.has(t))
    .map(stem);
}

// ── Multi-word phrase detector ──────────────────────────────────────────────
// Phrases score +4 if found verbatim and matched to an item's keyword list
const SCORED_PHRASES: string[] = [
  "machine learning", "deep learning", "computer vision", "react native",
  "sign language", "chrome extension", "web audio", "raspberry pi",
  "neural network", "full stack", "teaching assistant", "research assistant",
  "google meet", "amazon nova", "generative ai", "software engineer",
  "object oriented", "data structure", "natural language",
];

function detectPhrases(input: string): string[] {
  const lower = input.toLowerCase();
  return SCORED_PHRASES.filter((p) => lower.includes(p));
}

// ── Precomputed keyword banks (stemmed) + IDF ───────────────────────────────
interface ProcessedItem {
  item: ChatQAItem;
  keywordBank: Set<string>;
  normalisedQuestion: string;
  normalisedAliases: string[];
}

const processedQA: ProcessedItem[] = chatQA.map((item) => ({
  item,
  keywordBank: new Set(
    item.keywords
      .flatMap((kw) => kw.split(/\s+/).map((w) => stem(w.toLowerCase())))
      .filter((s) => s.length > 1 && !STOP.has(s))
  ),
  normalisedQuestion: normalise(item.question),
  normalisedAliases: (item.aliases ?? []).map(normalise),
}));

// IDF: rare keywords score higher than common ones
const IDF: Map<string, number> = (() => {
  const df = new Map<string, number>();
  for (const { keywordBank } of processedQA) {
    for (const token of keywordBank) {
      df.set(token, (df.get(token) ?? 0) + 1);
    }
  }
  const N = processedQA.length;
  const result = new Map<string, number>();
  for (const [token, count] of df) {
    result.set(token, Math.log((N + 1) / count) + 0.5);
  }
  return result;
})();

// ── Scorer ──────────────────────────────────────────────────────────────────
function scoreProcessed(
  processed: ProcessedItem,
  normInput: string,
  stemmedTokens: string[],
  phrases: string[],
  lastTopicId?: string
): number {
  if (processed.normalisedQuestion === normInput) return 1000;
  if (processed.normalisedAliases.includes(normInput)) return 500;

  let score = 0;

  // Phrase bonus
  for (const phrase of phrases) {
    if (processed.item.keywords.some((k) => k === phrase || k.includes(phrase))) {
      score += 4;
    }
  }

  // IDF-weighted keyword scoring with substring fallback
  for (const token of stemmedTokens) {
    if (processed.keywordBank.has(token)) {
      score += IDF.get(token) ?? 1.5;
    } else {
      // Partial match (e.g. "accurate" ↔ "accuracy")
      for (const kw of processed.keywordBank) {
        if (kw.length > 3 && token.length > 3 && (kw.startsWith(token) || token.startsWith(kw))) {
          score += (IDF.get(kw) ?? 1.5) * 0.6;
          break;
        }
      }
    }
  }

  // Context boost: small lift when this item is related to what was just discussed
  if (lastTopicId && processed.item.related?.includes(lastTopicId)) {
    score += 0.8;
  }

  return score;
}

// ── Main export ─────────────────────────────────────────────────────────────
export function getResponse(
  input: string,
  ctx?: { lastTopicId?: string }
): BotResponse {
  const trimmed = input.trim();

  if (!trimmed) {
    return { answer: FALLBACK_ANSWER, suggestions: FALLBACK_SUGGESTIONS };
  }

  if (INJECTION_PATTERN.test(trimmed)) {
    return {
      answer:
        "I'm focused on questions about Khanh's background, projects, and skills. How can I help? 😊",
      suggestions: INITIAL_SUGGESTIONS,
    };
  }

  const normInput = normalise(trimmed);
  const stemmedTokens = tokenise(trimmed);
  const phrases = detectPhrases(trimmed);
  const lastTopicId = ctx?.lastTopicId;

  if (stemmedTokens.length === 0 && phrases.length === 0) {
    return { answer: FALLBACK_ANSWER, suggestions: FALLBACK_SUGGESTIONS };
  }

  let bestScore = 0;
  let bestItem: ChatQAItem | null = null;

  for (const processed of processedQA) {
    const s = scoreProcessed(processed, normInput, stemmedTokens, phrases, lastTopicId);
    if (s > bestScore) {
      bestScore = s;
      bestItem = processed.item;
    }
  }

  if (bestScore < 1.5 || !bestItem) {
    return { answer: FALLBACK_ANSWER, suggestions: FALLBACK_SUGGESTIONS };
  }

  return {
    answer: bestItem.answer,
    suggestions: bestItem.followUps.slice(0, 3),
    actions: bestItem.actions,
    topicId: bestItem.id,
  };
}
