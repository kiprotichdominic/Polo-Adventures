"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { type ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsButton = BaseProps &
  Omit<ComponentProps<"button">, keyof BaseProps> & { href?: never };

type ButtonAsLink = BaseProps &
  Omit<ComponentProps<typeof Link>, keyof BaseProps> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<Variant, string> = {
  primary:  "bg-navy-700 text-white hover:bg-navy-600 active:bg-navy-800 shadow-sm",
  secondary:"bg-scarlet-600 text-white hover:bg-scarlet-500 active:bg-scarlet-700 shadow-sm",
  ghost:    "bg-transparent text-navy-700 hover:bg-navy-50 active:bg-navy-100",
  outline:  "border border-navy-700 text-navy-700 hover:bg-navy-50 active:bg-navy-100",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-[6px]",
  md: "px-6 py-3 text-sm rounded-[8px]",
  lg: "px-8 py-4 text-base rounded-[10px]",
};

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-navy-600 focus-visible:ring-offset-2 focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap";

export default function Button({
  variant = "primary",
  size = "md",
  className,
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = clsx(base, variantClasses[variant], sizeClasses[size], className);

  if (href) {
    const linkProps = props as Omit<ComponentProps<typeof Link>, "href" | "className">;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ComponentProps<"button">)}>
      {children}
    </button>
  );
}
