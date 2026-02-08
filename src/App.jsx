import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import About from "./pages/About";

import DashboardLayout from "./dashboard/DashboardLayout";
import DashboardHome from "./dashboard/DashboardHome";
import DashboardProducts from "./dashboard/DashboardProducts";
import AddProduct from "./dashboard/AddProduct";

function App() {
  return (
    <Routes>
      {/* Public Site */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="products" element={<DashboardProducts />} />
        <Route path="add-product" element={<AddProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
