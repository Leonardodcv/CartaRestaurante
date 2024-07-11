import { useState } from "react";
import { getMeApi, getUsersApi } from "../api/user";
import { useAuth} from "."
 
export function useUser(){
    const [loadins, setloading] = useState(true);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState(null)
    const {auth} = useAuth();


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
            setloading(true)
            const response = await getUsersApi(auth.token);
            setloading(false);
            setUsers(response);
        } catch (error) {
            setloading(false);
            setError(error);
        }
    }

    return {
        loadins,
        error,
        users,
        getMe,
        getUsers,
    };
}

