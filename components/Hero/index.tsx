import config from "@/data/config";

const Hero = () => (
  <section className="py-16 lg:py-24">
    <p className="text-sm font-medium text-default tracking-wide uppercase">{config.greeting}</p>
    <h1
      className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl"
      style={{ color: "var(--text-primary)" }}
    >
      {config.name}
    </h1>
    <p className="mt-4 text-lg max-w-2xl" style={{ color: "var(--text-secondary)" }}>
      {config.description}
    </p>
  </section>
);

export default Hero;
