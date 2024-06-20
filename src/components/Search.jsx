import { useState } from "react";

export const Search = ({ products, handleSearch, handleFilter, filter }) => {
  const [value, setValue] = useState("");
  const [filterValue, setFilterValue] = useState(filter);

  const handleChange = (e, filter) => {
    setValue(e.target.value);
    handleSearch(e.target.value, filter);
  };

  const handleChangeFilter = (e) => {
    setFilterValue(e.target.value); // Actualizar el estado del filtro
    handleFilter(e.target.value); // Llamar a la función handleFilter
    console.log(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Ingrese el producto que desea buscar"
        onChange={handleChange}
        value={value}
      />

      <div>
        <label htmlFor="filter">Filtrar Por</label>
        <select id="filter" onChange={handleChangeFilter} value={filterValue}>
          <option value="model">Model</option>
          <option value="brand">Brand</option>
        </select>
      </div>
    </div>
  );
};
