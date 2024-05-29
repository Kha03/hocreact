import { Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";

ProductSort.propTypes = {
  currentSort: PropTypes.string,
  onChange: PropTypes.func,
};

function ProductSort({ currentSort, onChange }) {
  const handleChange = (event, newValue) => {
    if (onChange) {
      onChange(newValue);
    }
  };
  return (
    <Tabs value={currentSort} onChange={handleChange}>
      <Tab label="Giá tăng dần" value={"salePrice:ASC"} />
      <Tab label="Giá giảm dần" value={"salePrice:DESC"} />
    </Tabs>
  );
}

export default ProductSort;
