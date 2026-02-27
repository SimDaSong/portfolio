"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "career", label: "Career" },
  { id: "awards", label: "Awards" },
  { id: "project", label: "Project" },
  { id: "others", label: "Others" },
];

const classes = {
  nav: "sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200",
  inner: "max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between h-14",
  name: "text-lg font-bold text-default",
  links: "hidden sm:flex gap-6",
  link: "text-sm transition-colors",
  active: "text-default font-semibold",
  inactive: "text-gray-600 hover:text-default",
};

const Nav = () => {
  const [activeId, setActiveId] = useState("");

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
    <nav className={classes.nav}>
      <div className={classes.inner}>
        <a href="/" className={classes.name}>
          심다송
        </a>
        <div className={classes.links}>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`${classes.link} ${activeId === s.id ? classes.active : classes.inactive}`}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
