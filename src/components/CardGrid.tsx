import CategoryCard from "./CategoryCard";
import {
  Heart, Droplets, HandMetal, BookOpen, Landmark, Moon,
  Utensils, Plane, Stethoscope, Star, CloudRain, Sunrise,
  Users, Baby, Scale, Bed, Home, Gift, Compass, ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { categories } from "@/data/duas";

const iconMap: Record<string, LucideIcon> = {
  iman: Heart, taharat: Droplets, wudu: HandMetal, azan: BookOpen,
  masjid: Landmark, "namaz-moddhe": Star, "namaz-sheshe": Sunrise,
  "nofol-namaz": Moon, rabbana: ShieldCheck, "sokal-sondha": Compass,
  durud: Gift, istighfar: Scale, khabar: Utensils, ghum: Bed,
  basosthan: Home, sofor: Plane, poribar: Users, sajsojja: Baby,
  samajikota: Users, bibhinno: BookOpen, sustho: Stethoscope,
  "jhor-brishti": CloudRain, romjan: Moon, eid: Gift,
};

const CardGrid = () => {
  return (
    <section id="categories" className="container mx-auto px-4 py-12 md:py-16">
      <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
        দু'আর ক্যাটাগরিসমূহ
      </h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
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
