import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from "../../assests/silder_image/perofume_slider.png"
import slider2 from "../../assests/silder_image/per_sli2.png"
import slider3 from "../../assests/silder_image/per_sli3.png"

interface crouselSettings {
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  pauseOnHover: boolean;
  dots: boolean;
  infinite: boolean;
  speed: number;
}
interface imageType{
  image1:string;
  des:string;

}
const imageData :imageType[]=[ 
  {
  image1 : slider1,
   des:"Elevate Your Style - A Signature Scent for Trendsetters"
 },
  {
  image1 : slider2,
   des:"Unleash Confidence - A Fragrance That Defines You"
 },
  {
  image1 : slider3,
   des:"Luxury in Every Drop - A Must-Have for Fashion Icons"
 },
]



function Crousel() {

  const settings:crouselSettings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite looping
     speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Auto-play the carousel
    autoplaySpeed: 3000, // Auto-play speed in milliseconds
    pauseOnHover: true, // Pause auto-play on hover
  };

  return (
    <div className="w-full  mx-auto overflow-hidden">
    <Slider {...settings} className=' w-full'>
      {
        imageData.map((item:imageType, index:number) => (
         <div key={index} className="flex flex-col items-center justify-center border-4 border-textcolor ">
          <div >
            <img 
            src={item.image1} 
            alt={item.des} 
             className="w-full object-cover"
            />
            <div className="text-center py-5 bg-backgroundcolor shadow-sm" >
              <h3 className="text-sm sm:text-xl md:text-2xl lg:text-2xl font-bold ">{item.des}</h3>
            </div>
          </div>
</div>
        ))
      }
    </Slider>
    </div>
  );
}

export default Crousel;