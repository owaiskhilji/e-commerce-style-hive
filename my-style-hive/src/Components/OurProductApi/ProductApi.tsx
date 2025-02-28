import axios from "axios"

export interface productType{
    perfume:string;
    image:string;
    description:string;
    price:string;
    category:string;
}
export async function ProductApi(){
    const response = await axios.get("https://67be0734321b883e790edf03.mockapi.io/api/v1/perfumes/perfumedata")
try{
    return response.data
}
catch(err){
    console.log("api error",err)
}
}