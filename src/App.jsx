import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductListPage } from "./pages/ProductListPage";
import { Header } from "./components/Header";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";
import { ProductsProvider } from "./context/ProductsContext";

const App = () => {
  return (
    <ProductsProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<ProductListPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
          </Routes>
        </div>
      </Router>
    </ProductsProvider>
  );
};

export default App;
