import { Box, Container, Pagination, Paper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import productsApi from "api/productsApi";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LabelFilter from "../components/LabelFilter";
import ProductFilter from "../components/ProductFilter";
import ProductsList from "../components/ProductsList";
import ProductSort from "../components/ProductSort";
import ProductsSkeleton from "../components/ProductsSkeleton";
import "./style.scss";
import queryString from "query-string";
ProductList.propTypes = {};

function ProductList(props) {
  const [productList, setProductList] = useState([]);
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 9,
      _sort: params._sort || "salePrice:ASC",
      isPromotion: params.isPromotion === "true",
      isFreeShip: params.isFreeShip === "true",
    };
  }, [location.search]);
  const [loading, setLoading] = useState(true);
  const history = useNavigate();
  const [pagination, setPagination] = useState({
    limit: 9,
    page: 1,
    total: 10,
  });
  // const [filters, setFilters] = useState({
  //   ...queryParams,
  //   _page: Number.parseInt(queryParams._page) || 1,
  //   _limit: Number.parseInt(queryParams._limit) || 9,
  //   _sort: queryParams._sort || "salePrice:ASC",
  // });

  // useEffect(() => {
  //   history({ search: `?${queryString.stringify(filters)}` });
  // }, [history, filters]);
  useEffect(() => {
    (async () => {
      try {
        const response = await productsApi.getAll(queryParams);
        const { data, pagination } = response;
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to fetch product list:", error);
      } finally {
        // Thêm thời gian trễ để chắc chắn thấy được skeleton loaders
        setTimeout(() => {
          setLoading(false);
        }, 300); // Thời gian trễ 2 giây
      }
    })();
  }, [queryParams]);
  const handlePageChange = (e, page) => {
    // setFilters({
    //   ...filters,
    //   _page: page,
    // });
    const filters = {
      ...queryParams,
      _page: page,
    };
    history({ search: queryString.stringify(filters) });
  };
  const handleSort = (currentSort) => {
    // setFilters({
    //   ...filters,
    //   _sort: currentSort,
    // });
    const filters = {
      ...queryParams,
      _sort: currentSort,
    };
    history({ search: queryString.stringify(filters) });
  };
  const handleFilter = (newFilter) => {
    // setFilters((preFilter) => ({
    //   ...preFilter,
    //   ...newFilter,
    // }));
    const filters = {
      ...queryParams,
      ...newFilter,
    };
    history({ search: queryString.stringify(filters) });
  };
  const handleLabelFilter = (newFilter) => {
    // setFilters(newFilter);
    history({ search: queryString.stringify(newFilter) });
  };
  return (
    <Box>
      <Container>
        <Grid2 container spacing={2}>
          <Grid2 className="grid-left">
            <Paper>
              <ProductFilter filters={queryParams} onChange={handleFilter} />
            </Paper>
          </Grid2>
          <Grid2 className="grid-right" height={"100vh"}>
            <Paper sx={{ height: "100%" }}>
              <ProductSort
                currentSort={queryParams._sort}
                onChange={handleSort}
              />
              <LabelFilter Filters={queryParams} onChange={handleLabelFilter} />
              {loading ? (
                <ProductsSkeleton length={9} />
              ) : (
                <ProductsList data={productList} />
              )}
              <Box display="flex" justifyContent={"center"}>
                {" "}
                <Pagination
                  count={Math.ceil(pagination.total / pagination.limit)}
                  color="primary"
                  showFirstButton
                  showLastButton
                  onChange={handlePageChange}
                />
              </Box>
            </Paper>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

export default ProductList;
