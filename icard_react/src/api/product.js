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

export async function addProductApi(data, token){
    try {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("prices", data.prices);
        formData.append("category", data.category);
        formData.append("active", data.active);
        formData.append("image", data.image);
        const url = `${BASE_API}/api/products/`;
        const params = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body:formData,
        }
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function updateProductApi(id, data, token){
    try {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("prices", data.prices);
        formData.append("category", data.category);
        formData.append("active", data.active);        
        if(data.image) formData.append("image", data.image);
        const url = `${BASE_API}/api/products/${id}/`;
        const params = {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body:formData,
        }
        const response = await fetch(url, params);
        const result = await response.json();
        //console.log(result);
        return result;
    } catch (error) {
        throw error;
    }
}

export async function deleteProductApi(id, token){
    try{
        const url = `${BASE_API}/api/products/${id}/`;
        const params = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            },
        };
        const response = await fetch(url, params);
        const result = await response.json();
        //console.log(result);
        return result;
    }catch{

    }
}
