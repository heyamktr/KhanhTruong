// ── Types ────────────────────────────────────────────────────────────
export interface BotResponse {
  answer: string;
  suggestions: string[];
}

// ── Initial state ────────────────────────────────────────────────────
export const INTRO_MESSAGE =
  "Hey! I'm Khanh Bot 🤖 Ask me anything about Khanh, his projects, skills, experience, or background.";

export const INITIAL_SUGGESTIONS = [
  "Tell me about your journey",
  "Why software engineering?",
  "What's your best project?",
  "What are you looking for?",
];

// ── Q&A pairs ────────────────────────────────────────────────────────
// To connect to an AI API later, replace getResponse() with an async
// function that sends `input` to your API and returns BotResponse.
const QA: Record<string, BotResponse> = {
  journey: {
    answer:
      "I grew up in Vietnam and came to the US to study CS & Mathematics at DePauw University in Indiana 🇻🇳\n\nI started coding to solve real problems — my first internship had me shipping game UIs to 14,000 Roblox players. Since then I've built AI pipelines, full-stack platforms, and even a tangible programming system for kids using a Raspberry Pi + computer vision.\n\nI'm driven by seeing real people use what I build. 🚀",
    suggestions: [
      "Why software engineering?",
      "Tell me about your experience",
      "What's your best project?",
    ],
  },

  why: {
    answer:
      "Software is one of the few fields where a single person can build something used by thousands overnight 💡\n\nI got hooked when I shipped Roblox game UIs to 14,000 active players as an intern at LECO Studio. Seeing real users interact with code I wrote in a week was addictive.\n\nI want to keep building things that scale and actually matter.",
    suggestions: [
      "What's your best project?",
      "What are you looking for?",
      "Tell me about your experience",
    ],
  },

  projects: {
    answer:
      "My top 3 projects:\n\n🤖 Agentic Shopping Assistant — AI agent using Amazon Nova + FastAPI + PostgreSQL. Understands user needs, scrapes reviews from Amazon/Reddit/TikTok, and ranks products.\n\n🏙 Greencastle Discovery — Full-stack local discovery platform aggregating events & businesses. Next.js + MongoDB + REST APIs.\n\n📍 POV-AI — Mobile app that identifies landmarks from photos via Gemini Vision, then answers follow-up questions about nearby places. Flutter + Python + Supabase.",
    suggestions: [
      "What's your tech stack?",
      "Do you have live demos?",
      "Tell me about your experience",
    ],
  },

  bestProject: {
    answer:
      "The Agentic Shopping Assistant is my most technically challenging work 🏆\n\nIt uses Amazon Nova for multi-turn requirement understanding, Playwright for scraping, and aggregates signals from Amazon, Reddit, and TikTok to rank products intelligently.\n\nFull stack: FastAPI backend, React frontend, Aurora PostgreSQL database. Built this in a hackathon — super proud of it!",
    suggestions: [
      "What other projects did you build?",
      "What's your tech stack?",
      "What are you looking for?",
    ],
  },

  liveDemos: {
    answer:
      "Honestly, deploying live demos is on my to-do list! 😅\n\nRight now the projects are all on GitHub with full source code. I'm working on deploying a few to Vercel.\n\nIn the meantime, you can see all the code at github.com/heyamktr — and feel free to ask me to walk you through any project!",
    suggestions: [
      "How can I contact you?",
      "What's your best project?",
      "Where's your resume?",
    ],
  },

  looking: {
    answer:
      "I'm actively looking for:\n\n📅 Software engineering internships — Summer/Fall 2026\n🎓 New grad full-time roles starting May 2027\n\nI'm most excited about full-stack, AI/ML, or systems roles at companies that care about engineering quality and real user impact.\n\nOpen to remote or relocation! 📍",
    suggestions: [
      "How can I contact you?",
      "Where's your resume?",
      "What's your availability?",
    ],
  },

  skills: {
    answer:
      "My tech stack:\n\n⚡ Languages: Python, Java, C/C++, TypeScript, JavaScript, SQL\n🖥 Frontend: React.js, Next.js, Tailwind CSS\n⚙️ Backend: Node.js, FastAPI, Express.js\n🗄 Databases: PostgreSQL, MongoDB, Supabase\n☁️ Cloud: AWS (EC2, S3, Cognito), Docker\n🤖 AI/ML: Gemini API, Amazon Nova, OpenCV, Playwright",
    suggestions: [
      "What's your best project?",
      "Tell me about your experience",
      "Why software engineering?",
    ],
  },

  experience: {
    answer:
      "Current & recent roles:\n\n💼 SWE Intern @ InstaLab (Jun–Aug 2026) — Java microservices, React dashboards, PostgreSQL. 40% latency reduction.\n\n🔬 Research Assistant @ DePauw (2025–Present) — Computer vision system in C++/OpenCV on Raspberry Pi. Sub-100ms latency, 40-person user study.\n\n🎮 SWE Intern @ LECO Studio (2025) — Roblox game UIs used by 14,000+ players.\n\n👨‍💻 Technical Director @ DePauw Tutoring — Built scheduling platform for 120+ students. 100% adoption in 6 weeks.",
    suggestions: [
      "What's your education?",
      "What are you looking for?",
      "What's your tech stack?",
    ],
  },

  education: {
    answer:
      "🎓 DePauw University — Greencastle, Indiana\nB.A. Computer Science & Mathematics\nGPA: 3.78 | Graduating May 2027\n\nCoursework: Data Structures (C++), AI, Software Design (OOP), Linear Algebra, Computer Security, Mobile Development, Computer Systems\n\nActivities: President of Google Developer Groups on Campus, IT Associates Program",
    suggestions: [
      "Tell me about your experience",
      "What are you looking for?",
      "How can I contact you?",
    ],
  },

  contact: {
    answer:
      "You can reach Khanh at:\n\n📧 truongnguyent.khanh@gmail.com\n💼 linkedin.com/in/heyamktr\n🐙 github.com/heyamktr\n\nMost responsive on email. Reach out about internships, collaborations, or just to say hi! 👋",
    suggestions: [
      "Where's your resume?",
      "What are you looking for?",
      "Tell me about your journey",
    ],
  },

  resume: {
    answer:
      "You can download Khanh's resume using the Resume link in the navigation at the top of this page 📄\n\nOr feel free to keep asking me — I'm basically a talking resume. 😄",
    suggestions: [
      "How can I contact you?",
      "What are you looking for?",
      "What's your best project?",
    ],
  },

  availability: {
    answer:
      "Availability:\n\n📅 Currently interning at InstaLab (Jun–Aug 2026)\n📅 Available for new roles from September 2026\n🎓 Open to new grad full-time roles from May 2027\n\nOpen to remote, hybrid, or in-person. US-based preferred but open to discussions!",
    suggestions: [
      "How can I contact you?",
      "What are you looking for?",
      "Where's your resume?",
    ],
  },

  default: {
    answer:
      "Hmm, I'm not sure about that one! 🤔 Try asking me about Khanh's journey, projects, skills, experience, or how to contact him.",
    suggestions: INITIAL_SUGGESTIONS,
  },
};

