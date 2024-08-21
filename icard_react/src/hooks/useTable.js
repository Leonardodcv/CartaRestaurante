import { useState, useCallback } from "react";
import { getTablesApi, addTableApi, updateTableApi, deleteTableApi } from "../api/table";
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

    const addTable = async (data) => {
        try {
            setLoading(true);
            await addTableApi(data, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }finally{
            setLoading(false);
        }
    }

    const updateTable = async (id, data) => {
        try {
            setLoading(true);
            await updateTableApi(id, data, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }finally{
            setLoading(false);
        }
    }

    const deleteTable = async (id) => {
        try {
            setLoading(true);
            await deleteTableApi(id, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }finally{
            setLoading(false);
        }
    }

    return {
        loading,
        error,
        tables,
        getTables,
        addTable,
        updateTable,
        deleteTable,
    };
}
