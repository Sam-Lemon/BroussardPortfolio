import React from "react";
import purpleShades from '../images/purpleshades.png';

export default function PurpleShades () {
    const divStyle = {
        backgroundImage: `url(${purpleShades})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '10px',
        transform: 'scaleX(-1)'
    };

    return <div style={divStyle} />
};