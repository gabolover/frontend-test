import { useParams } from "react-router-dom";
import { Actions } from "../components/Actions";
import { Description } from "../components/Description";
import { Image } from "../components/Image";
import { useEffect, useState } from "react";
import { API_URL } from "../config";
import styled from "styled-components";
import { cacheData, getCachedData } from "../services/cacheService";

export const ProductDetailsPage = () => {
  const [product, setProduct] = useState({}); //
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const getProduct = async () => {
      let productCache = await getCachedData("product");
      console.log(productCache);
      if (!productCache || productCache.id !== id) {
        const response = await fetch(`${API_URL}/api/product/${id}`);
        const data = await response.json();
        await cacheData("product", data);
        productCache = data;
      }

      setProduct({
        brand: productCache.brand,
        model: productCache.model,
        price: productCache.price,
        cpu: productCache.cpu,
        ram: productCache.ram,
        os: productCache.os,
        displayResolution: productCache.displayResolution,
        battery: productCache.battery,
        primaryCamera: productCache.primaryCamera,
        secondaryCamera: productCache.secondaryCmera,
        displaySize: productCache.displaySize,
        img: productCache.imgUrl,
        weight: productCache.weight,
      });
    };
    getProduct();
  }, [id]);
  return (
    <div>
      <h1>Details </h1>
      <StyledContainer>
        <div>
          <Image img={product.img} />
        </div>
        <div>
          <Description {...product} />
          <Actions />
        </div>
      </StyledContainer>
    </div>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;
