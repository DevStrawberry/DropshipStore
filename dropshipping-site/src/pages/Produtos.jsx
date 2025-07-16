import { Card, Button, Row, Col } from "react-bootstrap";

// Lista de produtos de exemplo
const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    descricao: "Um smartphone de última geração com câmera de 108MP.",
    preco: "R$ 2.999,99",
    imagem: "https://via.placeholder.com/300?text=Smartphone",
  },
  {
    id: 2,
    nome: "Notebook",
    descricao: "Notebook potente para trabalho e jogos.",
    preco: "R$ 5.499,99",
    imagem: "https://via.placeholder.com/300?text=Notebook",
  },
  {
    id: 3,
    nome: "Fone de Ouvido",
    descricao: "Fone de ouvido com cancelamento de ruído.",
    preco: "R$ 799,99",
    imagem: "https://via.placeholder.com/300?text=Fone+de+Ouvido",
  },
  {
    id: 4,
    nome: "Smartwatch",
    descricao: "Relógio inteligente com monitoramento de saúde.",
    preco: "R$ 1.299,99",
    imagem: "https://via.placeholder.com/300?text=Smartwatch",
  },
  {
    id: 5,
    nome: "Tablet",
    descricao: "Tablet para estudos e entretenimento.",
    preco: "R$ 1.999,99",
    imagem: "https://via.placeholder.com/300?text=Tablet",
  },
  {
    id: 6,
    nome: "Câmera",
    descricao: "Câmera profissional para fotos incríveis.",
    preco: "R$ 3.499,99",
    imagem: "https://via.placeholder.com/300?text=Câmera",
  },
];

function Produtos() {
  return (
    <div>
      {/* Título da página */}
      <h1 className="display-5 fw-bold text-dark mb-4">Nossos Produtos</h1>

      {/* Grade de produtos */}
      <Row xs={1} md={2} lg={3} className="g-4">
        {/* Mapeamento dos produtos */}
        {produtos.map((produto) => (
          <Col key={produto.id}>
            <Card className="h-100 shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
              {/* Imagem do produto */}
              <Card.Img variant="top" src={produto.imagem} alt={produto.nome} />
              <Card.Body>
                {/* Nome do produto */}
                <Card.Title>{produto.nome}</Card.Title>
                {/* Descrição do produto */}
                <Card.Text>{produto.descricao}</Card.Text>
                {/* Preço do produto */}
                <Card.Text className="text-success fw-bold">{produto.preco}</Card.Text>
                {/* Botão de comprar */}
                <Button variant="success">Comprar</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Produtos;
