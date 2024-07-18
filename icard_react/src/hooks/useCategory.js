
import { useState, useCallback } from "react";
import { getCategoriesApi } from "../api/category";

export function useCategory() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [categories, setCategories] = useState(null);

    const getCategories = useCallback(async () => {
        try {
            setLoading(true);
            const response = await getCategoriesApi();
            setCategories(response);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        loading,
        error,
        categories, 
        getCategories,
    };
}
//lo cambie para que no de error