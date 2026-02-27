const classes = {
  wrap: "py-16 lg:py-24",
  greeting: "text-sm font-medium text-default tracking-wide uppercase",
  name: "mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl",
  desc: "mt-4 text-lg text-gray-600 max-w-2xl",
};

const Hero = () => (
  <section className={classes.wrap}>
    <p className={classes.greeting}>안녕하세요</p>
    <h1 className={classes.name}>심다송</h1>
    <p className={classes.desc}>
      개발과 동료, 그리고 JS를 사랑하는 백엔드 개발자입니다.
    </p>
  </section>
);

export default Hero;
