"use client"
import React, { useEffect } from "react";
import Testimonial from "./Testimonial";

const AutoScroll = () => {
  useEffect(() => {
    const autoScrollContent = document.getElementById("autoScrollContent");
    if (autoScrollContent) {
      const clone = autoScrollContent.cloneNode(true) as HTMLElement;
      autoScrollContent.parentNode?.insertBefore(clone, autoScrollContent.nextSibling);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div className="flex">
        <ul
          id="autoScrollContent"
          className={`flex items-center text-wrap animate-marquee-left`}
          aria-hidden="true"
        >
          {[...Array(5)].map((_, index) => (
            <li className="" key={index}>
              <Testimonial />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { AutoScroll };
