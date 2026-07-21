import FadeIn from "./FadeIn";

const SKILL_CATEGORIES = [
  {
    label: "Languages",
    items: ["Java", "Python", "C/C++", "SQL", "JavaScript", "TypeScript", "Dart", "R", "Lua/Luau", "HTML/CSS"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["React.js", "React Native", "Next.js", "Flutter", "FastAPI", "Node.js", "TailwindCSS", "OpenCV", "pandas", "NumPy", "Matplotlib"],
  },
  {
    label: "Databases & Cloud",
    items: ["PostgreSQL", "Amazon Aurora", "Supabase", "Firebase", "MongoDB"],
  },
  {
    label: "Tools & Platforms",
    items: ["Git", "Docker", "Playwright", "Tableau", "Roblox Studio", "Raspberry Pi", "Google Maps API", "Google Places API", "Amazon Nova API", "Claude API", "Gemini API"],
  },
];

const chipStyle: React.CSSProperties = {
  fontSize: "clamp(0.7rem, 1vw, 0.875rem)",
  fontWeight: 500,
  color: "#0C0C0C",
  border: "1px solid rgba(12,12,12,0.2)",
  borderRadius: 9999,
  padding: "0.375rem 0.875rem",
  letterSpacing: "0.02em",
  display: "inline-block",
  lineHeight: 1.4,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-white"
      style={{
        marginTop: "-2.5rem",
        position: "relative",
        zIndex: 10,
        padding: "clamp(5rem, 8vw, 8rem) clamp(1.25rem, 3vw, 2.5rem)",
      }}
    >
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: "clamp(3rem, 5vw, 4rem)" }}>
          <h2
            style={{
              fontWeight: 900,
              textTransform: "uppercase",
              fontSize: "clamp(2rem, 5vw, 72px)",
              color: "#0C0C0C",
              letterSpacing: "-0.025em",
              lineHeight: 1,
            }}
          >
            Skills
          </h2>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "clamp(0.8rem, 1.3vw, 1rem)",
              fontWeight: 400,
              color: "#0C0C0C",
              opacity: 0.45,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            Every tool I&apos;ve shipped real work with
          </p>
        </div>
      </FadeIn>

      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
        {SKILL_CATEGORIES.map((cat, i) => (
          <FadeIn key={cat.label} delay={i * 0.1}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "clamp(1.5rem, 4vw, 4rem)",
                padding: "clamp(1.5rem, 2.5vw, 2rem) 0",
                borderTop: "1px solid rgba(12,12,12,0.1)",
              }}
            >
              <p
                style={{
                  width: "clamp(90px, 15vw, 160px)",
                  flexShrink: 0,
                  fontSize: "clamp(0.65rem, 1vw, 0.8rem)",
                  fontWeight: 600,
                  color: "#0C0C0C",
                  opacity: 0.4,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  paddingTop: "0.35rem",
                  lineHeight: 1.4,
                }}
              >
                {cat.label}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {cat.items.map((item) => (
                  <span key={item} style={chipStyle}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
