import styled from "styled-components";
import PropTypes from "prop-types";

function Modal({
  children,
  title = "Sin título",
  estado,
  cambiarEstado,
  mostrarBarra = true,
  mostrarOver = false,
}) {
  return (
    <>
      {estado && (
        <Over mostrarOver={mostrarOver}>
          <ContenedorModal>
            <Encabezado>
              <h3>{title}</h3>
            </Encabezado>
            <BotonCerrar
              onClick={() => {
                cambiarEstado(false);
              }}
            >
              <i className="bi bi-x-square-fill"></i>
            </BotonCerrar>
            {children}
            {mostrarBarra && (
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  className="btn btn-outline-dark me-md-2"
                  type="button"
                  onClick={() => {
                    cambiarEstado(false);
                    alert("No te alcanzó xd lol");
                    cl
                  }}
                >
                  Comprar
                </button>
              </div>
            )}
          </ContenedorModal>
        </Over>
      )}
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  estado: PropTypes.bool.isRequired,
  cambiarEstado: PropTypes.func.isRequired,
  mostrarBarra: PropTypes.bool,
  mostrarOver: PropTypes.bool,
};

export default Modal;

const Over = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${(props) => (props.mostrarOver ? " rgba(0,0,0,0.5)" : "none")};
  z-index: 1;
`;

const ContenedorModal = styled.div`
  position: absolute;
  left: 64.5%;
  top: 10%;
  width: 350px;
  min-height: 100px;
  padding: 20px;
  background: #fff;
  border: 1px solid #e1e1e1e1;
  border-radius: 0.5rem;
  z-index: 1;
  text-align: center;
`;

const Encabezado = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #e1e1e1;

  h3 {
    font-weight: 500;
    font-size: 20px;
    right: 20px;
  }
`;

const BotonCerrar = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  heigth: 30px;
  width: 30px:
  
  border:none;
  border: none;
  background: none;
`;
