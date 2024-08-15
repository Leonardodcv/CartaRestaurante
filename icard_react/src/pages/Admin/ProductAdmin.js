import React, { useState, useEffect } from 'react';
import { Loader } from 'semantic-ui-react';
import { ModalBasic} from "../../components/Common";
import { HeaderPage, TableProductAdmin, AddEditProductForm } from "../../components/Admin"
import { useProduct } from '../../hooks';


export  function ProductAdmin() {
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] =useState(false);
    const [contentModel, setContentModel] = useState(false);
    const [refetch, setRefetch] = useState(false);
    const { loading, products, getProducts, deleteProduct } = useProduct();
  

  useEffect(() => {getProducts()}, [refetch])

  const openCloseModal = () => setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev)

  const addProduct = () => {
    setTitleModal("Nuevo producto");
    setContentModel(<AddEditProductForm onClose={openCloseModal} onRefetch={onRefetch}  />);
    openCloseModal();
  }
  const updateProduct = (data) => {
    setTitleModal("Actualizar producto");
    setContentModel(<AddEditProductForm onClose={openCloseModal} onRefetch={onRefetch} product={data} />);
    openCloseModal();
  };

  const onDeleteProduct = async (data) => {
    const result = window.confirm(`Eliminar producto ${data.title}?`);
    if(result){
      await deleteProduct(data.id)
      onRefetch()
    }
  };

  return (
    <>
        <HeaderPage title="Productos" btnTitle= "Nuevo producto" btnClick={addProduct}/>

        {
        loading ? (
          <Loader active inline="centered">
            Cargando...
          </Loader>
        ) : (
          <TableProductAdmin products={products} updateProduct={updateProduct} deleteProduct={onDeleteProduct}/>
        )
      }
      <ModalBasic 
        show={showModal} 
        onClose={openCloseModal} 
        title={titleModal} 
        children={contentModel} 
        />
    </>
  );
}
