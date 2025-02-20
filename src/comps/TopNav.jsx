import React from "react";
import Branding from "./Branding";
// import SocialsBlock from "./SocialsBlock";
import { Container, Navbar, Nav } from "react-bootstrap/";

export default function TopNavBar() {
  return (
    <Navbar bg="#FFFFFF" fixed="top" expand="lg">
      <Container className="ps-3">
        <Navbar.Brand href="#home" className="ms-4">
          <Branding />
        </Navbar.Brand>
      </Container>
      <Container className="d-flex justify-content-end">
        <Nav className="me-2">
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#blogs">Blogs</Nav.Link>
          <Nav.Link href="#gallery">Gallery</Nav.Link>
          <Nav.Link href="#about">About Me</Nav.Link>
        </Nav>
        {/* <Nav className="me-4">
          <SocialsBlock />
        </Nav> */}
      </Container>
    </Navbar>
  );
}
