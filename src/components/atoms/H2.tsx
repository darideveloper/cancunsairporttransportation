import type { ReactNode } from "react";
import clsx from "clsx";

interface H2Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function H2({ children, className, id, ...props }: H2Props) {
  return (
    <h2 className={clsx("text-2xl font-bold", className)} id={id} {...props}>
      {children}
    </h2>
  );
}
