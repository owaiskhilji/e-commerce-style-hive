import axios from "axios"

export interface productType{
    id: number;
    title:string;
    image:string;
    description:string;
    price:number;
    category:string;
    quantity : number
}
export async function ProductApi(){
    try{
    const response = await axios.get("https://fakestoreapi.com/products")
    return response.data
}
catch(err){
    console.log("api error",err)
}
}