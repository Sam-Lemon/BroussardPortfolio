import React from "react";

const src = "https://www.youtube.com/embed/lLlrl8yvLIE?si=DCjlwCYsGZKiDg3h"

const VBVideo = () => {
    return (
        <iframe 
        src={src} 
        title="YouTube video player" 
        frame="0" 
        allowFullScreen
        className="video-frame"
        />
    )
}

export default VBVideo;





