import React from "react";
import SharePhoto from "./img/images.jfif";

const FBShareButton = ({ url }) => {
  
  
  return (
    <a href={`https://facebook.com/sharer/sharer.php?u=${url}`} target="_blank">
      <img src={SharePhoto} alt="" />
    </a>
  );
};

export default FBShareButton;
