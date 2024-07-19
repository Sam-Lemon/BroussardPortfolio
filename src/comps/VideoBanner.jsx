import React from "react";
import Container from 'react-bootstrap/Container';

export default function VideoBanner() {
  return (
    <Container className="m-0 p-0">
      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.youtube-nocookie.com/embed/lLlrl8yvLIE?si=U9WQqcuUSNeiJUnT&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </Container>
  );
}
