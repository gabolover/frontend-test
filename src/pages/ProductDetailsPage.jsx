import { useParams } from "react-router-dom";
import { Actions } from "../components/Actions";
import { Description } from "../components/Description";
import { Image } from "../components/Image";
import styled from "styled-components";
import { useProductsDetails } from "../hooks/useProductDetails";

export const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = useProductsDetails(id);
  return (
    <div>
      <h1>Details</h1>
      <StyledContainer>
        <div>
          <Image img={product.img} />
        </div>
        <div>
          <Description {...product} />
          {product.options && <Actions {...product} />}
        </div>
      </StyledContainer>
    </div>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  gap: 20px;
`;
