import React from "react";
import Modal from "@mui/material/Modal";
import MenuIcon from '@mui/icons-material/Menu';
const Banner = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <React.Fragment>
      <div className="mobile:hidden flex flex-row justify-between mt-12 mb-28 text-primary">
        <h1 className="text-xl font-bold">LOGO</h1>
        <div className="flex flex-row space-x-8 text-ml">
          <p>About</p>
          <p>Features</p>
          <p>Product</p>
          <p>Join</p>
        </div>
      </div>
      <div className="sm:hidden flex flex-row justify-between mb-10 text-primary sticky top-0">
        <button className="m-5 -mb-5" onClick={handleOpen}><MenuIcon/></button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="w-[40vw] h-[60vw] bg-white rounded-br-3xl">
          <h1 className="text-3xl font-black text-primary p-5">LOGO</h1>
          <ul className="pl-14 text-xl space-y-2 ">
            <li className="hover:pointer">About</li>
            <li className="hover:pointer">Feature</li>
            <li className="hover:pointer">Product</li>
            <li className="hover:pointer">Join</li>
          </ul>

          </div>
        </Modal>
      </div>
      
    </React.Fragment>
  );
};

export default Banner;
