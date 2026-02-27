const Hero = () => (
  <section className="py-16 lg:py-24">
    <p className="text-sm font-medium text-default tracking-wide uppercase">안녕하세요</p>
    <h1
      className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl"
      style={{ color: "var(--text-primary)" }}
    >
      심다송
    </h1>
    <p className="mt-4 text-lg max-w-2xl" style={{ color: "var(--text-secondary)" }}>
      개발과 동료, 그리고 JS를 사랑하는 백엔드 개발자입니다.
    </p>
  </section>
);

export default Hero;
