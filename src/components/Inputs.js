import React, { useEffect, useState } from 'react'
import '../components/Inputs.css'
import DownloadButton from './DownloadButton';
import DownloadButtonDefault from './DownloadButtonDefault';
import InvalidUrl from './InvalidUrl';
const Inputs = () => {

    const [videoUrl, setVideoUrl] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {
        const id = videoUrl.replace("https://www.youtube.com/watch?v=", "");

        setId(id);
    }, [videoUrl]);

    
    return (
        <div className="input-container">
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    value={videoUrl}
                    className="form-control"
                    onChange={(e) => setVideoUrl(e.target.value)}
                    placeholder="Paste youtube video url here..."
                />
            </form>
            {videoUrl.length ? (<div>{videoUrl.startsWith("https://www.youtube.com/watch?v=") ||
                videoUrl.startsWith("https://youtube.com/watch?v=") ||
                videoUrl.startsWith("www.youtube.com/watch?v=") ||
                videoUrl.startsWith("youtube.com/watch?v=") ?
                (<div>
                    <div>
                        <DownloadButton id={id} type="mp3" />
                    </div>
                    <div>
                        <DownloadButton id={id} type="videos" />
                    </div>
                </div>) : <InvalidUrl/>}
            </div>) : <DownloadButtonDefault />}
        </div>
    )
}

export default Inputs
