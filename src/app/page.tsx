"use client";
import Banner from "./components/Banner";
import React, { useState } from "react";
import Image from "next/image";
import UserCard from "./components/UserCard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Footer from "./components/Footer";
import { FeatureBox } from "./components/FeatureBox";
import { ProductPreview } from "./components/ProductPreview";
import { ProductCard } from "./components/ProductCard";
import { FasterMarquee } from "./components/FasterMarquee";
import Testimonial from "./components/Testimonial";
import Divider from "@mui/material/Divider";
export default function Home() {
  const [expand, setExpand] = useState<boolean>(false);
  const handleExpand = () => {
    if (expand) setExpand(false);
    else {
      setExpand(true);
    }
  };
  return (
    <React.Fragment>
      <div className="sm:mx-5 md:mx-10 lg:mx-32">
        <Banner />
      </div>
      <div className="flex flex-col items-center text-center text-primary overflow-hidden min-h-screen">
        <div className="flex flex-col items-center">
          <h1 className="2xl:mx-[30rem] lg:mx-80 md:mx-2 sm:mx-10 mx-10 text-5xl mobile:text-4xl font-black">
            Carft Connections For <br />
            Your Business
          </h1>
          <p className="2xl:mx-[30rem] lg:mx-80 md:mx-10 sm:mx-5 mobile:mx-5 text-featureSubHeader mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
          <div className="mt-10 sm:mx-5 mobile:mx-2">
            <Image
              src="/heroImg.png"
              alt="hero image"
              width={900}
              height={300}
            />
          </div>
        </div>
        <h1 className="2xl:mx-[30rem] lg:mx-80 md:mx-2 sm:mx-1 text-5xl mobile:text-4xl font-black sm:mt-36 mobile:mt-20">
          Feature
        </h1>
        <p className="2xl:mx-[30rem] lg:mx-80 md:mx-10 sm:mx-5 mobile:mx-5 text-featureSubHeader mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>
        <div className="mobile:hidden w-full justify-center">
          <div className="flex flex-col mt-10 md:mx-10 lg:mx-50 xl:mx-72 2xl:mx-96 font-bold text-black">
            <div className="flex flex-row justify-center w-full">
              <FeatureBox text="Feature 1" size={0} />
              <FeatureBox text="Feature 2" size={0} />
              <FeatureBox text="Feature 3" size={2} />
            </div>
            <div className="flex flex-row mt-1 justify-center w-full">
              <FeatureBox text="Feature 4" size={0} />
              <FeatureBox text="Feature 5" size={1} />
            </div>
          </div>
        </div>
        <div className="flex flex-row overflow-x-scroll sm:hidden">
          <FasterMarquee direction="right">
            <FeatureBox text="Feature 1" size={0} />
            <FeatureBox text="Feature 2" size={0} />
            <FeatureBox text="Feature 3" size={0} />
            <FeatureBox text="Feature 4" size={0} />
            <FeatureBox text="Feature 5" size={0} />
          </FasterMarquee>
        </div>
        <div className="">
          <div className="mt-40">
            <h1 className="2xl:mx-[30rem] lg:mx-80 md:mx-2 sm:mx-1 text-5xl mobile:text-4xl font-black">
              Product
            </h1>
            <p className="2xl:mx-[30rem] lg:mx-80 md:mx-10 sm:mx-5 mobile:mx-5 text-featureSubHeader mt-10">
              One platform. Many solutions
            </p>
          </div>
          <div className="lg:flex flex-row overflow-x-scroll mt-10 w-full mobile:hidden sm:hidden justify-center xl:mx-5 xl:overflow-hidden">
            <ProductPreview />
            <ProductPreview />
          </div>
          <div className="lg:hidden w-full flex-col overflow-x-scroll justify-center grid mt-10">
            <ProductPreview />
            <div className="mx-2 mb-2">
              <Divider>
                <p className="text-xl font-bold" onClick={() => handleExpand()}>
                  Expand
                </p>
              </Divider>
            </div>
            {expand === true ? (
              <>
                <ProductPreview />
                <ProductPreview />
              </>
            ) : (
              ""
            )}
          </div>
          <div className="hidden desktop-min:flex desktop-min:flex-row mt-2 items-center mx-96 ">
            {[...Array(3)].map((_, index) => (
              <ProductCard key={index} />
            ))}
          </div>
          <div className="desktop-min:hidden">
            <FasterMarquee direction="left">
              {[...Array(3)].map((_, index) => (
                <ProductCard key={index} />
              ))}
            </FasterMarquee>
          </div>
        </div>
        <div className="mt-44">
          <h1 className="text-2xl font-bold text-featureHeader ">
            Who is it for ?
          </h1>

          <p className="xl:mx-[30rem] lg:mx-52 md:mx-10 sm:mx-5 mx-5 text-featureSubHeader mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
        </div>
        <div className="mt-2">
          <div className="hidden desktop-min:flex desktop-min:flex-row justify-center mt-10">
            {[...Array(5)].map((_, index) => (
              <UserCard key={index} />
            ))}
          </div>
          <div className="desktop-min:hidden mt-10 flex flex-row">
            <FasterMarquee direction="right">
              {[...Array(5)].map((_, index) => (
                <UserCard key={index} />
              ))}
            </FasterMarquee>
          </div>
        </div>
        <div className="mt-44">
          <h1 className="text-3xl font-bold text-featureHeader">
            What people say about us
          </h1>
          <div className="hidden desktop-min:flex desktop-min:flex-col">
            <div className="mt-10">
              <FasterMarquee direction="left">
                <Testimonial />
                <Testimonial />
                <Testimonial />
                <Testimonial />
              </FasterMarquee>
            </div>
            <div className="mt-2">
              <FasterMarquee direction="right">
                <Testimonial />
              </FasterMarquee>
            </div>
          </div>
          <div className="desktop-min:hidden h-40 mt-10 overflow-y-auto">
            <Testimonial />
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </div>
        </div>
        <div className="mt-40">
          <h1 className="font-bold text-3xl">1000 Users Interest</h1>
          <br />
          <h1 className="font-black text-5xl italic">YOU ARE</h1>
          <div className="flex flex-row mt-5">
            <h1 className="font-bold text-black text-4xl mt-1">In</h1>
            <div className="bg-primary rounded-[2rem] px-5 py-3 flex flex-row mx-2">
              <div className="flex flex-row rounded-full border-2 border-white">
                <KeyboardArrowRightIcon className="text-white" />
              </div>
              <p className="text-white ml-2">Yes, I am</p>
            </div>
            <h1 className="font-bold text-black text-4xl mt-1">terest.</h1>
          </div>
        </div>
        <div className="mt-40 bg-newBox rounded-3xl mx-28 text-left flex flex-grow mobile:text-center sm:text-center lg:text-left">
          <div className="m-20">
            <h1 className="font-bold text-4xl text-featureHeader">
              Join our newsletter
            </h1>
            <div className="flex lg:flex-row sm:flex-col mobile:flex-col mt-5 text-featureSubHeader">
              <p>
                Join our newsletter for exclusive insights,announcements,
                <br />
                and special offers delivered directly to your inbox.
              </p>
              <div className="flex lg:flex-row flex-col lg:ml-16 xl:ml-36 mobile:mt-10 sm:mt-10 lg:mt-0 items-center">
                <input
                  className="p-2 mobile:h-10 sm:h-10 xl:h-auto rounded-xl lg:placeholder:text-left sm:placeholder:text-center mobile:placeholder:text-center placeholder:text-placeholder outline-none"
                  type="text"
                  placeholder="olivia@untitleui.com"
                />
                <button className="ml-2 w-20 text-sm mobile:mt-2 sm:mt-2 lg:mt-0 text-center sm:h-10 xl:h-auto mobile:h-10 text-white bg-primary p-2 rounded-xl">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-44">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
