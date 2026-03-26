"use client";

import { useEffect, useMemo, useRef } from "react";

type Token = {
  text: string;
  color: string;
};

type Snippet = {
  id: string;
  tokens: Token[];
  top: string;
  left: string;
  opacity: number;
  delay: number;
};

type SymbolMark = {
  id: string;
  text: string;
  top: string;
  left: string;
};

type Particle = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  phase: number;
  alpha: number;
};

const snippetsSeed: Array<Omit<Snippet, "opacity" | "delay">> = [
  { id: "react-state", top: "10%", left: "7%", tokens: [{ text: "const ", color: "#a1a1aa" }, { text: "[", color: "#a1a1aa" }, { text: "state", color: "#fb923c" }, { text: ", ", color: "#a1a1aa" }, { text: "setState", color: "#fb923c" }, { text: "] = ", color: "#a1a1aa" }, { text: "useState", color: "#fb923c" }, { text: "<T>", color: "#fb923c" }, { text: "(null)", color: "#fdba74" }] },
  { id: "react-effect", top: "25%", left: "76%", tokens: [{ text: "useEffect", color: "#fb923c" }, { text: "(() => {", color: "#fb923c" }] },
  { id: "ts-props", top: "42%", left: "14%", tokens: [{ text: "interface Props {", color: "#fb923c" }] },
  { id: "react-export", top: "58%", left: "72%", tokens: [{ text: "export default App", color: "#fb923c" }] },
  { id: "numpy", top: "73%", left: "8%", tokens: [{ text: "import numpy as np", color: "#86efac" }] },
  { id: "forward", top: "18%", left: "55%", tokens: [{ text: "def forward", color: "#86efac" }, { text: "(self, x):", color: "#fdba74" }] },
  { id: "torch-module", top: "81%", left: "57%", tokens: [{ text: "torch.nn.Module", color: "#86efac" }] },
  { id: "fit", top: "34%", left: "4%", tokens: [{ text: "model.fit", color: "#86efac" }, { text: "(X_train)", color: "#fdba74" }] },
  { id: "opencv-include", top: "9%", left: "61%", tokens: [{ text: "#include <opencv2>", color: "#f59e0b" }] },
  { id: "cv-mat", top: "67%", left: "66%", tokens: [{ text: "cv::Mat frame;", color: "#f59e0b" }] },
  { id: "template", top: "48%", left: "81%", tokens: [{ text: "template<typename T>", color: "#f59e0b" }] },
  { id: "sift", top: "86%", left: "79%", tokens: [{ text: "SIFT_create()", color: "#f59e0b" }] },
  { id: "gradient", top: "22%", left: "33%", tokens: [{ text: "∇L(θ)", color: "#f0abfc" }] },
  { id: "theta", top: "53%", left: "28%", tokens: [{ text: "θ -= α∇L(θ)", color: "#f0abfc" }] },
  { id: "softmax", top: "79%", left: "34%", tokens: [{ text: "softmax(logits)", color: "#f0abfc" }] },
  { id: "attention", top: "37%", left: "49%", tokens: [{ text: "attention_weights", color: "#f0abfc" }] },
  { id: "comment", top: "13%", left: "41%", tokens: [{ text: "// TODO: optimize", color: "#a1a1aa" }] },
  { id: "git", top: "61%", left: "44%", tokens: [{ text: "git commit -m ", color: "#a1a1aa" }, { text: "\"fix:\"", color: "#fdba74" }] },
  { id: "pip", top: "88%", left: "22%", tokens: [{ text: "pip install -r requirements.txt", color: "#a1a1aa" }] },
  { id: "loss", top: "29%", left: "88%", tokens: [{ text: "loss: 0.0024", color: "#fdba74" }] },
  { id: "accuracy", top: "71%", left: "48%", tokens: [{ text: "accuracy: 97.3%", color: "#fdba74" }] },
  { id: "complexity", top: "46%", left: "20%", tokens: [{ text: "O(n log n)", color: "#fdba74" }] },
];

const symbolSeed: Omit<SymbolMark, "id">[] = [
  { text: "{ }", top: "16%", left: "24%" },
  { text: "=>", top: "22%", left: "92%" },
  { text: "&&", top: "64%", left: "18%" },
  { text: "===", top: "56%", left: "87%" },
  { text: "[ ]", top: "83%", left: "12%" },
  { text: "::", top: "31%", left: "63%" },
  { text: "{ }", top: "74%", left: "71%" },
  { text: "=>", top: "12%", left: "73%" },
];

function createParticles(width: number, height: number): Particle[] {
  return Array.from({ length: 40 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: 1 + Math.random(),
    speed: 0.08 + Math.random() * 0.22,
    phase: Math.random() * Math.PI * 2,
    alpha: 0.05 + Math.random() * 0.1,
  }));
}

export default function BackgroundDecor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const snippets = useMemo<Snippet[]>(
    () =>
      snippetsSeed.map((snippet, index) => ({
        ...snippet,
        opacity: 0.09 + ((index % 4) * 0.02),
        delay: (index * 0.13) % 3,
      })),
    []
  );

  const symbols = useMemo<SymbolMark[]>(
    () =>
      symbolSeed.map((item, index) => ({
        ...item,
        id: `symbol-${index}`,
      })),
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let particles: Particle[] = [];
    let frame = 0;
    let animationId = 0;

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      particles = createParticles(width, height);
    };

    const draw = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      context.clearRect(0, 0, width, height);
      frame += 1;

      particles.forEach((particle) => {
        particle.y -= particle.speed;
        if (particle.y < -8) {
          particle.y = height + Math.random() * 32;
          particle.x = Math.random() * width;
        }

        const opacity =
          particle.alpha * (0.55 + 0.45 * Math.sin(frame * 0.015 + particle.phase));
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 122, 69, ${Math.max(0.05, opacity)})`;
        context.fill();
      });

      animationId = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#070304]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_22%,#4a170d_0%,#2f0f0a_18%,#14090a_40%,#070304_76%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_24%,rgba(255,123,69,0.34)_0%,rgba(187,63,31,0.18)_24%,transparent_52%)]" />

      {snippets.map((snippet) => (
        <div
          key={snippet.id}
          className="animate-code-drift absolute select-none font-mono text-[11px] leading-6 blur-[0.8px]"
          style={{
            top: snippet.top,
            left: snippet.left,
            opacity: snippet.opacity,
            animationDelay: `${snippet.delay}s`,
            userSelect: "none",
          }}
        >
          {snippet.tokens.map((token, index) => (
            <span key={`${snippet.id}-${index}`} style={{ color: token.color }}>
              {token.text}
            </span>
          ))}
        </div>
      ))}

      {symbols.map((symbol, index) => (
        <div
          key={symbol.id}
          className="animate-code-drift absolute font-mono text-[11px] text-slate-500 blur-[0.8px]"
          style={{
            top: symbol.top,
            left: symbol.left,
            opacity: 0.07,
            animationDelay: `${(index * 0.21) % 3}s`,
            userSelect: "none",
          }}
        >
          {symbol.text}
        </div>
      ))}

      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
