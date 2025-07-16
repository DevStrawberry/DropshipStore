import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { PersonCircle } from 'react-bootstrap-icons';
import { useAuth } from "../AuthContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function Navigation() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-success">DropshipStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/produtos">Produtos</Nav.Link>
            <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
            <Nav.Link as={Link} to="/contato">Contato</Nav.Link>
            {currentUser ? (
              <NavDropdown title={<PersonCircle size={24} />} id="basic-nav-dropdown">
                <NavDropdown.Item disabled>{currentUser.email}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>Sair</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown title={<PersonCircle size={24} />} id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/registrar">Registrar</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
