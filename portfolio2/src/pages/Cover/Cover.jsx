/* eslint-disable react/prop-types */
//import React from "react";

const Cover = ({ coverImg, title, subtitle }) => {
  const coverImgStyle = {
    backgroundImage: `url(${coverImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  };

  return (
    <div className="h-full" style={coverImgStyle}>
      <div className="h-full flex flex-col justify-center items-center page-shadow">
        <h1 className="text-primary text-6xl font-extrabold font-outline-4">
          {title}
        </h1>
        <p className="text-3xl text-fuchsia-600 font-bold font-outline-2">
        {subtitle}
        </p>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Cover;