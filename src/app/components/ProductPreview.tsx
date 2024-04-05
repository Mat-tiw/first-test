import React from "react";
import Image from "next/image";
export const ProductPreview = () => {
  return (
    <div className="xl:rounded-xl sm:rounded-3xl mobile:rounded-3xl mobile:w-80 sm:w-96 lg:w-[30rem] xl:w-[36rem] bg-suppport m-2 mobile:m-5">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col text-left m-6">
          <h1 className="font-bold text-xl text-featureHeader">Management Apps</h1>
          <p className="mt-1">One platform. Many solutions</p>
        </div>
        <button className=" border-primary border-2 rounded-3xl bg-transparent text-center font-bold text-sm mr-8 px-6 mt-5 lg:mb-10 mobile:mb-24 sm:mb-16">
          Preview
        </button>
      </div>
      <div className="flex flex-row relative mt-10 overflow-hidden">
        <div className="absolute z-10 mt-10 mr-10 translate-y-8 xl:-translate-x-52 sm:-translate-x-32 mobile:-translate-x-20">
          <Image
            className="rounded-xl"
            src={"/heroImg.png"}
            alt="hero image"
            width={490}
            height={200}
          />
        </div>
        <div className="relative brightness-75 ml-2">
          <Image
            className="rounded-xl"
            src={"/heroImg.png"}
            alt="hero image"
            width={900}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};
