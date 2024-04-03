import React from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const Testimonial = () => {
  return (
    <div className="m-2 text-borderTextHeader border-2 border-borderCustom p-5 rounded-2xl w-[28rem] text-left">
      <div className="flex items-center">
        <PermIdentityIcon
          className="mr-2"
          sx={{ width: 30, height: 30 }}
        />
        <p className="font-bold">Lorem ipsum</p>
      </div>
      <p className="mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
      </p>
    </div>
  );
};

export default Testimonial;
