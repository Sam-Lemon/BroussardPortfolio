import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function LinkedInIcon() {
  return (
    <a href="https://www.linkedin.com/in/natalie-broussard" aria-label="Visit my LinkedIn profile">
      <FontAwesomeIcon icon={faLinkedinIn} className="social-icon p-2" title="LinkedIn" />
    </a>
  );
}
