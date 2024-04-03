import React from "react"
const Banner = () => {
  return (
    <React.Fragment>
        <div className="flex flex-row justify-between ml-32 mr-32 mt-12 mb-28 text-primary">
            <div className="">
                <h1 className="text-xl font-bold">LOGO</h1>
            </div>
            <div className="flex flex-row space-x-8 text-ml">
                <p>About</p>
                <p>Features</p>
                <p>Product</p>
                <p>Join</p>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Banner