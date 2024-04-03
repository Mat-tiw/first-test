import React from "react";
const Footer = () => {
  return (
    <React.Fragment>
<div className="flex flex-col items-center bg-stone-200 rounded-tr-2xl rounded-tl-2xl mx-32 p-4">
  <h1 className="font-bold text-2xl mt-16">FOOTER</h1>
  <div className="flex flex-row space-x-4 mt-6 text-black">
    <p>About</p>
    <p>Features</p>
    <p>Product</p>
    <p>Join</p>
  </div>
  <hr className="w-full my-4 bg-gray-100 rounded dark:bg-gray-700 mt-6"></hr>
  <p className="text-gray-400 mt-6 mb-3">© 2077 All rights reserved.</p>
</div>
    </React.Fragment>
  );
};

export default Footer;
