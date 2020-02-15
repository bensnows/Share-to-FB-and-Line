import React from "react";
import SharePhoto from "./img/buttons_zh_TW/share-b.png";

const LineShareButton = ({ url, quotes }) => {
  const clickShared = () => {
    window.open(
      `http://line.naver.jp/R/msg/text/?${url}`,
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

export default LineShareButton;
