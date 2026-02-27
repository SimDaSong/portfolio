"use client";

import { useEffect, useState } from "react";
import config from "@/data/config";

const sections = [
  { id: "about", label: "About" },
  { id: "career", label: "Career" },
  { id: "awards", label: "Awards" },
  { id: "project", label: "Project" },
  { id: "others", label: "Others" },
];

const Nav = () => {
  const [activeId, setActiveId] = useState("");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved === "dark" || (!saved && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-sm border-b"
      style={{ backgroundColor: "var(--bg-nav)", borderColor: "var(--border-color)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between h-14">
        <a href="/" className="text-lg font-bold text-default">
          {config.name}
        </a>
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex gap-6">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-sm transition-colors"
                style={{
                  color: activeId === s.id ? "var(--color-default)" : "var(--text-muted)",
                  fontWeight: activeId === s.id ? 600 : 400,
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
          <button
            onClick={toggleDark}
            className="w-8 h-8 flex items-center justify-center rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="다크 모드 전환"
          >
            {dark ? "\u2600\uFE0F" : "\u{1F319}"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
