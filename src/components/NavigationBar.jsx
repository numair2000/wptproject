import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function NavigationBar(){
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">ANG Martial Arts Academy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/instructor">
            <Nav.Link>Instructor</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/courses">
            <Nav.Link>Courses</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/facilities">
            <Nav.Link>Facilities</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/registration-form">
            <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact-us">
            <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            
        
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}