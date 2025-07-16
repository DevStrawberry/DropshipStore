import { Form, Button } from "react-bootstrap";

function Contato() {
  return (
    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '15px' }}>
      {/* Título da página */}
      <h1 className="display-5 fw-bold text-dark mb-4">Fale Conosco</h1>

      {/* Formulário de contato */}
      <Form>
        {/* Campo de nome */}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Seu nome</Form.Label>
          <Form.Control type="text" placeholder="Digite seu nome" />
        </Form.Group>

        {/* Campo de email */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Seu email</Form.Label>
          <Form.Control type="email" placeholder="Digite seu email" />
        </Form.Group>

        {/* Campo de mensagem */}
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Sua mensagem</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Digite sua mensagem" />
        </Form.Group>

        {/* Botão de enviar */}
        <Button variant="success" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
}

export default Contato;
