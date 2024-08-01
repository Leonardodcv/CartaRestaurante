import { BASE_API } from "../utils/constans";

export async function getProductsApi(){
    try{
        const url = `${BASE_API}/api/products`;
        const response = await fetch(url);
        const result = await response.json();
        return result
    }catch(error){
        throw error;
        return null;
    }
}