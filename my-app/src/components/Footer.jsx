import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#CB0D1F',
    color: 'white', // Alterando a cor do texto para branco
  };

  return (
    <>
      <footer className="mb-0 text-center " style={footerStyle}>
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0 mt-4">Desenvolvido por {"Bruno F "}
            
            </p>
            <a className="text-dark fs-4" href="https://github.com/bflud" target="_blank" rel="noreferrer">
              <i className="fa fa-github text-white"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
