import React, { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';
import { HeaderPage, TableTablesAdmin, AddEditTableForm } from "../../components/Admin";
import { ModalBasic} from "../../components/Common";
import { useTable } from '../../hooks';

export function TablesAdmin() {
    const [showmodal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState(null);
    const [contentModal, setContentModal] = useState(null);
    const [refetch, setRefetch] = useState(false);
    const { loading, error, tables, getTables } = useTable();

    useEffect(() => {
        getTables();
    }, [refetch]); // Asegúrate de que useEffect solo se ejecute una vez al montar
    
    const openCloseModal = () => setShowModal((prev) => !prev);
    const onRefetch =() => setRefetch((prev) => !prev)

    const addTable = () => {
        setTitleModal("Crear mesa");
        setContentModal(<AddEditTableForm onClose={openCloseModal} onRefetch={onRefetch}/>);
        openCloseModal();
    }

    const updateTable = (data) => {
        setTitleModal("Actualizar mesa");
        setContentModal(
            <AddEditTableForm 
                onClose={openCloseModal} 
                onRefetch={onRefetch}
                table={data}
            />
        );
        openCloseModal();
    }

    return (
        <>
            <HeaderPage
                title="Mesas" 
                btnTitle="Crear nueva mesa" 
                btnClick={addTable}
            />

            {loading ? (
                <Loader active inline="centered">
                    Cargando...
                </Loader>
            ) : (
                <TableTablesAdmin tables={tables} updateTable={updateTable}/>
            )}
            <ModalBasic 
                show={showmodal}
                onClose={openCloseModal}
                title={titleModal}
                children={contentModal}
                />
        </>
    ); 
}
