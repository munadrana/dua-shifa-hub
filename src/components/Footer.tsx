import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto grid gap-8 px-4 py-10 sm:grid-cols-3">
        {/* About */}
        <div>
          <img src={logo} alt="Dua Collection Logo" className="mb-3 h-16 w-auto" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Dua Collection একটি ইসলামিক দু'আ সংকলন প্ল্যাটফর্ম। এখানে আপনি প্রতিদিনের প্রয়োজনীয় দু'আ সহজে খুঁজে পাবেন এবং আমল করতে পারবেন।
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-3 text-sm font-bold text-foreground">দ্রুত লিংক</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["হোম", "ক্যাটাগরি", "প্রিয় দু'আ", "সম্পর্কে"].map((l) => (
              <li key={l}>
                <a href="#" className="transition-colors hover:text-primary">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-3 text-sm font-bold text-foreground">যোগাযোগ</h4>
          <p className="text-sm text-muted-foreground">
            ইমেইল: info@duacollection.com
          </p>
          <div className="mt-3 flex gap-3">
            {["Facebook", "Twitter", "YouTube"].map((s) => (
              <a
                key={s}
                href="#"
                className="rounded-lg bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © 2026 Dua Collection. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
