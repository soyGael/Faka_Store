import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Modal from "./Modal.jsx";

function Header() {
  const [estadoCarrito, cambiarEstadoCarrito] = useState(false);
  return (
    <>
      <header className="mb-4 p-3 bg-black">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="container text-light">
            Faka<i className="bi bi-arrow-through-heart-fill"></i>Shop
          </h1>
          <div className="w-50 d-flex justify-content-end align-items-center">
            <button className="btn bg-transparent border-0" onClick={() => cambiarEstadoCarrito(!estadoCarrito)}>
              <i className="mx-3 bi bi-cart-fill text-light"></i>
            </button>

            <Link to="/">
              <i className="mx-3 bi bi-bookmark-heart-fill text-danger"></i>
            </Link>
          </div>
        </div>
      </header>

      <Modal
        title="Carrito"
        estado={estadoCarrito}
        cambiarEstado={cambiarEstadoCarrito}
      >
        <Contenido></Contenido>
      </Modal>
    </>
  );
}

export default Header;

const Contenido = styled.div`
display: flex
flex-direction: column;
flex-direction: column;
`;
