import { Box, Typography } from "@mui/material";
import CategoryApi from "api/CategoryApi";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

CategoryFilter.propTypes = {
  onChange: PropTypes.func,
};

function CategoryFilter({ onChange }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      const listCate = await CategoryApi.getAll();
      setCategories(
        listCate.map((x) => ({
          id: x.id,
          name: x.name,
        }))
      );
    })();
  }, []);
  return (
    <Box>
      <Typography>Danh mục sản phẩm</Typography>
      <ul>
        {categories.map((category) => (
          <li
            style={{ cursor: "pointer", marginTop: "4px" }}
            key={category.id}
            onClick={() => onChange(category.id, category.name)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default CategoryFilter;
