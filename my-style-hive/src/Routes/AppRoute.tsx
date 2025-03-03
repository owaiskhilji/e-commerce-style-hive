import { BrowserRouter, Routes, Route } from "react-router";
import Home from  '../pages/Home';
import Productlist from  '../pages/Productlist';
import Category from  '../pages/Category';
import Productdetail from  '../pages/Productdetail';
import Productsave from  '../pages/Productsave';



export default function AppRoute(){
    return (
        <div>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/productlist" element={<Productlist/>} />
      <Route path="/c/:category" element={<Category/>} />
      <Route path="/productdetail/:id" element={<Productdetail/>} />
      <Route path="/savedproduct" element={<Productsave/>} />
    </Routes>
  </BrowserRouter>
        </div>
    )
}