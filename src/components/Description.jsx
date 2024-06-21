import styled from "styled-components";

export const Description = ({
  brand,
  model,
  price,
  cpu,
  ram,
  os,
  displayResolution,
  battery,
  primaryCamera,
  secondaryCamera,
  displaySize,
  weight,
}) => {
  return (
    <StyledDescription>
      <h2>Description</h2>
      <ul>
        <li>Brand: {brand}</li>
        <li>Model: {model}</li>
        <li>Price: ${price ? price : 0}</li>
        <li>CPU: {cpu}</li>
        <li>RAM: {ram}</li>
        <li>OS: {os}</li>
        <li>Display Resolution: {displayResolution}</li>
        <li>Battery: {battery}</li>
        {Array.isArray(primaryCamera) ? (
          <li>Primary camera: {primaryCamera?.join(" - ")}</li>
        ) : (
          <li>Primary camera: {primaryCamera}</li>
        )}
        {Array.isArray(secondaryCamera) ? (
          <li>Secondary camera: {secondaryCamera?.join(" - ")}</li>
        ) : (
          <li>Secondary camera: {secondaryCamera}</li>
        )}
        <li>Display size: {displaySize}</li>
        <li>Weight: {weight ? weight : 0}</li>
      </ul>
    </StyledDescription>
  );
};

const StyledDescription = styled.div`
  h2 {
    margin-bottom: 1rem;
    text-align: center;
  }
  ul {
    li {
      margin-bottom: 0.5rem;
    }
  }
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
`;
