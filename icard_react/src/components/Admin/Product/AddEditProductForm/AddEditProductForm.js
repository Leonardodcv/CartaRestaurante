import React, {useCallback, useEffect, useState} from 'react';
import { Form, Image, Button, Dropdown, Checkbox, Search, Item } from 'semantic-ui-react';
import { useCategory } from '../../../../hooks';
import { useDropzone } from 'react-dropzone';
import "./AddEditProductForm.scss"
import { map } from 'lodash';

export function AddEditProductForm() {
  const [ categoriesFormat, setCategoriesFormat ]= useState([])
  const [ previewImage, setPreviewImage ] = useState(null);
  const { categories, getCategories } = useCategory();

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(()=>{
    setCategoriesFormat(formatDropDownData(categories));
  }, [categories])

  const onDrop = useCallback((acceptedFile) => {
    const file= acceptedFile[0];
    setPreviewImage(URL.createObjectURL(file));
  })

  const { getRootProps, getInputProps} = useDropzone({
    accept: "image/jpeg, image/png",
    noKeyboard: true,
    multiple: false,
    onDrop,
  });

  return (
    <div>
      <Form className='add-edit-product-form'>
        <Form.Input name="title" placeholder="Nombre del producto" />
        <Form.Input type='number' name="price" placeholder="Precio" />
        <Dropdown placeholder='Categoria' fluid selection search options={categoriesFormat}/>
        <div className='add-edit-product-form__active'>
            <Checkbox toggle />
            Producto activo
        </div>
        <Button type="button" fluid {...getRootProps()}>Subir imagen</Button>
        <input {...getInputProps()} />
        <Image src={previewImage}/>

        <Button type="submit" primary fluid content="Crear" />
      </Form>
    </div>
  );
}

function formatDropDownData(data){
    return map(data, (item) => ({
        key: item.id,
        text: item.title,
        value: item.id,
    }));
}