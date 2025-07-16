import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

// Importação dos componentes de layout
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";

// Importação das páginas com lazy loading
const Home = lazy(() => import("./pages/Home"));
const Produtos = lazy(() => import("./pages/Produtos"));
const Sobre = lazy(() => import("./pages/Sobre"));
const Contato = lazy(() => import("./pages/Contato"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Componente de navegação */}
      <Navigation />

      {/* Conteúdo principal da aplicação */}
      <main className="flex-grow-1 pt-5">
        <Container className="mt-4">
          {/* Suspense para o lazy loading das páginas */}
          <Suspense fallback={<div>Carregando...</div>}>
            <Routes>
              {/* Rota para a página inicial */}
              <Route path="/" element={<Home />} />
              {/* Rota para a página de produtos */}
              <Route path="/produtos" element={<Produtos />} />
              {/* Rota para a página sobre */}
              <Route path="/sobre" element={<Sobre />} />
              {/* Rota para a página de contato */}
              <Route path="/contato" element={<Contato />} />
              {/* Rota para a página de login */}
              <Route path="/login" element={<Login />} />
              {/* Rota para a página de registro */}
              <Route path="/registrar" element={<Register />} />
            </Routes>
          </Suspense>
        </Container>
      </main>

      {/* Componente de rodapé */}
      <Footer />
    </div>
  );
}

export default App;
