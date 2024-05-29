import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import PropTypes from "prop-types";
import Product from "./Product";

ProductsList.propTypes = {
  data: PropTypes.array,
};
ProductsList.defaultProps = {
  data: [],
};
function ProductsList({ data }) {
  return (
    <Box height={"94%"}>
      <Grid2 container spacing={0}>
        {data.map((product) => (
          <Grid2 key={product.id} xs={12} sm={6} md={4} lg={3} mt={3}>
            <Product data={product} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default ProductsList;
