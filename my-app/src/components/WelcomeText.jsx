import React from "react";

const WelcomeText = () => {
  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Open Sans, sans-serif', // Definindo a fonte Open Sans
  };

  const welcomeStyle = {
    color: '#333',
    fontSize: '26px', // Tamanho da fonte para "Seja bem-vindo!"
    textAlign: 'left',
    padding: '20px',
    fontWeight: 'bold', // Negrito para "Seja bem-vindo!"
  };

  const textStyle = {
    color: '#333',
    fontSize: '16px', // Tamanho da fonte para o restante do texto
    textAlign: 'left',
    padding: '20px',
  };

  return (
    <div style={containerStyle}>
      <p style={welcomeStyle}>
        Seja bem-vindo!
      </p>
      <p style={textStyle}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      </p>
    </div>
  );
};

export default WelcomeText;
