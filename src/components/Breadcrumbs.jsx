import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useProducts } from "../hooks/useProducts";
export const Breadcrumbs = () => {
  const { products } = useProducts();
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const getProductName = (productId) => {
    if (products) {
      const product = products.find((p) => p.id === productId);
      return product ? `${product.model} - ${product.brand}` : "Product"; // Devuelve el nombre del producto o "Product" por defecto
    }
    return "Product"; // Si no hay productos disponibles, devuelve "Product"
  };

  // Construir los breadcrumbs
  const breadcrumbs = [
    { name: "Home", path: "/" },
    ...pathnames.map((pathname, index) => ({
      name: pathname === "product" ? "product" : getProductName(pathname),
      path: `/${pathnames.slice(0, index + 1).join("/")}`,
    })),
  ];
  return (
    <div>
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={index}>
          {breadcrumb.name === "product" ? (
            "product"
          ) : (
            <StyledLink to={breadcrumb.path}>{breadcrumb.name}</StyledLink>
          )}
          {index < breadcrumbs.length - 1 && " > "}
        </span>
      ))}
    </div>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover {
    color: green;
  }
`;
