import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Item = ({ imgUrl, brand, model, price, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };
  return (
    <StyledDiv onClick={handleClick}>
      <img src={imgUrl} alt={`${brand}-${model}`} />
      <Container>
        <p>{brand}</p>
        <p>{model}</p>
        <Price>${price ? price : 0}</Price>
      </Container>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
  witdh: 100%;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
  p {
    margin: 0.5rem 0;
  }
`;

const Price = styled.p`
  color: green;
  font-weight: bold;
  font-size: 1.7rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
