// import Swal from "sweetalert2"
import { productType } from "../OurProductApi/ProductApi";

export function Savedproduct({item}:{item:productType}){
    function saveProducts(){
    if(item){
        const existingData:any = localStorage.getItem('saveData');
        const parsedData:productType[] = existingData ? JSON.parse(existingData) : [];
        if(parsedData.some((data:productType)=>data._id === item._id)){
          // Swal.fire({
          //   title: "Product Already Saved!",
          //   text: "You have already added this product to your wishlist.",
          //   icon: "info",
          //   confirmButtonText: "OK",
          //   confirmButtonColor: "#FF5733", 
          //   background: "#f9f9f9", 
          //   color: "#333", 
          //   timer: 2000, // Auto-close after 2 seconds
          //   showClass: {
          //     popup: "animate__animated animate__bounceIn",
          //   },
          //   hideClass: {
          //     popup: "animate__animated animate__fadeOutDown",
          //   },
          // });
        alert("product already saved")

        return
        }
        parsedData.push(item);
        const saveData:string = JSON.stringify(parsedData);
        localStorage.setItem('saveData', saveData);
        // Swal.fire({
        //   position: "top-end",
        //   icon: "success",
        //   title: "Your Product has been saved",
        //   showConfirmButton: false,
        //   timer: 1500
        // });
        alert("product saved")
        return saveData
      
      }
    }

    
    return(
        <div>
            <button
            onClick={()=>saveProducts()}
            type="button" title="Add to wishlist" className="shadow-md  bg-transparent outline-none border-1 border-textcolor">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-800 w-5 h-5 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </button>
        </div>
    )
} 