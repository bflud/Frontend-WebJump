import React, { useEffect, useRef } from "react";
import videoSource from "../assets/video.mp4";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.muted = true;
    video.autoplay = true;
    video.loop = true;
    video.setAttribute('playsinline', ''); // Garante a reprodução automática em dispositivos móveis
  }, []);

  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <video
            ref={videoRef}
            className="card-img img-fluid"
            style={{ maxHeight: 'calc(100% - 600px)', maxWidth: '100%', objectFit: 'cover', opacity: 0.3 }}
          >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">A Loja da Nova Geração!</h5>
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
