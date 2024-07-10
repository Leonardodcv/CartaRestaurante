import { useState } from "react";
import { getMeApi } from "../api/user";

export function useUser(){
    const [loadins, setloading] = useState(true);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState(null)


    const getMe = async (token) => {
        try {
            const response = await getMeApi(token);
            return response;
        } catch (error) {
            throw error;
        }
    };
    const getUsers= async() => {
        try {
            
        } catch (error) {
            
        }
    }

    return {
        getMe,
    };
}

