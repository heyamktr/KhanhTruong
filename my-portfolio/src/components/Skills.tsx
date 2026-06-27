import FadeIn from "./FadeIn";

const SKILL_ITEMS = [
  {
    num: "01",
    name: "Full-Stack Web",
    desc: "Building end-to-end web applications — from responsive React frontends to scalable Node.js and Next.js backends with real-world deployment on AWS and PostgreSQL.",
    tags: ["React.js", "Next.js", "Node.js", "Tailwind CSS", "TypeScript", "REST APIs"],
  },
  {
    num: "02",
    name: "AI & Machine Learning",
    desc: "Integrating LLMs and computer vision into practical applications — from multi-turn agentic pipelines to image recognition and intelligent workflow automation.",
    tags: ["Python", "Gemini API", "Amazon Nova", "FastAPI", "OpenCV", "Playwright"],
  },
  {
    num: "03",
    name: "Systems & Embedded",
    desc: "Low-level engineering in C++ for embedded systems — implementing real-time computer vision pipelines, ArUco marker detection, and hardware-software integration on Raspberry Pi.",
    tags: ["C++", "OpenCV", "Raylib", "Raspberry Pi", "Java"],
  },
  {
    num: "04",
    name: "Mobile Development",
    desc: "Cross-platform mobile apps with Flutter, authenticated user sessions, real-time maps, and Roblox game UIs — shipped to thousands of active players.",
    tags: ["Flutter", "Dart", "Supabase", "Google Maps API", "Lua", "Roblox Studio"],
  },
  {
    num: "05",
    name: "Cloud & Infrastructure",
    desc: "Production deployments on AWS (EC2, S3, Cognito), database design in PostgreSQL and MongoDB, and Docker-based infrastructure for reliable, scalable services.",
    tags: ["AWS", "PostgreSQL", "MongoDB", "Docker", "Git"],
  },
];

const tagStyle: React.CSSProperties = {
  fontSize: "clamp(0.65rem, 1vw, 0.8rem)",
  fontWeight: 400,
  color: "#0C0C0C",
  opacity: 0.45,
  border: "1px solid rgba(12,12,12,0.25)",
  borderRadius: 9999,
  padding: "0.25rem 0.75rem",
  textTransform: "uppercase",
  letterSpacing: "0.07em",
  display: "inline-block",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-white"
      style={{
        padding: "clamp(5rem, 8vw, 8rem) clamp(1.25rem, 3vw, 2.5rem)",
      }}
    >
      <FadeIn>
        <h2
          style={{
            fontWeight: 900,
            textTransform: "uppercase",
            textAlign: "center",
            fontSize: "clamp(3rem, 12vw, 160px)",
            color: "#0C0C0C",
            marginBottom: "clamp(4rem, 7vw, 7rem)",
            letterSpacing: "-0.025em",
            lineHeight: 1,
          }}
        >
          Skills
        </h2>
      </FadeIn>

      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
        {SKILL_ITEMS.map((item, index) => (
          <FadeIn key={item.num} delay={index * 0.1}>
            <div className="svc-item">
              <span
                style={{
                  fontSize: "clamp(3rem, 10vw, 140px)",
                  fontWeight: 900,
                  lineHeight: 1,
                  flexShrink: 0,
                  color: "#0C0C0C",
                }}
              >
                {item.num}
              </span>
              <div>
                <p
                  style={{
                    fontSize: "clamp(1rem, 2.2vw, 2.1rem)",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    color: "#0C0C0C",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.name}
                </p>
                <p
                  style={{
                    fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                    fontWeight: 300,
                    lineHeight: 1.625,
                    color: "#0C0C0C",
                    opacity: 0.6,
                    maxWidth: "42rem",
                  }}
                >
                  {item.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginTop: "0.75rem",
                  }}
                >
                  {item.tags.map((tag) => (
                    <span key={tag} style={tagStyle}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
