import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, TextField, Typography } from "@mui/material";

PriceFilter.propTypes = {
  onChange: PropTypes.func,
};

function PriceFilter({ onChange }) {
  const [values, setValues] = useState({
    salePrice_gte: "",
    salePrice_lte: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    if (onChange) {
      onChange(values);
    }
    setValues({
      salePrice_gte: "",
      salePrice_lte: "",
    });
  };
  return (
    <Box>
      <Typography variant="subtitle2">Giá</Typography>
      <Box>
        <TextField
          placeholder="0"
          size="small"
          variant="standard"
          sx={{ ml: "8px" }}
          value={values.salePrice_gte}
          name="salePrice_gte"
          onChange={handleChange}
        />
        <TextField
          placeholder="0"
          size="small"
          variant="standard"
          sx={{ mt: "8px", ml: "8px" }}
          value={values.salePrice_lte}
          name="salePrice_lte"
          onChange={handleChange}
        />
      </Box>
      <Button variant="contained" sx={{ mt: "12px" }} onClick={handleSubmit}>
        Lọc theo giá
      </Button>
    </Box>
  );
}

export default PriceFilter;
