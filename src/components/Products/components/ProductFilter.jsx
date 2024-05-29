import { Box } from "@mui/material";
import PropTypes from "prop-types";
import CategoryFilter from "./Filter/CategoryFilter";
import PriceFilter from "./Filter/PriceFilter";
import CheckedFilter from "./Filter/CheckedFilter";

ProductFilter.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function ProductFilter({ filters, onChange }) {
  const handleFilter = (newCategoryId, newCategoryName) => {
    if (onChange) {
      onChange({
        "category.id": newCategoryId,
        "category.name": newCategoryName,
      });
    }
  };
  const handleChange = (values) => {
    if (onChange) {
      onChange(values);
    }
  };
  return (
    <Box>
      <CategoryFilter onChange={handleFilter} />
      <PriceFilter onChange={handleChange} />
      <CheckedFilter filters={filters} onChange={handleChange} />
    </Box>
  );
}

export default ProductFilter;
