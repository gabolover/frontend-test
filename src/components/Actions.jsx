import { useState } from "react";
import styled from "styled-components";
import { API_URL } from "../config";

export const Actions = ({ id, options }) => {
  const { colors, storages } = options;
  const [color, setColor] = useState(colors[0].code);
  const [storage, setStorage] = useState(storages[0].code);

  const handleChangeColor = (e) => {
    setColor(+e.target.value);
  };
  const handleChangeStorage = (e) => {
    setStorage(+e.target.value);
  };

  const addToCart = async () => {
    const response = await fetch(`${API_URL}/api/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        colorCode: color,
        storageCode: storage,
      }),
    });

    const data = await response.json();
    console.log(data);

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({
      id,
      color,
      storage,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div>
      <h2>Actions</h2>
      <Container>
        <Label htmlFor="colors">Colors</Label>
        <Select id="colors" onChange={handleChangeColor} value={color}>
          {
            // Iterar sobre las opciones de colores
            colors.map((color) => (
              <option key={color.code} value={color.code}>
                {color.name}
              </option>
            ))
          }
        </Select>
        <Label htmlFor="storages">Colores</Label>

        <Select id="storages" onChange={handleChangeStorage} value={storage}>
          {
            // Iterar sobre las opciones de colores
            storages.map((storage) => (
              <option key={storage.code} value={storage.code}>
                {storage.name}
              </option>
            ))
          }
        </Select>
      </Container>

      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

const Label = styled.label`
  margin-right: 10px;
  font-weight: bold;
`;

// Estilo para el select
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
