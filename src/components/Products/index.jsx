import { Route, Routes } from "react-router-dom";
import ProductList from "./pages";

ProductFeature.propTypes = {};

function ProductFeature(props) {
  // const match = useMatch("/products/*");
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductList />} exact={true} />
      </Routes>
    </div>
  );
}

export default ProductFeature;
