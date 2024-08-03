import React, { useState, useEffect } from 'react';
import { Loader } from 'semantic-ui-react';
import { ModalBasic} from "../../components/Common";
import { HeaderPage, TableProductAdmin, AddEditProductForm } from "../../components/Admin"
import { useProduct } from '../../hooks';


export  function ProductAdmin() {
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] =useState(false);
    const [contentModel, setContentModel] = useState(false);
  const { loading, products, getProducts } = useProduct();
  

  useEffect(() => {getProducts()}, [])

  const openCloseModal = () => setShowModal((prev) => !prev)

  const addProduct = () => {
    setTitleModal("Nuevo producto");
    setContentModel(<AddEditProductForm onClose={openCloseModal}v/>);
    openCloseModal();
  }
  return (
    <>
        <HeaderPage title="Productos" btnTitle= "Nuevo producto" btnClick={addProduct}/>

        {
        loading ? (
          <Loader active inline="centered">
            Cargando...
          </Loader>
        ) : (
          <TableProductAdmin products={products}/>
        )
      }
      <ModalBasic show={showModal} onClose={openCloseModal} title={titleModal} children={contentModel} />
    </>
  )
}
