import React from "react";
import banner from "../../assests/silder_image/banner.png"




interface imageType{
    image:string;
    heading:string;
  }

  const bannerData:imageType ={
    image:banner,
    heading: " Discover the Essence of Luxury"
  }


const Banner = () => {
  return (
    <div className="mt-20 relative w-80 sm:w-[600px] md:w-[700px] lg:w-[1400px] mx-auto h-52 sm:h-64 lg:h-52 xl:h-96 bg-cover bg-center rounded-xl overflow-hidden shadow-lg">
    <img src={bannerData.image} className="w-full h-full object-cover"/>
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
      
      {/* Heading */}
      <h2 className="text-white text-lg sm:text-4xl md:text-4xl lg:text-4xl font-bold">
        {bannerData.heading}
      </h2>

      {/* Button */}
      <button className="mt-4 text-xs sm:text-sm md:text-md lg:text-xl px-2 py-2  sm:px-6 sm:py-3  md:px-6 md:py-2 lg:px-8 lg:py-4 bg-textcolor text-backgroundcolor font-semibold rounded-lg shadow-md transition">
        Shop Now
      </button>
    </div>
  </div>
  );
};

export default Banner;
