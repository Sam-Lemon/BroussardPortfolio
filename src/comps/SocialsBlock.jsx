import React from "react";
import InstagramIcon from "./socials/InstagramIcon";
import LinkedInIcon from "./socials/LinkedInIcon";
import VimeoIcon from "./socials/VimeoIcon";
import Nav from "react-bootstrap/Nav";

export default function SocialsBlock() {
  return (
    <Nav className="me-4">
      <InstagramIcon />
      <LinkedInIcon />
      <VimeoIcon />
    </Nav>
  );
}
