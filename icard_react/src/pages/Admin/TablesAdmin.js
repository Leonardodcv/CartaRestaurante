import React, { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';
import { HeaderPage, TableTablesAdmin } from "../../components/Admin";
import { useTable } from '../../hooks';

export function TablesAdmin() {
    const [showmodal, setShowModal] = useState(false);
    
    const { loading, error, tables, getTables } = useTable();

    useEffect(() => {
        getTables();
    }, []); // Asegúrate de que useEffect solo se ejecute una vez al montar
    console.log(tables);

    return (
        <>
            <HeaderPage title="Mesas" btnTitle="Crear nueva mesa" />

            {loading ? (
                <Loader active inline="centered">
                    Cargando...
                </Loader>
            ) : (
                <TableTablesAdmin tables={tables} />
            )}
        </>
    ); 
}
