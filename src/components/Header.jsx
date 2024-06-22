import { Link } from "react-router-dom";
import { Breadcrumbs } from "./Breadcrumbs";
import styled from "styled-components";
import { useCart } from "../hooks/useCart";
import { useState, useEffect } from "react";

export const Header = () => {
  const { cart, clearCart, deleteFromCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartUpdated, setIsCartUpdated] = useState(false);

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

  useEffect(() => {
    if (total !== 0) {
      setIsCartUpdated(true);
      setTimeout(() => {
        setIsCartUpdated(false);
      }, 500);
    }
  }, [total]);

  return (
    <div>
      <StyledLink to="/">Cell Shop 📱</StyledLink>
      <StyledDiv>
        <Breadcrumbs />
        <StyledCart>
          <Container>
            <AnimatedCart
              onClick={openModal}
              className={isCartUpdated ? "animate-cart" : ""}
            >
              🛒
            </AnimatedCart>
            <Bubble>{total}</Bubble>
          </Container>
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
                    <th>Action</th>
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
                      <td>
                        <StyledButton
                          onClick={() =>
                            deleteFromCart(
                              product.id,
                              product.color,
                              product.storage
                            )
                          }
                        >
                          ❌
                        </StyledButton>
                      </td>
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

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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

const StyledCart = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Container = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

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

const ModalWrapper = styled.div`
  background-color: rgba(30, 30, 30, 0.8);
  width: 80%;
  max-width: 800px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
  align-items: baseline;
`;

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

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #fff;
`;

const ModalContent = styled.div`
  padding: 10px 0;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const StyledImage = styled.img`
  width: 32px;
  height: auto;
`;

const StyledTotal = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-align: right;
`;

const StyledRow = styled.tr`
  text-align: center;
`;

const Bubble = styled.span`
  position: absolute;
  top: 8px;
  right: -8px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 9px;
`;

const AnimatedCart = styled.p`
  font-size: 1.5rem;
  &.animate-cart {
    animation: bounce 0.5s ease;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: scale(1);
    }
    25%,
    75% {
      transform: scale(1.3);
    }
    50% {
      transform: scale(1.5);
    }
  }
`;
