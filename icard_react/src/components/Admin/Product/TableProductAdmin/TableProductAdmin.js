import React from 'react';
import { Table, Image, Button, Icon, TableBody } from 'semantic-ui-react';
import { map } from 'lodash';
import "./TableProductAdmin.scss";

export function TableProductAdmin(props) {
  const {products, updateProduct} = props;
  return (
    <Table className="table-product-admin">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Image</Table.HeaderCell>
          <Table.HeaderCell>Producto</Table.HeaderCell>
          <Table.HeaderCell>Precio</Table.HeaderCell>
          <Table.HeaderCell>Categoria</Table.HeaderCell>
          <Table.HeaderCell>Activo</Table.HeaderCell>
          <Table.HeaderCell>Acciones</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {map(products,(product, index)=>(
          <Table.Row key={index}>
            <Table.Cell width={2}>
              <Image src={product.image} />
            </Table.Cell>
            <Table.Cell>{product.title}</Table.Cell>
            <Table.Cell>{product.prices} $</Table.Cell>
            <Table.Cell>{product.category_date.title}</Table.Cell>
            <Table.Cell className='status'>
              {product.active ? <Icon name="check" /> : <Icon name="close" />}
            </Table.Cell>
              <Actions product={product} updateProduct={updateProduct}/>
            
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

function Actions(props){
  const {product, updateProduct} = props;
  return (
    <Table.Cell textAlign='right'>
    <Button icon onClick={()=> updateProduct(product)}>
      <Icon name="pencil"/>
    </Button>
    <Button icon negative onClick={()=>console.log("Editar")}>
      <Icon name="close"/>
    </Button>  
  </Table.Cell>
  );
  
}