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
import Blog from "./Pages/Admin/Blog/Blog";
import BlogCreate from "./Pages/Admin/Blog/BlogCreate";
import BlogUpdate from "./Pages/Admin/Blog/BlogUpdate";

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
            <Route path="san-pham" element={<Product />}></Route>
            <Route path="san-pham/create" element={<ProductCreate />}></Route>

            <Route path="khach-hang" element={<Customer />}></Route>

            <Route path="blog" element={<Blog />}></Route>
            <Route path="blog/create" element={<BlogCreate />}></Route>
            <Route path="blog/update" element={<BlogUpdate />}></Route>

            {/* <Route path="don-hang" element={<Product />}></Route>

            <Route path="khuyen-mai" element={<Customer />}></Route>
            <Route path="danh-gia" element={<Customer />}></Route> */}
          </Route>

          {/* endluan */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
