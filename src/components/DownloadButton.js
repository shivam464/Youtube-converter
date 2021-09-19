import React, { useState } from 'react'
import "./DownloadButton.css"

const DownloadButton = ({type,id}) => {
  const [styles, setstyles] = useState(false)
  const showStyles=()=>{
    if(window.innerWidth<=750){
      setstyles(true);
    }
    else{
      setstyles(false)
    }
  }
  window.addEventListener('resize',showStyles)
  return (
    <div className="download-btn">
      <h2>Download {type === "mp3" ? "music" : "video"} file</h2>
      <iframe
        className="button-api-frame"
        src={`https://api.vevioz.com/@api/button/${type}/${id}`}
        width={styles?200:680}
        height={styles?700:180}
        allowtransparency="true"
        scrolling="no"
        style={{ border: "1px solid black", fontSize: "30px"}}
      />
    </div>
  );

}

export default DownloadButton
