import React from "react";
import "./DownloadButtonDefault.css";
import gif from "../images/gif.0218fbb9.gif";

function DownloadButtonDefault() {
  return (
    <div className="default">
      <h1>Paste the video url to get started..</h1>
      <br />
      <p>Copy url from youtube like this 👇</p>
      <img src={gif} alt="tutorial" />
    </div>
  );
}

export default DownloadButtonDefault;