import { useState, useCallback } from "react";
import { getProductsApi } from "../api/product";

export function useProduct(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] =useState(null);



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

    return {
        loading,
        error,
        products,
        getProducts,
    };
}    