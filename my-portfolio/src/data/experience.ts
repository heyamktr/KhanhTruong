export const experience = [
  {
    role: "Software Engineer Intern",
    org: "IpserLab, LLC",
    date: "May 2026 – Aug 2026, Remote",
    description:
      "Built a mobile app in React Native and FastAPI that scans grocery receipts, tracks food inventory, and suggests meals using the Claude API.",
    bullets: [
      "Built a mobile app on React Native (TypeScript) and FastAPI (Python) that scans grocery receipts, tracks household food inventory, and suggests meals from those ingredients via the Claude API.",
      "Connected the app to the backend through 8 REST API endpoints with synchronization under 1 second, and added 12 error screens so the app shows a clear message instead of crashing.",
      "Cut AI recipe truncation from ~30% to <2% by tuning Claude API settings (max_tokens, prompt structure) and migrating from SQLite to PostgreSQL.",
    ],
    tags: ["React Native", "TypeScript", "FastAPI", "Python", "Claude API", "PostgreSQL"],
    logo: null,
    image: null,
    repoUrl: "#",
  },
  {
    role: "Research Assistant",
    org: "Tangible Learning Platform, DePauw University",
    date: "Jan 2025 – Present",
    description:
      "Building an interactive tangible programming system for children using computer vision and embedded hardware.",
    bullets: [
      "Developed a tangible programming system in C++ using OpenCV (ArUco), Raylib, and FluidSynth on a Raspberry Pi 4 setup.",
      "Implemented ArUco marker detection and PnP pose estimation to translate coding-card sequences into executable command graphs.",
      "Reduced marker detection latency by 35% to sub-100ms end-to-end and validated usability with a 40-participant study using the Wilcoxon rank-sum test.",
    ],
    tags: ["C++", "OpenCV", "Raylib", "FluidSynth", "Raspberry Pi"],
    logo: "/images/logos/DPU.png",
    image: null,
    repoUrl: "#",
  },
  {
    role: "Software Engineering Intern",
    org: "LECO Studio",
    date: "May 2025 – Aug 2025, Ho Chi Minh City",
    description:
      "Built a privacy-first Chrome MV3 extension that translates American Sign Language into spoken voice in real time during Google Meet, Zoom, Teams, and Messenger.",
    bullets: [
      "Built a Chrome MV3 extension that sends only 144 landmark floats per frame (no video) over WebSocket to a FastAPI inference server, enabling real-time ASL-to-speech translation across Google Meet, Zoom, Teams, and Messenger.",
      "Trained a bidirectional GRU (558K parameters) on WLASL achieving 63.18% Top-1 / 81.59% Top-3 accuracy; exported to ONNX Runtime for 5.97× faster inference (2.57ms median) with an LFU prediction cache.",
      "Bypassed Chrome MV3's content-script sandbox via a two-world MediaPipe bridge, and overrode getUserMedia with the Web Audio API to inject synthesized speech directly into the meeting's microphone stream.",
    ],
    tags: ["Python", "PyTorch", "ONNX", "JavaScript", "Chrome MV3", "MediaPipe", "FastAPI", "WebSocket"],
    logo: "/images/logos/lecoStudio.jpg",
    image: null,
    repoUrl: "#",
  },
  {
    role: "Teaching Assistant",
    org: "Department of Computer Science, DePauw University",
    date: "Jan 2025 – Jan 2026",
    description:
      "Supported foundational CS courses with code reviews, debugging help, tutoring, and lab instruction.",
    bullets: [
      "Supported 30+ students in CS 121: Intro to Computer Science and CS 125: Software Design (OOP).",
      "Provided code reviews, debugging sessions, and lab instruction working primarily in Java and object-oriented programming.",
    ],
    tags: ["Java", "Teaching", "Mentoring", "OOP"],
    logo: "/images/logos/DPU.png",
    image: null,
    repoUrl: "#",
  },
];
