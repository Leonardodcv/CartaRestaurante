import React, {useEffect, useState} from 'react';
import { HeaderPage } from "../../components/Admin";
import { useTable } from '../../hooks';

export function TablesAdmin() {
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] =useState(false);
    const [contentModel, setContentModel] = useState(false);
    const [refetch, setRefetch] = useState(false);
    const {loading, tables, getTables} =useTable();
    
    useEffect(() => getTables(), []);
    

    console.log("TablesAdmin rendered");

  return (
    <>
      <HeaderPage title="Mesas" btnTitle="Crear nueva mesa" />
    </>
  )
}
