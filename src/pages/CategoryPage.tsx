import { useParams, Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { ChevronRight, Search, Heart, Volume2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCategoryBySlug, getDuasByCategory } from "@/data/duas";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoryBySlug(slug || "");
  const allDuas = getDuasByCategory(slug || "");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "short" | "long">("all");

  const filteredDuas = useMemo(() => {
    let result = allDuas;
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (d) =>
          d.title.toLowerCase().includes(q) ||
          d.arabic.includes(search) ||
          d.meaning.toLowerCase().includes(q)
      );
    }
    if (filter === "short") result = result.filter((d) => d.arabic.length < 80);
    if (filter === "long") result = result.filter((d) => d.arabic.length >= 80);
    return result;
  }, [allDuas, search, filter]);

  if (!category) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground">ক্যাটাগরি পাওয়া যায়নি</h1>
            <Link to="/" className="mt-4 inline-block text-primary hover:underline">
              হোমে ফিরে যান
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b bg-secondary/50">
          <nav className="container mx-auto px-4 py-3" aria-label="breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="transition-colors hover:text-primary">হোম</Link>
              </li>
              <li><ChevronRight className="h-3.5 w-3.5" /></li>
              <li>
                <Link to="/#categories" className="transition-colors hover:text-primary">ক্যাটাগরি</Link>
              </li>
              <li><ChevronRight className="h-3.5 w-3.5" /></li>
              <li>
                <span className="font-medium text-foreground" aria-current="page">{category.title}</span>
              </li>
            </ol>
          </nav>
        </div>

        {/* Title Section */}
        <section className="container mx-auto px-4 py-8 md:py-10">
          <h1 className="text-2xl font-bold text-foreground md:text-3xl">
            {category.title} এর দু'আসমূহ
          </h1>
          <p className="mt-2 text-muted-foreground">
            মোট {filteredDuas.length} টি দু'আ পাওয়া গেছে
          </p>
        </section>

        {/* Search & Filter */}
        <section className="container mx-auto px-4 pb-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="এই ক্যাটাগরির দু'আ খুঁজুন..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-10 w-full rounded-lg border bg-card pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div className="flex gap-2">
              {(["all", "short", "long"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                    filter === f
                      ? "bg-primary text-primary-foreground"
                      : "border bg-card text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {f === "all" ? "সব দু'আ" : f === "short" ? "ছোট দু'আ" : "বড় দু'আ"}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Dua List */}
        <section className="container mx-auto px-4 pb-12">
          {filteredDuas.length === 0 ? (
            <p className="py-8 text-center text-muted-foreground">কোনো দু'আ পাওয়া যায়নি।</p>
          ) : (
            <div className="overflow-hidden rounded-xl border bg-card">
              {filteredDuas.map((dua, i) => (
                <Link
                  key={dua.id}
                  to={`/dua/${dua.id}`}
                  className="group flex items-center gap-3 border-b px-4 py-3 transition-colors last:border-b-0 hover:bg-secondary/60 sm:gap-4 sm:px-5 sm:py-4"
                >
                  {/* Serial */}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {i + 1}
                  </span>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <h2 className="text-sm font-semibold text-card-foreground sm:text-base">
                      {dua.title}
                    </h2>
                    <p className="mt-0.5 truncate font-arabic text-xs text-muted-foreground sm:text-sm" dir="rtl">
                      {dua.arabic}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 items-center gap-2">
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="hidden rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-red-500 sm:flex"
                      aria-label="প্রিয় তালিকায় যোগ করুন"
                    >
                      <Heart size={16} />
                    </button>
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="hidden rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary sm:flex"
                      aria-label="অডিও শুনুন"
                    >
                      <Volume2 size={16} />
                    </button>
                    <ChevronRight
                      size={16}
                      className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
                    />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
