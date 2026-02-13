import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { clsx } from "clsx";

type BaseProps = {
  className?: string;
  variant?:
    | "orange"
    | "blue"
    | "blueGhost"
    | "black"
    | "gray"
    | "grayDark"
    | "orangeGhost"
    | "blackGhost";
  ariaLabel?: string;
  children?: ReactNode;
};

type AnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
    type?: "submit" | "button" | "reset";
  };

export type ButtonCtaProps = AnchorProps | ButtonProps;

export default function ButtonCta({
  variant = "orange",
  className,
  ariaLabel,
  children,
  ...props
}: ButtonCtaProps) {
  const variants = {
    orange: "bg-accent text-black",
    blue: "bg-blue text-white",
    blueGhost: "bg-blue/10 border border-blue text-blue",
    black: "bg-black text-white",
    gray: "bg-gray text-white",
    grayDark: "bg-gray-dark text-white",
    orangeGhost: "bg-accent/10 border border-orange text-accent",
    blackGhost: "bg-black/5 border border-black text-black",
  };

  const sharedClasses = clsx(
    className,
    "btn inline-block px-6 py-5 rounded-lg text-sm text-center whitespace-nowrap transition-transform hover:scale-[102%] cursor-pointer duration-300",
    variants[variant],
  );

  if ("href" in props && props.href) {
    const { target = "_self", rel, ...anchorProps } = props as AnchorProps;
    const computedRel =
      rel || (target === "_blank" ? "noopener noreferrer" : undefined);
    return (
      <a
        className={sharedClasses}
        aria-label={ariaLabel}
        target={target}
        rel={computedRel}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonProps;
  return (
    <button
      type={type}
      className={sharedClasses}
      aria-label={ariaLabel}
      {...(buttonProps as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
