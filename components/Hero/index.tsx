import config from "@/data/config";

const Hero = () => (
  <section className="py-16 lg:py-24">
    <p className="text-sm font-medium text-default tracking-wide uppercase animate-fade-up">
      {config.greeting}
    </p>
    <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
      <span className="gradient-text">{config.name}</span>
    </h1>
    <p
      className="mt-4 text-lg max-w-2xl animate-fade-up"
      style={{ color: "var(--text-secondary)", animationDelay: "0.5s" }}
    >
      {config.description}
    </p>
  </section>
);

export default Hero;
