import './App.css';
import Navbar from './Components/Homecomponents/Navbar';
 import Dropdown from './Components/Homecomponents/Dropdown';
import Home from  './pages/Home';
import Productlist from  './pages/Productlist';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
    
      {/* <Home/> */}
      <Productlist/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Dropdown/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>
  </div>
  );
}

export default App;
