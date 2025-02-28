import React, { useState, useEffect } from "react";
import {ProductApi, productType} from "../OurProductApi/ProductApi";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data , setdata] = useState<productType[]>([])
  const [category , setcategory] = useState<string>("")
  let timeoutId: NodeJS.Timeout;

  const columns = 10;
  const categoryWidth = 180;
  const containerWidth = Math.min(data.length * categoryWidth, columns * categoryWidth);

  const handleMouseEnter = () => {
    clearTimeout(timeoutId); 
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 300); 
  };


  useEffect(()=>{
 ProductApi().then(data=>setdata(data) )
 
 },[])


  return (
    <div className="">
      <div
        className="relative w-fit h-fit"
        onMouseOver={handleMouseEnter}
        onMouseOut={handleMouseLeave}
      >
        {/* Button */}
        <a href="#" className="relative text-textcolor text-lg font-semibold">
          Category
          <span
            className={`absolute -bottom-2 left-0 right-0 h-1 bg-black rounded-full transition-transform duration-300 ease-out ${
              isOpen ? "scale-x-100" : "scale-x-0"
            }`}
          />
        </a>

        {/* Dropdown */}
        {isOpen && (
          <div
            className="absolute left-1/2 top-12 bg-white text-black p-4 shadow-xl rounded-lg w-[1000px] transition-all duration-300 ease-out"
            style={{
              transform: isOpen ? "translateY(0) translateX(-50%)" : "translateY(15px) translateX(-50%)",
              opacity: isOpen ? 1 : 0,
              width: `${containerWidth}px`
            }}
          >
            {/* Dropdown Arrow */}
            <div className="absolute left-1/2 -top-2 h-4 w-4 -translate-x-1/2 rotate-45 bg-white"></div>



            <div className=" grid gap-4"
              style={{
                gridTemplateColumns: `repeat(auto-fill, minmax(${categoryWidth}px, 1fr))`, // ✅ Auto-adjust grid columns
              }}>
            {
    data.length>0 ?(
        data.map((item:productType,index:number)=>(
        <div  key={index}>
              <a href={`/c/${category}`}
              onClick={()=>setcategory(item.category)}
              className="text-black block text-lg hover:underline py-2 border-b-2">
                {item.category}
              </a>
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
   
   
   
   
   
   
   
   )}
      </div>
    </div>
  );
};

export default Dropdown;



