import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {ProductApi, productType} from "../OurProductApi/ProductApi";

function Topcategory() {
  useEffect(() => {
    AOS.init({
        once:true
    });
  }, []);

  const [data, setData] = useState<productType[]>([]);

  useEffect(() => {
    ProductApi().then((data) => setData(data));
  }, []);

  console.log("products", data);

  const limitedData = data.slice(0, 4);

  return (
    <div className="mt-8">
      <div className="font-[sans-serif] p-4 mx-auto max-w-[1400px]">
        <div className="flex justify-center items-center mb-6 sm:mb-8">
          <h2 className=" text-xl sm:text-3xl font-extrabold text-textcolor">
            TOP CATEGORY
          </h2>
    
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 ">
          {limitedData.length > 0 ? (
            limitedData.map((item: productType, index: number) => (
              <div
                key={index}
                data-aos="flip-left"
                className="group overflow-hidden cursor-pointer relative shadow-2xl hover:shadow-textcolor rounded-xl"
              >
                <div className="bg-gray-100 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt="Product"
                    className="w-full h-auto aspect-[1/1] object-cover"
                  />
                </div> 


                <div className="flex gap-2 h-20 w-32 sm:w-32 md:w-52 lg:w-52 absolute px-4 pt-3 z-10
                rounded-xl
                left-4
                bottom-2
           max-lg:bottom-2 max-lg:py-3  max-lg:bg-black/60 bg-black/60">
       <h2 className=" text-lg sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-white truncate">
         {item.category}
       </h2>
</div>


              </div>



            ))

          ) : (
            <p>Product is not available</p>
          )}
        </div>
      </div>
    </div>
  );
}



export default Topcategory;