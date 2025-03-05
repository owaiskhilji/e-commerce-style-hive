import {useState,useEffect,useContext} from "react"
 import Rater from "react-rater";
import axios from "axios";
 import "react-rater/lib/react-rater.css";
 import { useParams } from "react-router-dom"
//  import {countContext} from "../CountContext/ContextApi"


export interface ProductType {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }
  




const Productdetail = () => {
 const [data, setData] = useState<ProductType | null>(null)
 const [count, setcount] = useState<number>(0)

 const { id } = useParams()
//  const value  = useContext(countContext)
 
 
  useEffect(()=>{
if(!id) return
 axios.get(`https://fakestoreapi.com/products/${id}`)
 .then((res:any) => setData(res.data))
 .catch(err =>console.log(err))
 },[id])
 


  function addtocarthandle(){
    setcount(count + 1)
    const updateValue = count+1
    
    if(data){
      const existingData = localStorage.getItem('addtocart');
      const parsedData = existingData ? JSON.parse(existingData) : [];
      if(parsedData.some((item:ProductType)=>item.id === data.id)){
        alert("this cart already add")
        return 
      }
      
      parsedData.push(data);
      const saveData = JSON.stringify(parsedData);
      localStorage.setItem('addtocart', saveData);

      const existingValue = localStorage.getItem('cartadd');
      const newCartValue = existingValue ? JSON.parse(existingValue) + 1 : 1; // Handle null case

      localStorage.setItem('cartadd', JSON.stringify(updateValue));
      localStorage.setItem('cartAdd', JSON.stringify(newCartValue));
      return data;
    }
  }





if(!data)return <div>Loading......</div>




//  const [images, setImages] = useState({
//   img1 : "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
//   img2 : "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
//   img3 : "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
//   img4 : "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png"
// })

// const [activeImg, setActiveImage] = useState(images.img1)



return (
  <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center mt-14'>
  
      <div className='flex flex-col gap-6 lg:w-2/5'>
          <img src={data.image} alt="data" className='w-full h-full aspect-square object-cover rounded-xl'/>
          {/* <div className='flex flex-row justify-between h-24'>
              <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
              <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)}/>
              <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)}/>
              <img src={images.img4} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)}/>
          </div> */}
      </div>
      {/* ABOUT */}
      <div className='flex flex-col ml-4 gap-4 lg:w-2/4'>
          <div>
              <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-textcolor'>{data.title}</h1>
              <span className='text-lg sm:text-xl md:text-2xl  text-backgroundcolor font-semibold'>{data.category}</span>
          </div>
              <Rater 
              total={5} 
              rating={data.rating.rate} 
              interactive={false} 
              />
          <p className='text-sm sm:text-lg md:text-lg text-textcolor'>
          {data.description}
          </p>
          <h6 className='text-textcolor text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold'>${data.price}</h6>
          <div className='flex flex-row items-center gap-12'>
              <div className='flex flex-row items-center'>
              <button 
            className="font-semibold bg-backgroundcolor hover:bg-textcolor w-32 sm:w-44 md:w-52 lg:w-52 text-xs sm:text-base md:text-lg lg:text-lg  text-textcolor hover:text-white px-4 py-2 rounded-lg shadow-lg">
                  Buy Now 
                       </button>
              </div>
              <button 
                    onClick={()=>addtocarthandle()}
                    className="font-semibold bg-backgroundcolor hover:bg-textcolor w-32 sm:w-44 md:w-52 lg:w-52 text-xs sm:text-base md:text-lg lg:text-lg  text-textcolor hover:text-white px-4 py-2 rounded-lg shadow-lg">
                     Add to Cart 
                    </button>
          </div>
      </div>
  </div>
)

};

export default Productdetail;