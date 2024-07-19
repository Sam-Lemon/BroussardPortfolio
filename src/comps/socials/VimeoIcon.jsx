import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVimeoV } from "@fortawesome/free-brands-svg-icons";

export default function VimeoIcon() {
  return (
    <a href="https://vimeo.com/user93468804" aria-label="Visit my Vimeo profile">
      <FontAwesomeIcon icon={faVimeoV} className="social-icon p-2" title="Vimeo" />
    </a>
  );
}
