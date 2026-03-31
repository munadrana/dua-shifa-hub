import { ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  number: number;
  title: string;
  duaCount: number;
  Icon: LucideIcon;
  slug: string;
}

const CategoryCard = ({ number, title, duaCount, Icon, slug }: CategoryCardProps) => {
  return (
    <Link to={`/category/${slug}`} className="group flex w-full items-center gap-3 rounded-xl border bg-card p-4 text-left transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
      style={{ boxShadow: "var(--card-shadow)" }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow-hover)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow)")}
    >
      {/* Number badge */}
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
        {number}
      </span>

      {/* Icon */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
        <Icon size={22} />
      </div>

      {/* Text */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-semibold text-card-foreground">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground">মোট দু'আ: {duaCount} টি</p>
      </div>

      {/* Arrow */}
      <ChevronRight
        size={18}
        className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
      />
    </button>
  );
};

export default CategoryCard;
