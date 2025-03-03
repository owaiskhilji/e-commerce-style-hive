import Crousel from '../Components/Homecomponents/Crousel';
import ProductCart from '../Components/Homecomponents/ProductCart';
import Topcategory from '../Components/Homecomponents/Topcategory';
import Banner from '../Components/Homecomponents/Banner';
import Topsellerproduct from '../Components/Homecomponents/Topsellerproduct';
import Contactus from  '../Components/Homecomponents/Contactus';


export default function Home(){
    return(
        <div>
       <Crousel/>
        <Topcategory/>
        <ProductCart/>
        <Banner/>
        <Topsellerproduct/>
        <Contactus/>
        </div>
    )
}