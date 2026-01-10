import { useState } from "react";

interface Props {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details
      className=""
      open={isOpen}
      onToggle={(e) => setIsOpen(e.currentTarget.open)}
    >
      <summary className="">{question}</summary>
      <div className="">{answer}</div>
    </details>
  );
}
