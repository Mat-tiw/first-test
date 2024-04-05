import React, { ReactNode, useEffect, useRef } from "react";

interface FasterMarqueeProps {
  direction?: "right" | "left" | "up" | "down";
  children: ReactNode;
}

const FasterMarquee: React.FC<FasterMarqueeProps> = ({
  direction = "left",
  children,
}) => {
  const ulRef = useRef<HTMLUListElement>(null);
  if (React.Children.count(children) < 2) {
    children = Array.from({ length: 5 }, (_, i) => (
      <li key={i}>{children}</li>
    ));
  }
  let layoutClass = "flex items-center";
  if (direction === "up" || direction === "down") {
    layoutClass = "flex flex-col";
  }

  useEffect(() => {
    if (ulRef.current) {
      const autoScrollContent = ulRef.current;
      const clone = autoScrollContent.cloneNode(true) as HTMLElement;
      autoScrollContent.parentNode?.insertBefore(
        clone,
        autoScrollContent.nextSibling
      );
    }
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div className="flex">
        <ul
          ref={ulRef}
          className={`${layoutClass} text-wrap animate-marquee-${direction}`}
          aria-hidden="true"
        >
          {children}
        </ul>
      </div>
    </div>
  );
};

FasterMarquee.displayName = 'FasterMarquee';
export {FasterMarquee}
