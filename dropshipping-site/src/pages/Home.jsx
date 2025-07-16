import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Home() {
  const homeStyle = {
    backgroundImage: `url('https://via.placeholder.com/1920x1080?text=Dropshipping+Store')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '100px 0',
    borderRadius: '15px',
  };

  return (
    <div className="text-center" style={homeStyle}>
      {/* Título da página */}
      <h1 className="display-4 fw-bold">Bem-vindo à DropshipStore</h1>

      {/* Subtítulo da página */}
      <p className="mt-3 fs-5">Sua loja online com os melhores produtos para você!</p>

      {/* Botão para ver os produtos */}
      <Link to="/produtos">
        <Button variant="light" size="lg" className="mt-4">
          Ver Produtos
        </Button>
      </Link>
    </div>
  );
}

export default Home;
