import React, {useEffect, useState} from 'react';
import { Loader } from 'semantic-ui-react';
import { HeaderPage, TableUsers, AddEditUserForm } from '../../components/Admin';
import { useUser } from '../../hooks';
import { ModalBasic } from '../../components/Common';

export  function UsersAdmin() {
  const[showModal, setShowModal ] = useState(null)
  const[titleModal, setTitleModal ] = useState(null)
  const[contentModal, setContentModal ] = useState(null)
  const {loading, users, getUsers} = useUser();

  useEffect(()=>{getUsers()},[])

  const openCloseModal = () => setShowModal((prev) => !prev);

  const addUser =() =>{
    setTitleModal("Nuevo usuario");
    setContentModal(<AddEditUserForm/>)
    openCloseModal();
  }

  return (
    <>
      <HeaderPage 
        title="Usuarios" 
        btnTitle="Nuevo Usuario" 
        btnClick={addUser}
      />
      { loading ? (
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ):(
        <TableUsers users={users}/>
      )}
      <ModalBasic 
        show = {showModal} 
        onClose={openCloseModal} 
        title={titleModal} 
        children={contentModal} 
        />
    </>
  )
}