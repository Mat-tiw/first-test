import React from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
const UserCard = () => {
  return (
    <React.Fragment>
      <div className="m-2 flex-col w-[250px] h-[300px] bg-suppport rounded-2xl flex justify-center items-center text-center">
        <PermIdentityIcon
          className="text-featureSubHeader"
          sx={{ width: 50, height: 50 }}
        />
        <p className="text-featureSubHeader">
          Lorem ipsum dolor
          <br /> sit amet
        </p>
      </div>
    </React.Fragment>
  );
};

export default UserCard;
