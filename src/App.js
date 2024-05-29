import ProductFeature from "components/Products";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/products/*" element={<ProductFeature />} exact={true} />
      </Routes>
    </div>
  );
}

export default App;
