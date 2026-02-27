const links = [
  { label: "GitHub", href: "https://github.com/SimDaSong" },
  { label: "Email", href: "mailto:song58449@gmail.com" },
  { label: "Velog", href: "https://velog.io/@software" },
];

const classes = {
  footer: "border-t border-gray-200 py-8 mt-16",
  inner: "max-w-7xl mx-auto px-6 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4",
  copy: "text-sm text-gray-500",
  links: "flex gap-4",
  link: "text-sm text-gray-500 hover:text-default transition-colors",
};

const Footer = () => (
  <footer className={classes.footer}>
    <div className={classes.inner}>
      <p className={classes.copy}>&copy; {new Date().getFullYear()} 심다송</p>
      <div className={classes.links}>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
