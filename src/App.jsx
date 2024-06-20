import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductListPage } from "./pages/ProductListPage";
import { Header } from "./components/Header";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
