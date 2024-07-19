import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function InstagramIcon() {
  return (
    <a href="https://www.instagram.com/nataliebrouss_art/" aria-label="Visit my Instagram profile">
      <FontAwesomeIcon icon={faInstagram} className="social-icon p-2" title="Instagram" />
    </a>
  );
}
