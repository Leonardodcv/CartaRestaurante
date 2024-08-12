import { useState, useCallback } from "react";
import { useAuth } from "./useAuth";
import { getProductsApi, addProductApi } from "../api/product";

export function useProduct(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] =useState(null);
    const {auth} = useAuth();



    const getProducts = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await getProductsApi();
            setProducts(response);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, []);

    const addProduct = async (data) => {
        try {
            setLoading(true);
            await addProductApi(data, auth.token);
        } catch (error) {
            setError(error);
        }finally{
            setLoading(false)
        }
    }

    return {
        loading,
        error,
        products,
        getProducts,
        addProduct,
    };
}    