import { BrowserRouter, Routes, Route } from "react-router";
import Home from  '../pages/Home';
import Productlist from  '../pages/Productlist';
import Category from  '../pages/Category';



export default function AppRoute(){
    return (
        <div>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/productlist" element={<Productlist/>} />
      <Route path="/c/:category" element={<Category/>} />
    </Routes>
  </BrowserRouter>
        </div>
    )
}