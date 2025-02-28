import { useState ,useEffect} from "react";
import { useNavigate } from "react-router"
import {ProductApi, productType} from "../OurProductApi/ProductApi";
 import AOS from "aos"
import "aos/dist/aos.css";


function ProductCart() {
useEffect(() => {
        AOS.init({
          duration: 1000, 
           });
      }, []);

 const [data , setdata] = useState<productType[]>([])
const navigate = useNavigate()
 useEffect(()=>{
ProductApi().then(data=>setdata(data) )

},[])

 console.log("products",data )

const limitedData = data.slice(0,8)

 return (
    <div className="mt-10">
        <div className="font-[sans-serif] p-4 mx-auto max-w-[1400px]">
        <div className="flex justify-between items-center mb-6 sm:mb-8">
  <h2 className="text-xl sm:text-3xl font-extrabold text-textcolor">
    OUR PRODUCTS
  </h2>
  <button 
 onClick={()=>navigate("/productlist")}
  className="font-semibold bg-backgroundcolor hover:bg-textcolor w-28 sm:w-32 md:w-52 lg:w-52 text-xs sm:text-base md:text-lg lg:text-lg  text-textcolor hover:text-white px-4 py-2 rounded-lg shadow-lg">
    Explore More 
  </button>
</div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
   
   {
    limitedData.length>0 ?(
        limitedData.map((item:productType,index:number)=>(
            
        <div 
        key={index} 
        data-aos="fade-up"

        className="group overflow-hidden cursor-pointer relative shadow-2xl hover:shadow-textcolor">
        <div className="bg-gray-100 w-full overflow-hidden">
          <img src={item.image} alt="Product 1"
            className="aspect-[3/4] w-full object-cover object-top hover:scale-110 transition-all duration-700" />
        </div>

        <div className="p-4 relative">
          <div className="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10
          transition-all duration-500
          left-0 right-0
          group-hover:bottom-20
          lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100
          max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60">
            <button type="button" title="Add to wishlist" className="bg-transparent outline-none border-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-800 w-5 h-5 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </button>
            <button type="button" title="Add to cart" className="bg-transparent outline-none border-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-800 w-5 h-5 inline-block" viewBox="0 0 512 512">
                <path
                  d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                  data-original="#000000"></path>
              </svg>
            </button>
          </div>
          <div className="z-20 relative">
            <h6 className="text-sm font-semibold text-textcolor truncate">{item.perfume}</h6>
            <h6 className="text-sm text-textcolor mt-2">${item.price}</h6>
          </div>
        </div>
      </div>

        ))
    ):(
       
        <p>
        Product is not avalible
        </p>
    )
   }

      </div>
    </div>
    </div>
  )
}

export default ProductCart