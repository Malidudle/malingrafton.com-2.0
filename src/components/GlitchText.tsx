"use client";

import { useEffect, useRef } from "react";

interface GlitchTextProps {
  text: string;
  subText?: string;
  className?: string;
  subTextClassName?: string;
}

export default function GlitchText({
  text,
  subText,
  className = "",
  subTextClassName = "",
}: GlitchTextProps) {
  const textRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const element = textRef.current;
    const subElement = subTextRef.current;
    if (!element) return;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval: NodeJS.Timeout | null = null;
    let subInterval: NodeJS.Timeout | null = null;
    let iteration = 0;
    let subIteration = 0;

    interval = setInterval(() => {
      element.innerText = text
        .split("")
        .map((_, index) => {
          if (index < iteration) {
            return text[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= text.length) {
        if (interval) clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    if (subText && subElement) {
      subInterval = setInterval(() => {
        subElement.innerText = subText
          .split("")
          .map((_, index) => {
            if (index < subIteration) {
              return subText[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (subIteration >= subText.length) {
          if (subInterval) clearInterval(subInterval);
        }

        subIteration += 1 / 3;
      }, 30);
    }

    return () => {
      if (interval) clearInterval(interval);
      if (subInterval) clearInterval(subInterval);
    };
  }, [text, subText]);

  return (
    <>
      <h1 ref={textRef} className={className}>
        {text}
      </h1>
      {subText && (
        <h2 ref={subTextRef} className={subTextClassName}>
          {subText}
        </h2>
      )}
    </>
  );
}
