import { useState } from "react";
import styled from "styled-components";
import { UseCart } from "../hooks/UseCart";

export const Actions = ({ id, options, brand, model, img, price }) => {
  const { addToCart, loading } = UseCart();
  const { colors, storages } = options;
  const [color, setColor] = useState(colors[0].code);
  const [storage, setStorage] = useState(storages[0].code);

  const handleChangeColor = (e) => {
    setColor(+e.target.value);
  };
  const handleChangeStorage = (e) => {
    setStorage(+e.target.value);
  };

  return (
    <StyledActions>
      <h2>Actions</h2>
      <Container>
        <Label htmlFor="colors">Colors</Label>
        <Select id="colors" onChange={handleChangeColor} value={color}>
          {colors.map((color) => (
            <option key={color.code} value={color.code}>
              {color.name}
            </option>
          ))}
        </Select>
        <Label htmlFor="storages">Storage Capacity</Label>

        <Select id="storages" onChange={handleChangeStorage} value={storage}>
          {storages.map((storage) => (
            <option key={storage.code} value={storage.code}>
              {storage.name}
            </option>
          ))}
        </Select>
      </Container>

      <StyledButton
        disabled={loading}
        onClick={() =>
          addToCart({
            id,
            color,
            storage,
            brand,
            model,
            img,
            colorName: colors.find((c) => c.code === color).name,
            storageName: storages.find((s) => s.code === storage).name,
            price,
          })
        }
      >
        Add to cart
      </StyledButton>
    </StyledActions>
  );
};

const Label = styled.label`
  margin-right: 10px;
  font-weight: bold;
`;

const Select = styled.select`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

const StyledActions = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;
