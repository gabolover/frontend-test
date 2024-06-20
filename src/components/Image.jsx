import styled from "styled-components";

export const Image = ({ img }) => {
  return <StyledImage src={img} alt="product" />;
};

const StyledImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: none;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
