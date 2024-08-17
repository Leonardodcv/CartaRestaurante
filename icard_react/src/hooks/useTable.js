import { useState, useCallback } from "react";
import { getTablesApi } from "../api/table";
import { useAuth } from "./useAuth";

export function useTable(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tables, setTables] = useState(null);
    const { auth } = useAuth();

    const getTables = useCallback(async () => {
        try {
            setLoading(true);
            const response = await getTablesApi(auth.token);
            setTables(response);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [auth.token]);

    return {
        loading,
        error,
        tables,
        getTables,
    };
}
