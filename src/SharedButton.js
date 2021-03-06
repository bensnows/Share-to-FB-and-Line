import React from "react";
import SharePhoto from "./img/images.jfif";

const FBShareButton = ({ url, quotes }) => {
  const clickShared = () => {
    window.open(
      `https://facebook.com/sharer/sharer.php?u=${url}&quote=${quotes}`,
      "線上客服",
      "config=width=400,height=640,toolbar=no,location=no,menubar=no,status=no"
    );
  };

  return (
    <button onClick={clickShared} >
      <img src={SharePhoto} alt="" />
    </button>
  );
};

export default FBShareButton;
