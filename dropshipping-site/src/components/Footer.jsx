import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-success text-white text-center py-3">
      <Container>
        {/* Copyright */}
        <p>&copy; {new Date().getFullYear()} DropshipStore. Todos os direitos reservados.</p>
      </Container>
    </footer>
  );
}

export default Footer;
