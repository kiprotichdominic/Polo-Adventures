import { clsx } from "clsx";

type Variant = "navy" | "scarlet" | "lime" | "earth" | "white";

type BadgeProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

const variants: Record<Variant, string> = {
  navy:    "bg-navy-100 text-navy-800",
  scarlet: "bg-scarlet-100 text-scarlet-700",
  lime:    "bg-lime-100 text-lime-800",
  earth:   "bg-earth-100 text-earth-700",
  white:   "bg-white/15 text-white backdrop-blur-sm",
};

export default function Badge({ children, variant = "navy", className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
