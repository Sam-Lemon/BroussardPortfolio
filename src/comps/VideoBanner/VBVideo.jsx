import React from "react";


const src = "https://www.youtube.com/embed/lLlrl8yvLIE?si=DCjlwCYsGZKiDg3h"

const VBVideo = () => {
    return (
        <iframe 
        width="560" 
        height="315" 
        src={src} 
        title="YouTube video player" 
        frame="0" 
        allowFullScreen
        />
    )
}

export default VBVideo;





