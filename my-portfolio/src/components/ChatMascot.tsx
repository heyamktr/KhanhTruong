"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  getResponse,
  INITIAL_SUGGESTIONS,
  INTRO_MESSAGE,
  type BotResponse,
} from "@/data/chatResponses";

// ── Types ─────────────────────────────────────────────────────────────
type MascotState = "idle" | "running" | "open" | "minimized";

interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
}

const genId = () => `${Date.now()}-${Math.random().toString(36).slice(2)}`;

// ── Image paths ────────────────────────────────────────────────────────
// Sprite sheet: 1774×887px, 8 walk frames side by side, transparent bg
const WALK_SPRITE = "/images/mascot-walk.png";
// Small square icon used in chat header / message bubbles
const AVATAR_ICON = "/images/pixel-avatar.png";

// ── Component ─────────────────────────────────────────────────────────
export default function ChatMascot() {
  const [mascotState, setMascotState] = useState<MascotState>("idle");
  const [messages, setMessages] = useState<Message[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>(INITIAL_SUGGESTIONS);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Use refs for animation values so rAF never triggers re-renders
  const mascotRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const animRef = useRef<number>(0);
  // Fixed initial value matches SSR output — actual viewport position set in useEffect
  const posRef = useRef(200);
  const dirRef = useRef(1); // 1 = right, -1 = left
  const stateRef = useRef<MascotState>("idle");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Keep stateRef in sync with React state
  useEffect(() => { stateRef.current = mascotState; }, [mascotState]);

  // Mobile breakpoint detection + initial position (both safe to run only on client)
  useEffect(() => {
    posRef.current = window.innerWidth * 0.25;
    if (mascotRef.current) mascotRef.current.style.left = `${posRef.current}px`;

    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ── Walking animation (direct DOM updates at 60fps) ──────────────────
  useEffect(() => {
    if (mascotState !== "idle") {
      cancelAnimationFrame(animRef.current);
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const SPEED = 1.4; // px per frame

    const animate = () => {
      if (stateRef.current !== "idle") return;

      posRef.current += SPEED * dirRef.current;

      const maxX = window.innerWidth - 90;
      const minX = -20;

      if (posRef.current >= maxX) {
        posRef.current = maxX;
        dirRef.current = -1;
        // Flip avatar to face left
        if (imgRef.current) imgRef.current.style.transform = "scaleX(-1)";
      }
      if (posRef.current <= minX) {
        posRef.current = minX;
        dirRef.current = 1;
        // Flip avatar to face right
        if (imgRef.current) imgRef.current.style.transform = "scaleX(1)";
      }

      // Direct DOM update — no React re-render needed
      if (mascotRef.current) {
        mascotRef.current.style.left = `${posRef.current}px`;
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [mascotState]);

  // Auto-scroll chat to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // ── Click handler — stop walk, run to corner, open chat ──────────────
  const handleMascotClick = useCallback(() => {
    if (mascotState !== "idle") return;

    cancelAnimationFrame(animRef.current);
    setMascotState("running");

    // After the CSS transition finishes, open chat and show intro
    setTimeout(() => {
      setMascotState("open");
      setMessages([{ id: genId(), role: "bot", text: INTRO_MESSAGE }]);
      setSuggestions(INITIAL_SUGGESTIONS);
    }, 580);
  }, [mascotState]);

  // ── Send a message (from input or suggestion chip) ───────────────────
  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim() || isTyping) return;

      const userMsg: Message = { id: genId(), role: "user", text: text.trim() };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setSuggestions([]);
      setIsTyping(true);

      // Simulate typing delay (swap this setTimeout for an API call later)
      const delay = 800 + Math.random() * 500;
      setTimeout(() => {
        const res: BotResponse = getResponse(text);
        setMessages((prev) => [
          ...prev,
          { id: genId(), role: "bot", text: res.answer },
        ]);
        setSuggestions(res.suggestions);
        setIsTyping(false);
      }, delay);
    },
    [isTyping]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage(input);
  };

  // ── Derived values ───────────────────────────────────────────────────
  const isOpen = mascotState === "open" || mascotState === "minimized";

  // In idle: position is driven by rAF via DOM, so start pos from ref
  // In running/open/minimized: CSS transition handles the move to left:20px
  const mascotLeft = mascotState === "idle" ? posRef.current : 20;
  const mascotTransition =
    mascotState === "running"
      ? "left 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      : "none";

  // Sprite background-position animation class (applied to the sprite div)
  const spriteClass =
    mascotState === "idle"
      ? "mascot-walk"
      : mascotState === "running"
        ? "mascot-run"
        : "";

  // Idle breathing class (applied to filter wrapper so whole character floats)
  const idleClass =
    mascotState === "open" || mascotState === "minimized" ? "mascot-idle" : "";

  const chatWidth = isMobile ? `calc(100vw - 40px)` : "320px";

  return (
    <>
      {/* ── Mascot wrapper ─────────────────────────────────────────────── */}
      <div
        ref={mascotRef}
        suppressHydrationWarning
        role="button"
        tabIndex={0}
        aria-label="Open Khanh Bot chat"
        onClick={handleMascotClick}
        onKeyDown={(e) => e.key === "Enter" && handleMascotClick()}
        style={{
          position: "fixed",
          bottom: 20,
          left: mascotLeft,
          zIndex: 1000,
          cursor: mascotState === "idle" ? "pointer" : "default",
          userSelect: "none",
          transition: mascotTransition,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Speech bubble — only shown while walking */}
        {mascotState === "idle" && (
          <div
            aria-hidden="true"
            style={{
              marginBottom: -117,
              
              animation: "bubblePop 0.3s cubic-bezier(0.25,0.1,0.25,1) both",
            }}
          >
            <div style={speechBubbleStyle}>
              Curious? Click me 😎
              {/* Triangle tail */}
              <span
                style={{
                  position: "absolute",
                  bottom: -7,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 0,
                  height: 0,
                  display: "block",
                  borderLeft: "7px solid transparent",
                  borderRight: "7px solid transparent",
                  borderTop: "7px solid #ffffff",
                }}
              />
            </div>
          </div>
        )}

        {/* Sprite — filter wrapper handles glow + idle float */}
        <div
          className={idleClass}
          style={{
            filter:
              mascotState === "idle"
                ? "drop-shadow(0 6px 16px rgba(0,168,182,0.4))"
                : "drop-shadow(0 2px 8px rgba(0,0,0,0.25))",
            transition: "filter 0.3s",
          }}
        >
          {/*
            Sprite div: background-position-x is stepped through 8 frames.
            ref (imgRef) used for direction flip via style.transform = scaleX(±1).
            Display size: 60px wide × 240px tall (1774÷8=221.75px/frame, scaled ×0.27).
            background-size: 480px 240px  (60×8=480, height proportional to 887).
          */}
          <div
            ref={imgRef}
            className={spriteClass}
            style={{
              width: 60,
              height: 240,
              backgroundImage: `url('${WALK_SPRITE}')`,
              backgroundSize: "480px 240px",
              backgroundRepeat: "no-repeat",
              backgroundPositionY: "0px",
              imageRendering: "pixelated",
              display: "block",
            }}
          />
        </div>
      </div>

      {/* ── Chat window ───────────────────────────────────────────────── */}
      {isOpen && (
        <div
          aria-label="Khanh Bot chat window"
          role="dialog"
          className="chat-slide-up"
          style={{
            position: "fixed",
            bottom: 100,
            left: 20,
            width: chatWidth,
            zIndex: 999,
            borderRadius: 20,
            boxShadow: "0 8px 40px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.15)",
            display: "flex",
            flexDirection: "column",
            background: "#ffffff",
            overflow: "hidden",
            maxHeight: mascotState === "minimized" ? 0 : 480,
            transition: "max-height 0.3s cubic-bezier(0.25,0.1,0.25,1)",
          }}
        >
          {/* Header */}
          <div
            style={{
              background:
                "linear-gradient(123deg, #011a1f 0%, #00a8b6 55%, #2176b0 100%)",
              padding: "11px 14px",
              display: "flex",
              alignItems: "center",
              gap: 9,
              flexShrink: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={AVATAR_ICON}
              alt=""
              aria-hidden="true"
              style={{
                width: 30,
                height: "auto",
                imageRendering: "pixelated",
                borderRadius: 6,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.04em",
                flex: 1,
                fontFamily: "var(--font-kanit), sans-serif",
              }}
            >
              Khanh Bot
            </span>
            {/* Minimize button */}
            <button
              onClick={() =>
                setMascotState((s) => (s === "minimized" ? "open" : "minimized"))
              }
              aria-label={
                mascotState === "minimized" ? "Expand chat" : "Minimize chat"
              }
              style={headerBtnStyle}
            >
              {mascotState === "minimized" ? "+" : "—"}
            </button>
            {/* Close button */}
            <button
              onClick={() => {
                setMascotState("idle");
                // Reset chat for next open
                setMessages([]);
                setSuggestions(INITIAL_SUGGESTIONS);
                setInput("");
              }}
              aria-label="Close chat"
              style={headerBtnStyle}
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            role="log"
            aria-live="polite"
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "14px 12px 6px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              maxHeight: 260,
            }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  display: "flex",
                  justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                  alignItems: "flex-end",
                  gap: 6,
                }}
              >
                {/* Bot avatar beside bot messages */}
                {msg.role === "bot" && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={AVATAR_ICON}
                    alt=""
                    aria-hidden="true"
                    style={{
                      width: 22,
                      imageRendering: "pixelated",
                      flexShrink: 0,
                      marginBottom: 2,
                    }}
                  />
                )}
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "8px 12px",
                    borderRadius:
                      msg.role === "user"
                        ? "16px 16px 4px 16px"
                        : "16px 16px 16px 4px",
                    background:
                      msg.role === "user"
                        ? "linear-gradient(123deg, #00a8b6, #2176b0)"
                        : "#f1f5f9",
                    color: msg.role === "user" ? "#fff" : "#1e293b",
                    fontSize: 13,
                    lineHeight: 1.6,
                    whiteSpace: "pre-line",
                    wordBreak: "break-word",
                    fontFamily: "var(--font-kanit), sans-serif",
                    fontWeight: 300,
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div
                aria-label="Khanh Bot is typing"
                style={{ display: "flex", alignItems: "flex-end", gap: 6 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={AVATAR_ICON}
                  alt=""
                  aria-hidden="true"
                  style={{ width: 22, imageRendering: "pixelated" }}
                />
                <div
                  style={{
                    background: "#f1f5f9",
                    borderRadius: "16px 16px 16px 4px",
                    padding: "10px 14px",
                    display: "flex",
                    gap: 5,
                    alignItems: "center",
                  }}
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      style={{
                        display: "inline-block",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#94a3b8",
                        animation: `typingPulse 1.2s ease-in-out ${i * 0.2}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Scroll anchor */}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestion chips */}
          {suggestions.length > 0 && mascotState === "open" && (
            <div
              style={{
                padding: "4px 10px 6px",
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
              }}
            >
              {suggestions.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  style={suggestionBtnStyle}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input row */}
          <div
            style={{
              padding: "8px 10px",
              borderTop: "1px solid #e2e8f0",
              display: "flex",
              gap: 7,
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your question..."
              aria-label="Type a message"
              style={{
                flex: 1,
                border: "1px solid #e2e8f0",
                borderRadius: 20,
                padding: "7px 13px",
                fontSize: 13,
                fontFamily: "var(--font-kanit), sans-serif",
                fontWeight: 300,
                outline: "none",
                background: "#f8fafc",
                color: "#1e293b",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#00a8b6")}
              onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || isTyping}
              aria-label="Send message"
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                border: "none",
                background:
                  !input.trim() || isTyping
                    ? "#e2e8f0"
                    : "linear-gradient(123deg, #00a8b6, #2176b0)",
                color: !input.trim() || isTyping ? "#94a3b8" : "#fff",
                cursor: !input.trim() || isTyping ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontSize: 14,
                transition: "background 0.2s, color 0.2s",
              }}
            >
              ▶
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// ── Style constants ────────────────────────────────────────────────────
const speechBubbleStyle: React.CSSProperties = {
  background: "#ffffff",
  borderRadius: 12,
  padding: "7px 13px",
  fontSize: 12,
  fontWeight: 600,
  color: "#0c0c0c",
  position: "relative",
  whiteSpace: "nowrap",
  boxShadow: "0 2px 14px rgba(0,0,0,0.18)",
  fontFamily: "var(--font-kanit), sans-serif",
  letterSpacing: "0.02em",
};

const headerBtnStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.15)",
  border: "none",
  color: "#fff",
  width: 26,
  height: 26,
  borderRadius: 7,
  cursor: "pointer",
  fontSize: 12,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  fontFamily: "var(--font-kanit), sans-serif",
  transition: "background 0.15s",
};

const suggestionBtnStyle: React.CSSProperties = {
  background: "rgba(0,168,182,0.07)",
  border: "1px solid rgba(0,168,182,0.28)",
  borderRadius: 20,
  padding: "4px 11px",
  fontSize: 11.5,
  color: "#0d6e7c",
  cursor: "pointer",
  fontFamily: "var(--font-kanit), sans-serif",
  fontWeight: 500,
  transition: "background 0.15s",
  whiteSpace: "nowrap",
  letterSpacing: "0.01em",
};
