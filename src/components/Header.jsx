import { Link } from "react-router-dom";
import { Breadcrumbs } from "./Breadcrumbs";
import styled from "styled-components";

export const Header = () => {
  return (
    <div>
      <StyledLink to="/">Cell Shop</StyledLink>
      <Breadcrumbs />
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
