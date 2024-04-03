"use client";
import Banner from "./components/Banner";
import React, { useEffect } from "react";
import Image from "next/image";
import UserCard from "./components/UserCard";
import UserComment from "./components/Testimonial";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Footer from "./components/Footer";
import { FeatureBox } from "./components/FeatureBox";
import { ProductPreview } from "./components/ProductPreview";
import { ProductCard } from "./components/ProductCard";
import { AutoScroll } from "./components/AutoScroll";
import { AutoScrollRight } from "./components/AutoScrollRight";
export default function Home() {
  return (
    <React.Fragment>
      <Banner />
      <div className="flex flex-col items-center text-center text-primary overflow-hidden min-h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-black">
            Carft Connections For <br />
            Your Business
          </h1>
          <p className="mx-[35rem] mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
          <Image
            className="mt-10"
            src={"/heroImg.png"}
            alt="hero image"
            width={900}
            height={300}
          />
        </div>
        <div className="">
          <h1 className="text-4xl font-black mt-36">Feature</h1>
          <p className="mx-[35rem] mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
          <div className="flex flex-col mt-10 mx-96 font-bold text-black">
            <div className="flex flex-row">
              <FeatureBox text="Feature 1" size={0} />
              <FeatureBox text="Feature 2" size={0} />
              <FeatureBox text="Feature 3" size={2} />
            </div>
            <div className="flex flex-row mt-1">
              <FeatureBox text="Feature 4" size={0} />
              <FeatureBox text="Feature 5" size={1} />
            </div>
          </div>
        </div>
        <div className="">
          <div className="mt-40">
            <h1 className="text-4xl font-black">Product</h1>
            <p className="mt-10">One platform. Many solutions</p>
          </div>
          <div className="flex flex-grow mt-10 mx-96">
            <ProductPreview />
            <ProductPreview />
          </div>
          <div className="flex flex-row mt-2 items-center mx-96">
          {[...Array(3)].map((_, index) => (
              <ProductCard key={index} />
            ))}
          </div>
        </div>
        <div className="">
          <div className="mt-44">
            <h1 className="text-2xl font-bold text-featureHeader">Who is it for ?</h1>
            <p className="mx-[35rem] text-featureSubHeader mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
          <div className="flex flex-row justify-center mt-10">
            {[...Array(5)].map((_, index) => (
              <UserCard key={index} />
            ))}
          </div>
        </div>
        <div className="mt-44">
          <h1 className="text-3xl font-bold text-featureSubHeader">What people say about us</h1>
          <div className="mt-10">
            <AutoScroll />
            <AutoScrollRight />
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
        <div className="mt-40 bg-newBox rounded-3xl mx-28 text-left flex flex-grow">
          <div className="m-20">
            <h1 className="font-bold text-4xl text-featureHeader">Join our newsletter</h1>
            <div className="flex flex-row mt-5 text-featureSubHeader">
              <p>
                Join our newsletter for exclusive insights,announcements,
                <br />
                and special offers delivered directly to your inbox.
              </p>
              <div className="flex flex-row ml-36">
                <input
                  className="p-2 rounded-xl placeholder:text-placeholder outline-none"
                  type="text"
                  placeholder="olivia@untitleui.com"
                />
                <button className="ml-2 text-sm text-center text-white bg-primary p-2 rounded-xl">
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
