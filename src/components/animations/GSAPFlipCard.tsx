"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

interface Props {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}

export default function GSAPFlipCard({ front, back, className = "" }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    const card = cardRef.current;
    if (!card) return;

    const state = Flip.getState(card);
    setFlipped((f) => !f);

    Flip.from(state, {
      duration: 0.7,
      ease: "expo.inOut",
      scale: true,
      onComplete: () => {
        gsap.fromTo(
          card.querySelector(".flip-content"),
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.3 }
        );
      },
    });
  };

  return (
    <div
      ref={cardRef}
      onClick={handleFlip}
      className={`relative cursor-pointer select-none ${className}`}
      style={{ perspective: "1000px" }}
    >
      <div className="flip-content">
        {flipped ? back : front}
      </div>
    </div>
  );
}
