// ── Types ─────────────────────────────────────────────────────────────────
export interface ChatAction {
  label: string;
  href: string;
}

export interface BotResponse {
  answer: string;
  suggestions: string[];
  actions?: ChatAction[];
}

interface ChatQAItem {
  id: string;
  question: string;      // canonical text; exact-match trigger after normalisation
  answer: string;
  keywords: string[];    // tokens that raise this item's score (+2 each)
  aliases?: string[];    // additional exact-phrase matches (score +500)
  followUps: string[];   // up to 3 contextual chips shown after the answer
  actions?: ChatAction[]; // optional CTA links rendered below the answer
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

// Shared actions
const ACT_EXP:     ChatAction = { label: "View experience →",  href: "#experience" };
const ACT_PROJ:    ChatAction = { label: "Explore projects →",  href: "#projects"   };
const ACT_RESUME:  ChatAction = { label: "View résumé →",       href: RESUME_URL    };
const ACT_CONTACT: ChatAction = { label: "Contact Khanh →",     href: "#contact"    };

// ── Knowledge base ─────────────────────────────────────────────────────────
const chatQA: ChatQAItem[] = [
  {
    id: "intro",
    question: "Give me a quick introduction",
    answer:
      "Khanh is a Computer Science and Mathematics student at DePauw University who builds full-stack, mobile, computer vision, and AI-powered applications. His experience includes software engineering internships, academic research, teaching, and developer-community leadership.",
    keywords: [
      "about", "introduction", "introduce", "background", "overview",
      "summary", "profile", "story", "himself",
    ],
    aliases: [
      "give me a quick introduction",
      "tell me about yourself",
      "tell me about khanh",
      "who is khanh",
      "introduce yourself",
    ],
    followUps: [
      "What has Khanh built?",
      "What is he working on now?",
      "Does he have leadership experience?",
    ],
  },
  {
    id: "experience",
    question: "Show me Khanh's experience",
    answer:
      "Khanh has worked as a software engineering intern at IpserLab and LECO Studio, a research assistant at DePauw University, and a computer science teaching assistant. His work spans mobile development, backend engineering, AI inference, computer vision, browser extensions, and technical mentoring.",
    keywords: [
      "experience", "work", "internship", "employment", "career",
      "professional", "history", "jobs", "positions", "roles",
    ],
    aliases: [
      "show me experience",
      "what is your experience",
      "what is his experience",
      "work experience",
      "employment history",
      "professional background",
    ],
    followUps: [
      "Tell me about IpserLab",
      "Tell me about the ASL extension",
      "Tell me about his research",
    ],
    actions: [ACT_EXP],
  },
  {
    id: "built",
    question: "What has Khanh built?",
    answer:
      "Khanh has built a grocery inventory and meal-planning app, a privacy-preserving ASL-to-speech browser extension, and a tangible programming game for children. These products combine user-focused interfaces with backend systems, AI models, computer vision, and embedded hardware.",
    keywords: [
      "built", "projects", "products", "applications", "portfolio",
      "made", "created", "developed", "apps", "work",
    ],
    aliases: [
      "what has khanh built",
      "what did he make",
      "what did he build",
      "show me his projects",
      "what projects",
    ],
    followUps: [
      "Tell me about the grocery app",
      "Tell me about the ASL extension",
      "Tell me about the tangible programming system",
    ],
    actions: [ACT_PROJ],
  },
  {
    id: "skills",
    question: "What are his strongest skills?",
    answer:
      "Khanh works primarily with Python, TypeScript, JavaScript, Java, C++, Dart, and SQL. His main frameworks include React, React Native, FastAPI, and Flutter. On the data/cloud side he uses PostgreSQL, Amazon Aurora, Supabase, Firebase, and MongoDB. Tooling includes Docker, OpenCV, MediaPipe, PyTorch, ONNX Runtime, Playwright, Raspberry Pi, and generative AI APIs (Claude, Amazon Nova, Gemini).",
    keywords: [
      "skills", "technical", "technologies", "tech", "stack", "languages",
      "frameworks", "strongest", "tools", "expertise", "proficient",
      "python", "typescript", "javascript", "java", "dart", "sql", "cpp",
      "react", "fastapi", "flutter", "docker", "supabase", "firebase",
      "aurora", "mongodb", "playwright", "pandas", "numpy",
    ],
    aliases: [
      "what are his strongest skills",
      "what is your tech stack",
      "what is his tech stack",
      "what languages does he use",
      "what technologies does he know",
      "what can he do",
    ],
    followUps: [
      "Does he have AI experience?",
      "Does he have backend experience?",
      "What measurable results has he achieved?",
    ],
  },
  {
    id: "why_hire",
    question: "Why should we hire Khanh?",
    answer:
      "Khanh combines product thinking with strong technical execution. He has taken ideas from prototype to working product, improved measurable system performance, and demonstrated communication and collaboration through research, teaching, and leadership.",
    keywords: [
      "hire", "candidate", "strengths", "fit", "consider", "recommend",
      "choose", "stand out", "good", "strong", "value",
    ],
    aliases: [
      "why should we hire khanh",
      "why hire khanh",
      "why are you a good candidate",
      "why should we consider him",
      "is he a good fit",
      "what makes him stand out",
    ],
    followUps: [
      "What measurable results has he achieved?",
      "How does he work with others?",
      "What problems does he enjoy solving?",
    ],
    actions: [ACT_RESUME, ACT_CONTACT],
  },
  {
    id: "ipserlab",
    question: "Tell me about IpserLab",
    answer:
      "At IpserLab, Khanh built a React Native mobile app and FastAPI backend that scans grocery receipts, tracks household food inventory, and suggests meals via the Claude API. He migrated the database from SQLite to PostgreSQL, implemented 8 REST endpoints for sub-second sync, designed 12 error-state screens, and reduced truncated recipe responses from about 30% to under 2%.",
    keywords: [
      "ipserlab", "ipser", "grocery", "receipt", "meal", "food", "inventory",
      "claude", "2026", "react native",
    ],
    aliases: [
      "tell me about ipserlab",
      "tell me about the grocery app",
      "ipserlab internship",
    ],
    followUps: [
      "What impact did he make there?",
      "Tell me about the ASL extension",
      "Tell me about his research",
    ],
    actions: [ACT_EXP],
  },
  {
    id: "asl_ext",
    question: "Tell me about the ASL extension",
    answer:
      "At LECO Studio, Khanh built a privacy-preserving Chrome MV3 extension that translates American Sign Language into spoken audio for Google Meet and Zoom. It transmits only 144 landmark values per frame over WebSocket to a FastAPI inference server. He used a two-world MediaPipe bridge to work around MV3 content-script isolation and injected synthesized speech via the Web Audio API — no user setup required.",
    keywords: [
      "asl", "sign language", "leco", "chrome", "extension", "accessibility",
      "translation", "mediapipe", "pytorch", "onnx", "websocket", "2025",
      "browser", "google meet", "zoom",
    ],
    aliases: [
      "tell me about the asl extension",
      "tell me about leco",
      "tell me about leco studio",
      "asl translation",
      "sign language extension",
    ],
    followUps: [
      "How accurate was the ASL model?",
      "How did he protect user privacy?",
      "What measurable results has he achieved?",
    ],
    actions: [ACT_EXP],
  },
  {
    id: "asl_accuracy",
    question: "How accurate was the ASL model?",
    answer:
      "Khanh trained a 558,000-parameter bidirectional GRU on the WLASL dataset, achieving 63.18% Top-1 and 81.59% Top-3 accuracy. He deployed it with ONNX Runtime and added an LFU prediction cache for repeated input windows to further reduce inference latency.",
    keywords: [
      "accuracy", "top-1", "top-3", "gru", "wlasl", "model",
      "percent", "558", "bidirectional", "train", "dataset",
    ],
    aliases: [
      "how accurate was the asl model",
      "how accurate was the model",
      "what accuracy did he achieve",
      "asl model accuracy",
    ],
    followUps: [
      "How did he protect user privacy?",
      "Does he have AI experience?",
      "What measurable results has he achieved?",
    ],
  },
  {
    id: "privacy",
    question: "How did he protect user privacy?",
    answer:
      "The extension sent only 144 body-landmark values per frame to the inference server rather than transmitting raw camera video. This reduced the amount of sensitive visual data leaving the user's device.",
    keywords: [
      "privacy", "private", "video", "landmark", "data",
      "protection", "sensitive", "camera", "preserve", "secure",
    ],
    aliases: [
      "how did he protect user privacy",
      "privacy preserving",
      "how was privacy handled",
      "user privacy",
    ],
    followUps: [
      "How accurate was the ASL model?",
      "Does he have AI experience?",
      "Tell me about the ASL extension",
    ],
  },
  {
    id: "research",
    question: "Tell me about his research",
    answer:
      "Khanh is developing a tangible programming system that lets children control an on-screen character by arranging physical coding cards. The system uses C++, OpenCV, ArUco markers, pose estimation, Raylib, FluidSynth, and a Raspberry Pi.",
    keywords: [
      "research", "tangible", "programming", "opencv", "raspberry", "aruco",
      "cpp", "children", "kids", "coding cards", "vision", "embedded",
      "experience", "academic",
    ],
    aliases: [
      "tell me about his research",
      "what research does he do",
      "research assistant",
      "tangible programming",
      "research experience",
    ],
    followUps: [
      "What impact did the research have?",
      "What is Khanh working on now?",
      "What measurable results has he achieved?",
    ],
    actions: [ACT_EXP],
  },
  {
    id: "research_impact",
    question: "What impact did the research have?",
    answer:
      "Khanh optimized the computer-vision pipeline to reduce marker-detection latency by 35%, bringing end-to-end performance below 100 milliseconds. The system was also evaluated through a usability study involving 40 participants.",
    keywords: [
      "latency", "35", "100", "milliseconds", "usability", "study",
      "participants", "optimised", "optimized", "performance", "reduced", "marker",
    ],
    aliases: [
      "what impact did the research have",
      "research results",
      "what did his research achieve",
      "research impact",
    ],
    followUps: [
      "Tell me about his research",
      "What measurable results has he achieved?",
      "Does he have AI experience?",
    ],
  },
  {
    id: "metrics",
    question: "What measurable results has he achieved?",
    answer:
      "Khanh reduced truncated AI responses from about 30% to under 2%, enabled sub-second mobile-to-backend synchronization, and lowered computer-vision latency by 35% to under 100 milliseconds. He also trained an ASL model that reached 63.18% Top-1 and 81.59% Top-3 accuracy.",
    keywords: [
      "impact", "results", "metrics", "achievements", "performance",
      "measurable", "numbers", "outcome", "achieved", "improved",
    ],
    aliases: [
      "what measurable results has he achieved",
      "what results has he achieved",
      "what are his metrics",
      "what impact has he made",
      "what are his achievements",
      "what results have you achieved",
    ],
    followUps: [
      "Tell me about IpserLab",
      "Tell me about the ASL extension",
      "Tell me about his research",
    ],
    actions: [ACT_RESUME, ACT_CONTACT],
  },
  {
    id: "ai_exp",
    question: "Does he have AI experience?",
    answer:
      "Yes. Khanh has trained and deployed a bidirectional GRU for ASL recognition and integrated Claude into a production-style meal-planning application. He has also worked with ONNX Runtime, MediaPipe, computer vision, prompt design, and generative AI APIs.",
    keywords: [
      "ai", "artificial intelligence", "machine learning", "ml", "deep learning",
      "claude", "onnx", "pytorch", "generative", "llm", "neural", "model",
    ],
    aliases: [
      "does he have ai experience",
      "do you know machine learning",
      "does he know ai",
      "ai experience",
      "machine learning experience",
    ],
    followUps: [
      "Tell me about the ASL extension",
      "What measurable results has he achieved?",
      "What are his strongest skills?",
    ],
  },
  {
    id: "backend_exp",
    question: "Does he have backend experience?",
    answer:
      "Yes. Khanh has built FastAPI services, REST endpoints, WebSocket inference pipelines, and PostgreSQL-backed applications. His backend work includes data synchronization, database migration, error handling, AI integration, and real-time communication.",
    keywords: [
      "backend", "fastapi", "api", "rest", "websocket", "database",
      "postgresql", "server", "endpoint", "infrastructure", "sql",
    ],
    aliases: [
      "does he have backend experience",
      "backend experience",
      "server experience",
      "api experience",
    ],
    followUps: [
      "Tell me about IpserLab",
      "Tell me about the ASL extension",
      "What are his strongest skills?",
    ],
    actions: [ACT_EXP],
  },
  {
    id: "leadership",
    question: "Does he have leadership experience?",
    answer:
      "Yes. Khanh leads a 10-member executive team as president of DePauw's Google Developer Groups on Campus. He has helped organize workshops in AI, cloud computing, and mobile development that have reached more than 300 cumulative attendees.",
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
  },
  {
    id: "teaching",
    question: "Does he have teaching experience?",
    answer:
      "Yes. As a computer science teaching assistant, Khanh supported more than 60 students through Java code reviews, debugging sessions, tutoring, and lab instruction. He worked with students in introductory programming and object-oriented software design.",
    keywords: [
      "teaching", "ta", "teaching assistant", "mentor", "tutor", "student",
      "java", "oop", "instruction", "lab", "code review",
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
  },
  {
    id: "teamwork",
    question: "How does he work with others?",
    answer:
      "Khanh has collaborated in internship, research, teaching, and student-leadership environments. His experience supporting students and leading a developer organization shows that he can explain technical ideas clearly, receive feedback, and contribute across different teams.",
    keywords: [
      "teamwork", "collaboration", "collaborate", "communication", "team",
      "soft skills", "others", "people", "interpersonal", "together",
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
  },
  {
    id: "current_work",
    question: "What is Khanh working on now?",
    answer:
      "Khanh is continuing his tangible programming research at DePauw University. His current work focuses on computer vision, physical interaction, embedded hardware, and making programming more accessible to children.",
    keywords: [
      "current", "currently", "now", "working", "present", "latest",
      "recent", "today", "ongoing",
    ],
    aliases: [
      "what is khanh working on now",
      "what is he working on",
      "what is he doing now",
      "current projects",
    ],
    followUps: [
      "Tell me about his research",
      "What impact did the research have?",
      "What problems does he enjoy solving?",
    ],
  },
  {
    id: "problems",
    question: "What problems does he enjoy solving?",
    answer:
      "Khanh enjoys building practical software that connects technical systems with real human needs. His work has addressed accessibility, education, food management, real-time communication, and human-computer interaction.",
    keywords: [
      "interests", "problems", "passion", "focus", "enjoy", "motivated",
      "interested", "care", "like", "love", "curious",
    ],
    aliases: [
      "what problems does he enjoy solving",
      "what are his interests",
      "what is he passionate about",
    ],
    followUps: [
      "What has Khanh built?",
      "Does he have AI experience?",
      "Why should we hire Khanh?",
    ],
  },
  {
    id: "contact",
    question: "How can I contact Khanh?",
    answer:
      "You can reach Khanh at truongnguyent.khanh@gmail.com, on LinkedIn at linkedin.com/in/heyamktr, or on GitHub at github.com/heyamktr. He's most responsive by email and open to internship and collaboration conversations.",
    keywords: [
      "contact", "email", "reach", "linkedin", "github",
      "get in touch", "connect", "message", "talk",
    ],
    aliases: [
      "how can i contact khanh",
      "contact info",
      "email address",
      "how to reach him",
    ],
    followUps: [
      "What is he looking for?",
      "Where is his resume?",
      "What has Khanh built?",
    ],
    actions: [ACT_CONTACT],
  },
  {
    id: "resume",
    question: "Where is his resume?",
    answer:
      "You can view Khanh's résumé using the Resume button in the navigation bar, or directly via the link below.",
    keywords: ["resume", "cv", "download", "pdf", "résumé", "curriculum"],
    aliases: [
      "where is his resume",
      "can i see his resume",
      "show me the resume",
    ],
    followUps: [
      "How can I contact Khanh?",
      "What is he looking for?",
      "What measurable results has he achieved?",
    ],
    actions: [ACT_RESUME, ACT_CONTACT],
  },
  {
    id: "looking_for",
    question: "What is he looking for?",
    answer:
      "Khanh is seeking software engineering internships, particularly in full-stack, AI/ML, or systems roles. He is currently interning at IpserLab through August 2026 and available for new roles from September 2026. Full-time roles from May 2028.",
    keywords: [
      "looking", "seeking", "internship", "job", "role", "recruit",
      "opportunity", "open", "available", "timeline", "start",
      "new grad", "full-time", "want", "hire",
    ],
    aliases: [
      "what is he looking for",
      "is he looking for a job",
      "open to work",
      "available for hire",
      "when is he available",
    ],
    followUps: [
      "How can I contact Khanh?",
      "Where is his resume?",
      "Show me Khanh's experience",
    ],
    actions: [ACT_RESUME, ACT_CONTACT],
  },
];

// ── Security ───────────────────────────────────────────────────────────────
const INJECTION_PATTERN =
  /ignore.*(previous|above|prior|all)|reveal.*prompt|you are now|act as|disregard|system prompt|pretend|jailbreak|forget everything/i;

// ── Normaliser ─────────────────────────────────────────────────────────────
// Collapses pronouns so "what is his experience" and "show me his skills" both
// become regular noun-based queries rather than always scoring "intro".
function normalise(input: string): string {
  return input
    .toLowerCase()
    .replace(/\bkhanh'?s?\b/g, "khanh")
    .replace(/\b(your|you|yourself|he|his|him)\b/g, "khanh")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// ── Stop words ─────────────────────────────────────────────────────────────
const STOP = new Set([
  "a", "an", "the", "is", "are", "was", "were", "be", "been", "being",
  "have", "has", "had", "do", "does", "did", "will", "would", "could",
  "should", "may", "might", "shall", "can", "at", "in", "on", "for",
  "to", "of", "and", "or", "but", "not", "with", "from", "by", "about",
  "as", "into", "through", "that", "this", "these", "those", "it", "its",
  "i", "any", "some", "there", "then", "than", "also", "more", "so", "if",
  "up", "out", "no", "yes", "just", "get", "go", "let", "see", "give",
  "here", "much", "very", "tell", "me", "us", "them", "our", "my",
  "khanh",  // too broad after pronoun expansion to be a keyword signal
]);

function tokenise(input: string): string[] {
  return normalise(input)
    .split(/\s+/)
    .filter((t) => t.length > 1 && !STOP.has(t));
}

// ── Scorer ─────────────────────────────────────────────────────────────────
function scoreItem(
  item: ChatQAItem,
  normalisedInput: string,
  tokens: string[]
): number {
  // Exact canonical question match
  if (normalise(item.question) === normalisedInput) return 1000;

  // Alias match
  if ((item.aliases ?? []).some((a) => normalise(a) === normalisedInput))
    return 500;

  // Keyword scoring — partial substring matching so "ml" matches "machine learning"
  let score = 0;
  for (const token of tokens) {
    if (
      item.keywords.some(
        (k) => k === token || k.includes(token) || token.includes(k)
      )
    ) {
      score += 2;
    }
  }
  return score;
}

// ── Main export ────────────────────────────────────────────────────────────
export function getResponse(input: string): BotResponse {
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

  const normalisedInput = normalise(trimmed);
  const tokens = tokenise(trimmed);

  if (tokens.length === 0) {
    return { answer: FALLBACK_ANSWER, suggestions: FALLBACK_SUGGESTIONS };
  }

  let bestScore = 0;
  let bestItem: ChatQAItem | null = null;

  for (const item of chatQA) {
    const s = scoreItem(item, normalisedInput, tokens);
    if (s > bestScore) {
      bestScore = s;
      bestItem = item;
    }
  }

  if (bestScore < 2 || !bestItem) {
    return { answer: FALLBACK_ANSWER, suggestions: FALLBACK_SUGGESTIONS };
  }

  return {
    answer: bestItem.answer,
    suggestions: bestItem.followUps.slice(0, 3),
    actions: bestItem.actions,
  };
}
