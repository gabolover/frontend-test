import { useEffect, useState } from "react";
import { API_URL } from "../config";
import { Item } from "../components/Item";
import { getCachedData, cacheData } from "../services/cacheService";
import styled from "styled-components";
import { Search } from "../components/Search";

export const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState("model");

  useEffect(() => {
    const getProducts = async () => {
      let productsCache = await getCachedData("products");
      console.log(productsCache);
      if (!productsCache) {
        const response = await fetch(`${API_URL}/api/product`);
        const data = await response.json();
        await cacheData("products", data);
        productsCache = data;
      }
      setProducts(productsCache);
    };

    getProducts();
  }, []);

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
        {filteredProducts.map((product) => (
          <Item key={product.id} {...product} />
        ))}
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
