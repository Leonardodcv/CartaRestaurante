import React, {useCallback, useEffect, useState} from 'react';
import { Form, Image, Button, Dropdown, Checkbox, Search, Item } from 'semantic-ui-react';
import { useDropzone } from 'react-dropzone';
import { map } from 'lodash';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useCategory, useProduct } from '../../../../hooks';
import "./AddEditProductForm.scss"

export function AddEditProductForm(props) {
    const {onClose, onRefetch, product} = props;
  const [ categoriesFormat, setCategoriesFormat ]= useState([])
  const [ previewImage, setPreviewImage ] = useState(product ? product?.image : null);
  const { categories, getCategories } = useCategory();
  const { addProduct, updateProduct } = useProduct();

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(()=>{
    setCategoriesFormat(formatDropDownData(categories));
  }, [categories])

  const formik = useFormik({
    initialValues: initialValues(product),
    validationSchema: Yup.object( product ? updateSchema() : newSchema()),
    validationOnChange:  false,
    onSubmit: async (formValue) => {
      if(product) await updateProduct(product.id, formValue)
      else await addProduct(formValue);

      onRefetch();
      onClose();
    }
  });

  const onDrop = useCallback(async (acceptedFile) => {
    const file= acceptedFile[0];
    await formik.setFieldValue("image", file);
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
      <Form className='add-edit-product-form' onSubmit={formik.handleSubmit}>
        <Form.Input 
            name="title" 
            placeholder="Nombre del producto" 
            value= {formik.values.title}
            onChange={formik.handleChange}
            error={formik.errors.title}
        />

        <Form.Input 
            type='number' 
            name="prices" 
            placeholder="Precio"
            value= {formik.values.prices}
            onChange={formik.handleChange}
            error={formik.errors.prices}
        />

        <Dropdown 
            placeholder='Categoria' 
            fluid 
            selection 
            search 
            options={categoriesFormat}
            value={formik.values.category}
            error={formik.errors.category}
            onChange={(_, data) => formik.setFieldValue("category", data.value)}
        />

        <div className='add-edit-product-form__active'>
            <Checkbox 
                toggle 
                checked={formik.values.active}
                onChange={(_, data) => formik.setFieldValue("active", data.checked)}
            />
            Producto activo
        </div>

        <Button type="button" fluid {...getRootProps()} color = {formik.errors.image && "red"}>
            {previewImage ? "Cambiar Imagen" : "Subir imagen"}
        </Button>
        <input {...getInputProps()} />
        <Image src={previewImage}/>

        <Button type="submit" primary fluid content={product ? "Actualizar" : "Crear"} />
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

function initialValues(data){
    return {
        title: data?.title || "",
        prices: data?.prices ||"",
        category: data?.category ||"",
        active: data?.active ? true : false,
        image: "",
    };
}

function newSchema(){
    return {
        title: Yup.string().required(true),
        prices: Yup.number().required(true),
        category: Yup.number().required(true),
        active: Yup.boolean().required(true),
        image: Yup.string().required(true),
    }
}

function updateSchema(){
  return {
      title: Yup.string().required(true),
      prices: Yup.number().required(true),
      category: Yup.number().required(true),
      active: Yup.boolean().required(true),
      image: Yup.string(),
  }
}
