import { getMeApi } from "../api/user";

export function useUser(){
    const getMe = async (token) => {
        try {
            const response = await getMeApi(token);
            return response;
        } catch (error) {
            throw error;
        }
    };

    return {
        getMe,
    };
}

/*import { getMeApi } from "../api/user";
import { useCallback } from "react";

export function useUser() {
    const getMe = useCallback(async (token) => {
        try {
            const response = await getMeApi(token);
            return response;
        } catch (error) {
            throw error;
        }
    }, []);

    return {
        getMe,
    };
}*/
