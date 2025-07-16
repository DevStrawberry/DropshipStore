function Sobre() {
  const sobreStyle = {
    backgroundImage: `url('https://via.placeholder.com/1920x1080?text=Sobre+Nós')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '100px 0',
    borderRadius: '15px',
  };

  return (
    <div className="text-center" style={sobreStyle}>
      {/* Título da página */}
      <h1 className="display-5 fw-bold">Sobre Nós</h1>

      {/* Descrição da loja */}
      <p className="mt-3 fs-5">
        Somos uma loja de dropshipping que oferece os melhores produtos diretamente para você, com rapidez e segurança.
      </p>
    </div>
  );
}

export default Sobre;
