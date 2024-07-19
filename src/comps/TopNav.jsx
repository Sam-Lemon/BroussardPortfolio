import React from "react";
import Branding from "./Branding";
import { Container, Navbar, Nav } from "react-bootstrap/";

export default function TopNavBar() {
  return (
    <Navbar bg="#FFFFFF" data-bs-theme="light" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <Branding />
        </Navbar.Brand>
        <Nav className="me-0">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#blogs">Blogs</Nav.Link>
          <Nav.Link href="#gallery">Gallery</Nav.Link>
          <Nav.Link href="#about">About Me</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
