import Slider from "react-slick";
import { useState, useEffect } from "react";
import { ProductApi, productType } from "../OurProductApi/ProductApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Topcategory = () => {
  const [data, setData] = useState<productType[]>([]);

  useEffect(() => {
    ProductApi().then((data) => setData(data));
  }, []);

  console.log("products", data);

  const settings = {
    dots: false, 
    infinite: true, 
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    cssEase: "ease-in-out",
    centerMode: true,  // ✅ Centering enable kiya
    variableWidth: false, // ✅ Proper width maintain karega
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,  // ✅ Mobile par center hoga
          arrows: false, 
        },
      },
    ],
  };

  return (
    <div className="slider-container mt-10 max-w-full overflow-hidden mx-auto px-0"> 
      {/* Heading */}
      <div className="flex justify-center items-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-3xl font-extrabold text-textcolor">
          TOP CATEGORY
        </h2>
      </div>
      
      {/* Slider */}
      <Slider {...settings} className="mx-auto w-full">
        {data.length > 0 ? (
          data.map((item: productType, index: number) => (
            <div key={index} className="flex justify-center items-center mx-auto">  {/* ✅ Centering Fix */}
              <div className="w-64 h-64 sm:w-[400px] sm:h-[250px] group overflow-hidden cursor-pointer relative shadow-2xl hover:shadow-textcolor rounded-xl">
                <div className="w-full h-full overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src={item.image}
                    alt="Product"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="absolute bottom-3 left-4 bg-black/60 px-4 py-2 rounded-xl">
                  <h2 className="text-lg sm:text-2xl font-semibold text-white truncate">
                    {item.category}
                  </h2>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">Product is not available</p>
        )}
      </Slider>
    </div>
  );
};

export default Topcategory;
