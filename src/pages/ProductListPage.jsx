import { useState } from "react";
import { Item } from "../components/Item";
import styled from "styled-components";
import { Search } from "../components/Search";
import { useProducts } from "../hooks/useProducts";

export const ProductListPage = () => {
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState("model");
  const { products } = useProducts();

  const filteredProducts = products.filter((product) =>
    product[filter].toLowerCase().includes(value.toLowerCase())
  );

  const handleSearch = (value) => {
    setValue(value);
  };

  const handleFilter = (filter) => {
    setFilter(filter);
  };
  return (
    <div>
      <StyledSearchContainer>
        <Search
          products={products}
          handleSearch={handleSearch}
          handleFilter={handleFilter}
          filter={filter}
        />
      </StyledSearchContainer>
      <StyledDiv>
        {filteredProducts.length > 0
          ? filteredProducts.map((product) => (
              <Item key={product.id} {...product} />
            ))
          : "No hay productos disponibles"}
      </StyledDiv>
    </div>
  );
};

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StyledSearchContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 1rem;
`;
