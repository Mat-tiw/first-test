import React from "react";

interface FeatureProps {
  text: string;
  size?: number;
}

const FeatureBox: React.FC<FeatureProps> = ({ text, size = 0 }) => {
  const updateSize = (size: number | undefined): string => {
    if (size === 1) return "w-[45vw]";
    if (size === 2) return "w-[30vw]";
    else return "w-[14vw]";
  };

  return (
    <div className={`flex items-center justify-center rounded-3xl bg-suppport ${updateSize(size)} h-[18rem] m-2`}>
      <h1 className="text-4xl text-featureHeader">{text}</h1>
    </div>
  );
};

FeatureBox.displayName = 'FeatureBox';

export { FeatureBox };
