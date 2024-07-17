import React, { useEffect } from 'react';
import { Loader } from 'semantic-ui-react';
import { HeaderPage } from '../../components/Admin';
import { useCategory } from '../../hooks';

export function CategoriesAdmin() {
  const { loading, categories, getCategories } = useCategory();
  console.log(categories);

  useEffect(() => {
      getCategories();
  }, [getCategories]);

  return (
    <>
      <HeaderPage title="Categorias" btnTitle="Nueva categoria" />
      {
        loading ? (
          <Loader active inline="centered">
            Cargando...
          </Loader>
        ) : (
          <h2>Lista de categorias</h2>
        )
      }
    </>
  )
}
