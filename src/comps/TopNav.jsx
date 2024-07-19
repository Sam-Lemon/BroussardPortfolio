import React from "react";
import Branding from "./Branding";
import InstagramIcon from "./socials/InstagramIcon";
import LinkedInIcon from "./socials/LinkedInIcon";
import VimeoIcon from "./socials/VimeoIcon";
import { Container, Navbar, Nav } from "react-bootstrap/";

export default function TopNavBar() {
  return (
    <Navbar bg="#FFFFFF" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <Branding />
        </Navbar.Brand>
        <Nav className="me-0">
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#blogs">Blogs</Nav.Link>
          <Nav.Link href="#gallery">Gallery</Nav.Link>
          <Nav.Link href="#about">About Me</Nav.Link>
        </Nav>
        <Nav className="me-0">
          <InstagramIcon />
          <LinkedInIcon />
          <VimeoIcon />
        </Nav>
      </Container>
    </Navbar>
  );
}
