import React from "react";
import Container from 'react-bootstrap/Container';
import VBVideo from "./VBVideo";

export default function VideoBanner() {
  return (
    <Container className="m-0 p-0">
      <div className="ratio ratio-16x9">
        <VBVideo />
      </div>
    </Container>
  );
}
