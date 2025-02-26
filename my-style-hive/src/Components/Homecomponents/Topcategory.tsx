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
    dots: true,
    infinite: true, 
    speed: 5000, 
    slidesToShow: 3,
    slidesToScroll: 1, 
    initialSlide: 0,
    autoplay: true, 
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container mt-10 max-w-screen-xl mx-auto px-4">
      {/* Heading */}
      <div className="flex justify-center items-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-3xl font-extrabold text-textcolor">
          TOP CATEGORY
        </h2>
      </div>

      {/* Slider with spacing */}
      <Slider {...settings} className="px-2">
        {data.length > 0 ? (
          data.map((item: productType, index: number) => (
            <div
              key={index}
              className="w-auto px-2" // ✅ Space between slides added
            >
              <div className="w-[320px] h-[200px] sm:w-[400px] sm:h-[250px] group overflow-hidden cursor-pointer relative shadow-2xl hover:shadow-textcolor rounded-xl">
                {/* Image Container */}
                <div className="w-full h-full overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src={item.image}
                    alt="Product"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Category Text Overlay */}
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
