import React from "react";

interface FeatureProps {
  text: string;
  size?: number;
}

const FeatureBox: React.FC<FeatureProps> = ({ text, size = 0 }) => {
  const updateSize = (size: number | undefined): string => {
    if (size === 1) return "sm:w-[62vw] lg:w-[45vw] mobile:w-[50px]";
    if (size === 2) return "sm:w-[40vw] lg:w-[30vw] mobile:w-[50px]";
    else return "sm:w-[20vw] lg:w-[14vw] mobile:w-[400px]";
  };

  return (
    <div className={`flex items-center justify-center rounded-3xl bg-suppport ${updateSize(size)} h-[18rem] m-2`}>
      <h1 className="lg:text-3xl sm:text-2xl xl:text-4xl text-featureHeader">{text}</h1>
    </div>
  );
};

FeatureBox.displayName = 'FeatureBox';

export { FeatureBox };
