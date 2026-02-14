import { clsx } from "clsx";
import { FaCheck } from "react-icons/fa";
import type { ElementType } from "react";

interface CheckListItemProps {
  text: string;
  className?: string;
  Icon?: ElementType;
  iconColor?: string;
  as?: "li" | "div";
  unstyled?: boolean;
}

export default function CheckListItem({
  text,
  className,
  Icon = FaCheck,
  iconColor = "text-accent",
  as: Component = "li",
  unstyled = false,
}: CheckListItemProps) {
  return (
    <Component
      className={clsx(!unstyled && "rounded-2xl bg-white px-4 py-2", className)}
    >
      <span className="inline-block text-left">
        <Icon
          aria-hidden="true"
          className={clsx("mr-2 inline-block", iconColor)}
        />
        {text}
      </span>
    </Component>
  );
}
