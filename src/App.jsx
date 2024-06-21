import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductListPage } from "./pages/ProductListPage";
import { Header } from "./components/Header";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";
import { ProductsProvider } from "./context/ProductsContext";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <ProductsProvider>
      <CartProvider>
        <Router>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<ProductListPage />} />
              <Route path="/product/:id" element={<ProductDetailsPage />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </ProductsProvider>
  );
};

export default App;
