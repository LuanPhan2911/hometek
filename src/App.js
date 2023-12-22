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
import Rate from "./Pages/Admin/Rating/Rate";
import RateUpdate from "./Pages/Admin/Rating/RateUpdate";
import Order from "./Pages/Admin/Order/Order";
import OrderUpdate from "./Pages/Admin/Order/OrderUpdate";
import Voucher from "./Pages/Admin/Voucher/Voucher";
import VoucherCreate from "./Pages/Admin/Voucher/VoucherCreate";
import VoucherUpdate from "./Pages/Admin/Voucher/VoucherUpdate";

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
            <Route path="san-pham/them" element={<ProductCreate />}></Route>

            <Route path="khach-hang" element={<Customer />}></Route>

            <Route path="blog" element={<Blog />}></Route>
            <Route path="blog/them" element={<BlogCreate />}></Route>
            <Route path="blog/cap-nhat" element={<BlogUpdate />}></Route>
            <Route path="danh-gia" element={<Rate />}></Route>
            <Route path="danh-gia/cap-nhat" element={<RateUpdate />}></Route>

            <Route path="don-hang" element={<Order />}></Route>
            <Route path="don-hang/cap-nhat" element={<OrderUpdate />}></Route>

            <Route path="khuyen-mai" element={<Voucher />}></Route>
            <Route path="khuyen-mai/them" element={<VoucherCreate />}></Route>
            <Route
              path="khuyen-mai/cap-nhat"
              element={<VoucherUpdate />}
            ></Route>
          </Route>

          {/* endluan */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
