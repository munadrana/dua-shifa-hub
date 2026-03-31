import CategoryCard from "./CategoryCard";
import {
  Heart,
  Droplets,
  HandMetal,
  BookOpen,
  Landmark,
  Moon,
  Utensils,
  Plane,
  Stethoscope,
  Star,
  CloudRain,
  Sunrise,
  Users,
  Baby,
  Scale,
  Bed,
  Home,
  Gift,
  Compass,
  ShieldCheck,
} from "lucide-react";

const categories = [
  { title: "ঈমান অধ্যায়", duaCount: 8, Icon: Heart },
  { title: "তাহারাত (পবিত্রতা)", duaCount: 7, Icon: Droplets },
  { title: "ওযু অধ্যায়", duaCount: 5, Icon: HandMetal },
  { title: "আযান-ইকামাত অধ্যায়", duaCount: 6, Icon: BookOpen },
  { title: "মসজিদ অধ্যায়", duaCount: 4, Icon: Landmark },
  { title: "নামাজের মধ্যে দু'আ", duaCount: 17, Icon: Star },
  { title: "নামাজের শেষে দু'আ", duaCount: 9, Icon: Sunrise },
  { title: "নফল নামাজ অধ্যায়", duaCount: 4, Icon: Moon },
  { title: "রাব্বানা দু'আ অধ্যায়", duaCount: 14, Icon: ShieldCheck },
  { title: "সকাল সন্ধ্যার আমল", duaCount: 12, Icon: Compass },
  { title: "দুরুদ পাঠ অধ্যায়", duaCount: 6, Icon: Gift },
  { title: "ইস্তিগফার ও কৃতজ্ঞতা", duaCount: 8, Icon: Scale },
  { title: "খাবার ও পানীয় অধ্যায়", duaCount: 13, Icon: Utensils },
  { title: "ঘুম অধ্যায়", duaCount: 16, Icon: Bed },
  { title: "বাসস্থান অধ্যায়", duaCount: 6, Icon: Home },
  { title: "সফর অধ্যায়", duaCount: 14, Icon: Plane },
  { title: "পরিবার সম্পর্কিত", duaCount: 10, Icon: Users },
  { title: "সাজসজ্জা অধ্যায়", duaCount: 6, Icon: Baby },
  { title: "সামাজিকতা অধ্যায়", duaCount: 17, Icon: Users },
  { title: "বিভিন্ন পরিস্থিতিতে দু'আ", duaCount: 24, Icon: BookOpen },
  { title: "সুস্থতা-অসুস্থতা", duaCount: 12, Icon: Stethoscope },
  { title: "ঝড়-বৃষ্টি অধ্যায়", duaCount: 8, Icon: CloudRain },
  { title: "রমজান অধ্যায়", duaCount: 10, Icon: Moon },
  { title: "ঈদ অধ্যায়", duaCount: 5, Icon: Gift },
];

const CardGrid = () => {
  return (
    <section id="categories" className="container mx-auto px-4 py-12 md:py-16">
      <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
        দু'আর ক্যাটাগরিসমূহ
      </h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {dataCategories.map((cat, i) => (
          <CategoryCard
            key={cat.slug}
            number={i + 1}
            title={cat.title}
            duaCount={cat.duaCount}
            Icon={iconMap[cat.slug] || BookOpen}
            slug={cat.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default CardGrid;
