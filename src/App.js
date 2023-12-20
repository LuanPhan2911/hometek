import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/Users/HomePage/HomePage";
import ProductPage from "./Pages/Users/ProductPage/ProductPage";
import CategoryPage from "./Pages/Users/ProductPage/CatogoryPage";
import ProductDetailPage from "./Pages/Users/ProductPage/ProductDetailPage";
import DashBoard from "./Pages/Admin/Dashboard";
import Category from "./Pages/Admin/Category/Category";
import Product from "./Pages/Admin/Products/Product";
import Customer from "./Pages/Admin/Customers/Customer";
import ProductCreate from "./Pages/Admin/Products/ProductCreate";
import CategoryCreate from "./Pages/Admin/Category/CategoryCreate";
import CategoryUpdate from "./Pages/Admin/Category/CategoryUpdate";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="*"
            element={
              <div>
                <h1>404 NOT FOUND</h1>
              </div>
            }
          />
          {/* <Route path="/yeu-thich" element={<Whishlist/>}/>
            <Route path="/gio-hang" element={<Cart/>}/> */}
          <Route path="/cua-hang" element={<ProductPage />} />
          <Route path="/cua-hang/:id" element={<ProductDetailPage />} />

          <Route path="/cua-hang/:cateid" element={<CategoryPage />}></Route>

          {/* luan */}
          <Route path="/admin" element={<DashBoard />}>
            <Route path="products" element={<Product />}></Route>
            <Route path="products/create" element={<ProductCreate />}></Route>
            <Route path="products/update" element={<Product />}></Route>

            <Route path="customers" element={<Customer />}></Route>
            <Route path="categories" element={<Category />}></Route>
            <Route
              path="categories/create"
              element={<CategoryCreate />}
            ></Route>
            <Route
              path="categories/update"
              element={<CategoryUpdate />}
            ></Route>
          </Route>

          {/* endluan */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
