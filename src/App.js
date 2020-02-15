import React from "react";
import FBShareButton from "./SharedButton";
import LineShareButton from "./LineShare";

function App() {
  return (
    <>
      <FBShareButton
        url={"https://estimation.megabank.com.tw/"}
        quotes={"Hello"}
      />
      <LineShareButton
        url={"https://estimation.megabank.com.tw/"}
        quotes={"Hello"}
      />
    </>
  );
}

export default App;
