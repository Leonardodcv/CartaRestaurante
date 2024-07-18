import React from 'react'
import { Table, Image, Button, Icon, TableBody } from 'semantic-ui-react';
import { map } from 'lodash';
import "./TableCategoryAdmin.scss";

export  function TableCategoryAdmin(props) {
    const { categories } = props;

  return (
    <Table className='table-category-admin'>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Image</Table.HeaderCell>
                <Table.HeaderCell>Categorias</Table.HeaderCell>
                <Table.HeaderCell>Acciones</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {map(categories, (category, index) =>(
                <Table.Row key={index}>
                    <Table.Cell width={2}>
                        <Image src={category.image} />
                    </Table.Cell>
                    <Table.Cell>
                        {category.title}
                    </Table.Cell>
                        <Actions category={ category }  />
                </Table.Row>
            ))}
        </Table.Body>
    </Table>
  )
}

function Actions(props){
    const {category}= props;
    return(
        <Table.Cell textAlign="right">
            <Button icon onClick={() => console.log("Actualizar categoria")}>
                <Icon name='pencil' />
            </Button>
            <Button icon negative onClick={() => console.log("Eliminar categoria")}>
                <Icon name='close' />
            </Button>
        </Table.Cell>
    )

}