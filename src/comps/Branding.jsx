import React from "react";
import Container from 'react-bootstrap/Container';
import PurpleShades from "./PurpleShades";


export default function Branding () {
    return (
        <Container className="branding-container me-auto">
            <h2 className="mb-0">Natalie Broussard</h2>
            <p className="p-0 mb-1">Designer. Technician. Artist.</p>
            <PurpleShades />
        </Container>
    )
}