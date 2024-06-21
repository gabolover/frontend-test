import { Link } from "react-router-dom";
import { Breadcrumbs } from "./Breadcrumbs";
import styled from "styled-components";
import { UseCart } from "../hooks/UseCart";
import { useState } from "react";

export const Header = () => {
  const { cart, clearCart } = UseCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total;
  };

  const totalQuantity = () => {
    let sum = 0;
    cart.forEach((product) => {
      sum += product.quantity;
    });
    return sum;
  };

  const total = totalQuantity();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <StyledLink to="/">Cell Shop</StyledLink>
      <StyledDiv>
        <Breadcrumbs />
        <StyledCart>
          <p onClick={openModal}>Cart ({total})</p>{" "}
          <StyledButton onClick={clearCart}>Clear cart</StyledButton>
        </StyledCart>
      </StyledDiv>

      {/* Modal */}
      {isModalOpen && (
        <ModalOverlay>
          <ModalWrapper>
            <ModalHeader>
              <ModalCloseButton onClick={closeModal}>&times;</ModalCloseButton>
              <ModalTitle>Cart</ModalTitle>
            </ModalHeader>
            <ModalContent>
              <StyledTable>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Quantity</th>
                    <th>Color</th>
                    <th>Storage</th>
                    <th>Unit Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product) => (
                    <StyledRow
                      key={`${product.id}-${product.color}-${product.storage}`}
                    >
                      <td>
                        <StyledImage src={product.img} alt="" />
                      </td>
                      <td>{product.brand}</td>
                      <td>{product.model}</td>
                      <td>{product.quantity}</td>
                      <td>{product.colorName}</td>
                      <td>{product.storageName}</td>
                      <td>${product.price ? product.price : 0} </td>
                      <td>${product.price * product.quantity}</td>
                    </StyledRow>
                  ))}
                </tbody>
              </StyledTable>
              <StyledTotal>Total to pay: ${calculateTotal()}</StyledTotal>
            </ModalContent>
          </ModalWrapper>
        </ModalOverlay>
      )}
    </div>
  );
};

// Estilos para el enlace usando styled-components
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  display: block;
  &:hover {
    color: #ccc;
  }
`;

// Estilos para el contenedor principal usando styled-components
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Estilos para el botón usando styled-components
const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

// Estilos para el contenedor del carrito usando styled-components
const StyledCart = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

// Estilos para el overlay del modal usando styled-components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9); /* Fondo semi-transparente negro */
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Estilos para el contenedor principal del modal usando styled-components
const ModalWrapper = styled.div`
  background-color: rgba(
    30,
    30,
    30,
    0.8
  ); /* Fondo semi-transparente gris oscuro */

  width: 80%;
  max-width: 600px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra ligera */

  @media (max-width: 600px) {
    width: 90%;
  }
`;

// Estilos para el encabezado del modal usando styled-components
const ModalHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
  align-items: baseline;
`;

// Estilos para el botón de cerrar modal usando styled-components
const ModalCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #888;

  &:hover {
    color: #555;
  }
`;

// Estilos para el título del modal usando styled-components
const ModalTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #fff;
`;

// Estilos para el contenido del modal usando styled-components
const ModalContent = styled.div`
  padding: 10px 0;
`;

// Estilos para la tabla de productos usando styled-components
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

// Estilos para las imágenes de productos usando styled-components
const StyledImage = styled.img`
  width: 32px;
  height: auto;
`;

// Estilos para el total a pagar usando styled-components
const StyledTotal = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-align: right;
`;

const StyledRow = styled.tr`
  text-align: center;
`;
