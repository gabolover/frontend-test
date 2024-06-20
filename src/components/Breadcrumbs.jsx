import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    ...pathnames.map((pathname, index) => ({
      name: pathname,
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
