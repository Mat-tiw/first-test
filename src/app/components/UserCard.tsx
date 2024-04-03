import React from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
const UserCard = () => {
  return (
    <React.Fragment>
      <div className="m-2 flex-col bg-suppport p-10 rounded-2xl flex items-center max-w-max text-center">
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