// ── Keyword matcher ──────────────────────────────────────────────────
// Replace this function with an async AI API call when you're ready.
export function getResponse(input: string): BotResponse {
  const q = input.toLowerCase();

  if (/journey|story|background|grew up|vietnam|how did you start|who are you/.test(q))
    return QA.journey;
  if (/why.*(swe|software|engineer|code|coding|developer|program)|what made you|passion/.test(q))
    return QA.why;
  if (/best project|top project|fav(o[u]?rite)? project|most proud|showcase/.test(q))
    return QA.bestProject;
  if (/project|built|portfolio|app|website|work you.ve done/.test(q))
    return QA.projects;
  if (/live|demo|deployed|url|link|see it/.test(q))
    return QA.liveDemos;
  if (/look(ing)? for|seek|intern|job|role|opport|hire|open to|position/.test(q))
    return QA.looking;
  if (/skill|stack|tech|language|framework|tool|know how to|proficient/.test(q))
    return QA.skills;
  if (/experience|intern|work(ed)?|employ|position|role at/.test(q))
    return QA.experience;
  if (/education|school|universit|college|depauw|degree|gpa|study|grad/.test(q))
    return QA.education;
  if (/contact|email|reach|linkedin|github|get in touch/.test(q))
    return QA.contact;
  if (/resume|cv|download|pdf/.test(q))
    return QA.resume;
  if (/availab|when|start|timeline|schedule/.test(q))
    return QA.availability;

  return QA.default;
}
