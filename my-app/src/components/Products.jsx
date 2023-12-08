import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import '../assets/style.css';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product))
  }

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  }
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-2">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>Todos</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("men's clothing")}>Roupas</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("women's clothing")}>
            Sapatos
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelery")}>Acessórios</button>

        </div >
        {/* <div className="buttons text-center py-1">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>Corrida</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("men's clothing")}>Caminhada</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("women's clothing")}>
            Casual
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelery")}>Social</button>
        </div> */}
        <div className="buttons text-center py-2">
          <button className="color-filter btn" style={{ backgroundColor: '#CB0D1F', width: '50px', height: '50px', margin: '5px' }} onClick={() => filterProduct('#CB0D1F')}></button>
          <button className="color-filter btn" style={{ backgroundColor: '#F26324', width: '50px', height: '50px', margin: '5px' }} onClick={() => filterProduct('#F26324')}></button>
          <button className="color-filter btn" style={{ backgroundColor: '#27A3A9', width: '50px', height: '50px', margin: '5px' }} onClick={() => filterProduct('#27A3A9')}></button>
        </div >
        <div className="dropdown text-right">
          <button className="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            Ordenar Por
          </button>
          <ul className="dropdown-menu mb-4" aria-labelledby="dropdownMenuButton">
            <li><button className="dropdown-item" onClick={() => filterProduct('price')}>Preço</button></li>
            <li><button className="dropdown-item" onClick={() => filterProduct('name')}>Nome</button></li>
            <li><button className="dropdown-item" onClick={() => filterProduct('rating')}>Avaliação</button></li>
            {/* Adicione mais opções aqui conforme desejado */}
          </ul>
        </div>

        {
          filter.map((product) => {
            return (
              <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                <div className="card text-center h-100" style={{ border: 'none' }} key={product.id}>
                  <img
                    className="card-img-top p-3"
                    src={product.image}
                    alt="Card"
                    height={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {product.title.substring(0, 12)}...
                    </h5>

                  </div>
                  <ul className="list-group" style={{ border: 'none' }}>
                    <ul className="list-group" style={{ border: 'none' }}>
                      <li style={{ color: '#1E2B50', fontSize: '27px', fontFamily: 'OpenSans-Extrabold', fontWeight: '900' }} className="list-group-item lead">
                        {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                      </li>
                    </ul>
                    {/* <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li> */}
                  </ul>
                  <div className="card-body">
                    <Link
                      to={"/product/" + product.id}
                      className="btn btn-dark m-1"
                      style={{
                        backgroundColor: '#00A8A9',
                        color: 'white',
                        fontSize: '18px',
                        fontFamily: 'Open Sans, sans-serif',
                        fontWeight: '800',
                        border: 'none',
                        width: '162px',
                        height: '40px'
                      }}
                    >
                      Comprar
                    </Link>

                  </div>
                </div>
              </div>

            );
          })
        }
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-left red">Produtos</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
