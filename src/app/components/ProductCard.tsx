import React from "react";

export const ProductCard = () => {
  return (
    <div className="flex-grow bg-suppport rounded-2xl mx-2 py-24">
      <div className="flex flex-col m-6">
        <h1 className="font-bold text-xl text-featureHeader">Management Apps</h1>
        <p className="mt-1">One platform. Many solutions</p>
        <button className=" border-primary border-2 rounded-3xl bg-transparent text-center font-bold text-sm mx-28 p-2 mt-5">
          Preview
        </button>
      </div>
    </div>
  );
};
