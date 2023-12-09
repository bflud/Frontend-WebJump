import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import '../assets/style.css';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [currentFilter, setCurrentFilter] = useState(null);
  let componentMounted = true;
  const location = useLocation();
  const dispatch = useDispatch();
  const [colors, setColors] = useState([]);

  const colorMap = {
    'Vermelho': '#CB0D1F',
    'Laranja': '#F26324',
    'Azul': 'blue',
    'Preta': '#000000',
    'Preto': '#000000',
    'Rosa': '#FFC0CB',
    'Amarela': '#ffff00',
    'Cinza': 'gray',
    'Bege': '#f5f5dc'

  };
  const getColorHex = (colorName) => {
    return colorMap[colorName] || '#FFFFFF'; // Se a cor não existir, use branco como padrão
  };
  const addProduct = (product) => {
    dispatch(addCart(product))
  }



  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);

      const searchParams = new URLSearchParams(location.search);
      const category = searchParams.get('category');

      if (category !== null) {
        try {
          const response = await fetch("/mock-api/V1/categories/" + category);
          const productsData = await response.json();

          const uniqueColors = new Set();
          productsData.items.forEach((product) => {
            product.filter.forEach((filter) => {
              if (filter.color) {
                uniqueColors.add(filter.color);
              }
            });
          });

          if (uniqueColors.size > 0) {
            setColors([...uniqueColors]);
          }


          setData(productsData);
          setFilter(productsData);
          setLoading(false);
        } catch (error) {
          console.error("Erro ao obter os produtos:", error);
          setLoading(false);
        }
      } else {
        setLoading(true);
      }
    };

    getProducts();
  }, [location.search]);

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

  const hideColor =  () => {
    var colorFilterElement = document.getElementById('colorFilter');
    if (colorFilterElement) {
      colorFilterElement.style.display = 'none';
    } else {
      console.log('Elemento colorFilter não encontrado.');
    }
  
  }

  
  const fetchAllProducts = async () => {
    setLoading(true);

    try {

      const response1 = await fetch("/mock-api/V1/categories/1");
      const response2 = await fetch("/mock-api/V1/categories/2");

      const productsData1 = await response1.json();
      const productsData2 = await response2.json();

      // Combina os dados de ambas as categorias
      const allProductsData = {
        filters: [...productsData1.filters, ...productsData2.filters],
        items: [...productsData1.items, ...productsData2.items],
        

        // Escondendo o elemento


      };

      setData(allProductsData);
      setFilter(allProductsData);
      setTimeout(() => {
        hideColor();
        setLoading(false);
      }, 100);
      
      setLoading(false);
    } catch (error) {
      console.error("Erro ao obter os produtos:", error);
      setLoading(false);
    }

  };
  const filterProduct = (selectedColor) => {
    if (selectedColor === currentFilter) {
      setCurrentFilter(null);
      setFilter(data);
    } else {
      setCurrentFilter(selectedColor);
      const filteredItems = data.items.filter((item) => {
        return item.filter.some((filter) => filter.color.toLowerCase() === selectedColor.toLowerCase());
      });
      setFilter({ filters: data.filters, items: filteredItems });
    }
  };

  const fetchShoesProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("/mock-api/V1/categories/3");
      const productsData = await response.json();

      setData(productsData);
      setFilter(productsData);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao obter os produtos:", error);
      setLoading(false);
    }
  };

  const ShowProducts = () => {

    return (

      <>
        {/* <h2 className="display-5 text-center red">Filtre por:</h2> */}

        <div className="buttons text-center py-2">
          <h4 class="filter">CATEGORIAS</h4>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={fetchAllProducts}>Roupas</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={fetchShoesProducts}>Sapatos</button>
          {/* <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelery")}>Acessórios</button> */}

        </div >
        {/* <div className="buttons text-center py-1">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>Corrida</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("men's clothing")}>Caminhada</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("women's clothing")}>
            Casual
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelery")}>Social</button>
        </div> */}
        <div className="buttons text-center py-2" id="colorFilter">
          <h4 class="filter">CORES</h4>
          {colors.map((color, index) => (
            <button
              key={index}
              className="color-filter btn"
              style={{
                backgroundColor: getColorHex(color),
                width: '50px',
                height: '50px',
                margin: '5px',
              }}
              onClick={() => filterProduct(color)}
            ></button>
          ))}
        </div>


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




        {filter.items && filter.items.map((product) => (
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
                  {product.name}
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
        ))}



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
