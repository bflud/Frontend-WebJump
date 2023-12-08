import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="https://media.webjump.com.br/webjump.com.br/wp-content/uploads/2023/04/destaque-adobe-commerce-1.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">A loja da nova geração!</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
              Conheça a revolução em compras! Bem-vindo à nossa loja, onde a inovação encontra a qualidade. Aqui, a experiência de compra é da nova geração. Descubra o que há de mais moderno e autêntico. Seja parte dessa evolução conosco!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
