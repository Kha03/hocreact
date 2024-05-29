import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

Product.propTypes = {
  data: PropTypes.object,
};
Product.defaultProps = {
  data: {},
};
function Product({ data }) {
  return (
    <Box p={1}>
      <Box component="img" width="100%" height={100}></Box>
      <Typography>{data.name}</Typography>
      <Typography>{data.salePrice}</Typography>
    </Box>
  );
}

export default Product;
