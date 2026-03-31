import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronRight, ChevronLeft, Heart, Share2, Copy, Volume2, ArrowLeft } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDuaById, getDuasByCategory, getCategoryBySlug } from "@/data/duas";
import { toast } from "sonner";

const DuaDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dua = getDuaById(Number(id));
  const [isFav, setIsFav] = useState(false);

  if (!dua) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground">দু'আ পাওয়া যায়নি</h1>
            <Link to="/" className="mt-4 inline-block text-primary hover:underline">হোমে ফিরে যান</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const category = getCategoryBySlug(dua.categorySlug);
  const categoryDuas = getDuasByCategory(dua.categorySlug);
  const currentIndex = categoryDuas.findIndex((d) => d.id === dua.id);
  const prevDua = currentIndex > 0 ? categoryDuas[currentIndex - 1] : null;
  const nextDua = currentIndex < categoryDuas.length - 1 ? categoryDuas[currentIndex + 1] : null;

  const handleCopy = () => {
    const text = `${dua.arabic}\n\n${dua.pronunciation}\n\n${dua.meaning}\n\nরেফারেন্স: ${dua.reference}`;
    navigator.clipboard.writeText(text).then(() => toast.success("কপি করা হয়েছে!"));
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: dua.title, text: `${dua.arabic}\n${dua.meaning}`, url: window.location.href });
    } else {
      handleCopy();
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pb-20 md:pb-0">
        {/* Breadcrumb */}
        <div className="border-b bg-secondary/50">
          <nav className="container mx-auto px-4 py-3" aria-label="breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
              <li><Link to="/" className="transition-colors hover:text-primary">হোম</Link></li>
              <li><ChevronRight className="h-3.5 w-3.5" /></li>
              <li><Link to={`/category/${dua.categorySlug}`} className="transition-colors hover:text-primary">{category?.title}</Link></li>
              <li><ChevronRight className="h-3.5 w-3.5" /></li>
              <li><span className="font-medium text-foreground" aria-current="page">{dua.title}</span></li>
            </ol>
          </nav>
        </div>

        {/* Title Bar */}
        <section className="container mx-auto px-4 py-6 md:py-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-xl font-bold text-foreground md:text-2xl">{dua.title}</h1>
              <p className="mt-1 text-sm text-muted-foreground">{category?.title}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsFav(!isFav)}
                className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-colors ${
                  isFav ? "border-red-300 bg-red-50 text-red-500 dark:border-red-800 dark:bg-red-950" : "text-muted-foreground hover:bg-secondary hover:text-red-500"
                }`}
                aria-label="প্রিয় তালিকা"
              >
                <Heart size={18} fill={isFav ? "currentColor" : "none"} />
              </button>
              <button
                onClick={handleShare}
                className="flex h-9 w-9 items-center justify-center rounded-lg border text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                aria-label="শেয়ার করুন"
              >
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* Dua Content */}
        <section className="container mx-auto px-4 pb-8">
          <article className="overflow-hidden rounded-xl border bg-card">
            {/* Arabic */}
            <div className="border-b bg-primary/5 px-6 py-8 md:px-10 md:py-12">
              <p className="text-center text-2xl leading-loose text-foreground md:text-3xl lg:text-4xl" dir="rtl" lang="ar" style={{ fontFamily: "'Noto Naskh Arabic', 'Amiri', serif", lineHeight: 2.2 }}>
                {dua.arabic}
              </p>
            </div>

            {/* Pronunciation */}
            <div className="border-b px-6 py-5 md:px-10">
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">উচ্চারণ</h2>
              <p className="text-sm leading-relaxed text-foreground md:text-base">{dua.pronunciation}</p>
            </div>

            {/* Meaning */}
            <div className="border-b px-6 py-5 md:px-10">
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">অর্থ</h2>
              <p className="text-sm leading-relaxed text-foreground md:text-base">{dua.meaning}</p>
            </div>

            {/* Reference */}
            <div className="px-6 py-5 md:px-10">
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">রেফারেন্স</h2>
              <p className="text-sm text-muted-foreground">{dua.reference}</p>
            </div>
          </article>

          {/* Action Buttons (desktop) */}
          <div className="mt-4 hidden gap-3 md:flex">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 rounded-lg border bg-card px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              <Copy size={16} /> কপি করুন
            </button>
            <button className="flex items-center gap-2 rounded-lg border bg-card px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary">
              <Volume2 size={16} /> অডিও শুনুন
            </button>
          </div>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-between gap-3">
            {prevDua ? (
              <button
                onClick={() => navigate(`/dua/${prevDua.id}`)}
                className="flex items-center gap-2 rounded-lg border bg-card px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                <ChevronLeft size={16} /> পূর্ববর্তী
              </button>
            ) : <div />}

            <Link
              to={`/category/${dua.categorySlug}`}
              className="flex items-center gap-2 rounded-lg border bg-card px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              <ArrowLeft size={16} /> ক্যাটাগরিতে ফিরুন
            </Link>

            {nextDua ? (
              <button
                onClick={() => navigate(`/dua/${nextDua.id}`)}
                className="flex items-center gap-2 rounded-lg border bg-card px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                পরবর্তী <ChevronRight size={16} />
              </button>
            ) : <div />}
          </div>
        </section>
      </main>

      {/* Sticky Mobile Actions */}
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-around border-t bg-card/95 px-4 py-3 backdrop-blur-md md:hidden">
        <button onClick={() => setIsFav(!isFav)} className={`flex flex-col items-center gap-1 text-xs ${isFav ? "text-red-500" : "text-muted-foreground"}`}>
          <Heart size={20} fill={isFav ? "currentColor" : "none"} />
          প্রিয়
        </button>
        <button className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
          <Volume2 size={20} />
          অডিও
        </button>
        <button onClick={handleCopy} className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
          <Copy size={20} />
          কপি
        </button>
        <button onClick={handleShare} className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
          <Share2 size={20} />
          শেয়ার
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default DuaDetailPage;
