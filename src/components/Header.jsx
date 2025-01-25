import { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal.jsx";

function Header() {
  const [estadoCarrito, cambiarEstadoCarrito] = useState(false);
  const [estadoFavoritos, cambiarEstadoFavoritos] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  {
    useEffect(() => {
      const storageCartItems =
        JSON.parse(localStorage.getItem("cartItems")) || [];
      const storageFavItems =
        JSON.parse(localStorage.getItem("favoriteItem")) || [];
      setCartItems(storageCartItems);
      setFavoriteItems(storageFavItems);
    }, []);
  }

  const groupedCartItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  return (
    <>
      <header className="mb-4 p-3 bg-black">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="container text-light">
            Faka<i className="bi bi-arrow-through-heart-fill"></i>Shop
          </h1>
          <div className="w-50 d-flex justify-content-end align-items-center">
            <button
              className="btn bg-transparent border-0"
              onClick={() => {
                cambiarEstadoCarrito(!estadoCarrito);
                cambiarEstadoFavoritos(false);
              }}
            >
              <i className="mx-3 bi bi-cart-fill text-light"></i>
            </button>

            <button
              className="btn bg-transparent border-0"
              onClick={() => {
                cambiarEstadoFavoritos(!estadoFavoritos);
                cambiarEstadoCarrito(false);
              }}
            >
              <i className="mx-3 bi bi-bookmark-heart-fill text-danger"></i>
            </button>
          </div>
        </div>
      </header>

      <Modal
        title="Carrito"
        estado={estadoCarrito}
        cambiarEstado={cambiarEstadoCarrito}
      >
        <Contenido>
          {cartItems.length > 0 ? (
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Price</th>
                  <th>Cantidad</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {groupedCartItems.map((item, index) => (
                  <tr key={index}>
                    <td><img className="img-table" src ={item.img}/></td>
                    <td>{item.price * item.quantity}</td>
                    <td> {item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Carrito vacío</p>
          )}
        </Contenido>
      </Modal>

      <Modal
        title="Favoritos"
        estado={estadoFavoritos}
        cambiarEstado={cambiarEstadoFavoritos}
        mostrarBarra={false}
      >
        <Contenido></Contenido>
      </Modal>
    </>
  );
}

export default Header;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: column;

  .containerImg-modal {
    height: 50px;
  }

  img {
    height: 100%;
  }

  .img-table {
    height: 100px;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    flex-direction: row;
    list-style: none;
    align-items: center;
    gap: 1rem;
    margin: 0;
  }

  h2 {
    font-size: 12px;
  }

td{
  margin: 10px;
  padding: 0;
}

`;
