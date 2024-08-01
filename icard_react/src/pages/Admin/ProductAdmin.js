import React, { useState, useEffect } from 'react';
import { Loader } from 'semantic-ui-react';
import { HeaderPage, TableProductAdmin } from "../../components/Admin"
import { useProduct } from '../../hooks';


export  function ProductAdmin() {
  const { loading, products, getProducts } = useProduct();
  console.log(products);

  useEffect(() => {getProducts()}, [])
  //useEffect(() => {getCategories()}, [refetch]);
  return (
    <>
        <HeaderPage title="Productos" btnTitle= "Nuevo producto" />

        {
        loading ? (
          <Loader active inline="centered">
            Cargando...
          </Loader>
        ) : (
          <TableProductAdmin products={products}/>
        )
      }
    </>
  )
}
