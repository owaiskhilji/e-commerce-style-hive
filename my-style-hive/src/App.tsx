import './App.css';
import {useState ,useEffect} from "react"
import Navbar from './Components/Homecomponents/Navbar';
import AppRoute from  './Routes/AppRoute';
import Footer from './Components/Footer';

function App() {
//   const [countvalue,setcountvalue] = useState<number|null>(null)
//   const [getdataLoaded , setgetdataLoaded] = useState<boolean>(false)
 
  

// useEffect(()=>{
// const updateCount = localStorage.getItem("updatecount")
// if (updateCount) {
//   setcountvalue(JSON.parse(updateCount))
// }
// setgetdataLoaded(true)

// },[])

// useEffect(()=>{

// if(countvalue ){
//   localStorage.setItem("updatecount",JSON.stringify(countvalue))
// }
// },[countvalue,getdataLoaded ])




  return (
    <div>
      
      <Navbar/>
<AppRoute/>    
      <Footer/>
  </div>
  );
}

export default App;
