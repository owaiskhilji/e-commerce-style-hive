import './App.css';
import Crousel from './Components/Homecomponents/Crousel';
import Navbar from './Components/Homecomponents/Navbar';
import ProductCart from './Components/Homecomponents/ProductCart';
import Topcategory from './Components/Homecomponents/Topcategory';
import Banner from './Components/Homecomponents/Banner';
import Topsellerproduct from './Components/Homecomponents/Topsellerproduct';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Crousel/>
      <Topcategory/>
      <ProductCart/>
      <Banner/>
      <Topsellerproduct/>
      <Footer/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
  </div>
  );
}

export default App;
