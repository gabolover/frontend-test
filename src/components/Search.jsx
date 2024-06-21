import { useState } from "react";
import styled from "styled-components";

export const Search = ({ handleSearch, handleFilter, filter }) => {
  const [value, setValue] = useState("");
  const [filterValue, setFilterValue] = useState(filter);

  const handleChange = (e, filter) => {
    setValue(e.target.value);
    handleSearch(e.target.value, filter);
  };

  const handleChangeFilter = (e) => {
    setFilterValue(e.target.value);
    handleFilter(e.target.value);
  };
  return (
    <StyledDiv>
      <StyledInput
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={value}
      />

      <Container>
        <Label htmlFor="filter">Filter by</Label>
        <Select id="filter" onChange={handleChangeFilter} value={filterValue}>
          <option value="model">Model</option>
          <option value="brand">Brand</option>
        </Select>
      </Container>
    </StyledDiv>
  );
};

const StyledInput = styled.input`
  padding: 10px;
  outline: none;
`;

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

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;
