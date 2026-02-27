const links = [
  { label: "GitHub", href: "https://github.com/SimDaSong" },
  { label: "Email", href: "mailto:song58449@gmail.com" },
  { label: "Velog", href: "https://velog.io/@software" },
];

const Footer = () => (
  <footer className="py-8 mt-16 border-t" style={{ borderColor: "var(--border-color)" }}>
    <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm" style={{ color: "var(--text-muted)" }}>
        &copy; {new Date().getFullYear()} 심다송
      </p>
      <div className="flex gap-4">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-default transition-colors"
            style={{ color: "var(--text-muted)" }}
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
