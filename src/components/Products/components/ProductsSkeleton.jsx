import React from "react";
import PropTypes from "prop-types";
import { Box, Skeleton } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

ProductsSkeleton.propTypes = {
  length: PropTypes.number,
};
ProductsSkeleton.defaultProps = {
  length: 9,
};
function ProductsSkeleton({ length }) {
  return (
    <Box>
      <Grid2 container spacing={0}>
        {Array.from(new Array(length)).map((x, index) => (
          <Grid2 key={index} xs={12} sm={6} md={4} lg={3} mt={3}>
            <Box p={1}>
              <Skeleton
                animation="wave"
                variant="rect"
                width="100%"
                height={100}
              />
              <Skeleton animation="wave" width="80%" />
              <Skeleton animation="wave" width="60%" />
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default ProductsSkeleton;
