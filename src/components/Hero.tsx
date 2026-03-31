const Hero = () => {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[40px] border-primary-foreground/20" />
        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[30px] border-primary-foreground/15" />
      </div>

      <div className="container relative mx-auto px-4 text-center">
        <p className="mb-3 text-sm font-medium tracking-wide text-primary-foreground/70">
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>
        <h1 className="mb-4 text-3xl font-bold leading-tight text-primary-foreground md:text-5xl">
          প্রতিদিনের প্রয়োজনীয় দু'আসমূহ
        </h1>
        <p className="mx-auto mb-8 max-w-lg text-base text-primary-foreground/80 md:text-lg">
          সহজে খুঁজুন, শিখুন এবং আমল করুন
        </p>
        <a
          href="#categories"
          className="inline-flex items-center gap-2 rounded-xl bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary shadow-lg transition-transform hover:scale-105"
        >
          দু'আ ব্রাউজ করুন
        </a>
      </div>
    </section>
  );
};

export default Hero;
