import { useState, useCallback } from "react";
import { getCategoriesApi, addCategoryApi } from "../api/category";
import { useAuth } from "./";

export function useCategory() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [categories, setCategories] = useState(null);
    const { auth } = useAuth();
 
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

    const addCategory = async (data) => {
        try {
            setLoading(true);
            await addCategoryApi(data, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    return {
        loading,
        error,
        categories, 
        getCategories,
        addCategory,
    };
}
//lo cambie para que no de error