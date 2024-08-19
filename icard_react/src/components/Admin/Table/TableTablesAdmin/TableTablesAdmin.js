import React from 'react'
import { Table, Button, Icon, Tab } from 'semantic-ui-react';
import { map } from 'lodash';
import "./TableTablesAdmin.scss";

export function TableTablesAdmin(props) {
    const {tables} = props;
  return (
    <Table className='table-tables-admin'>
        <Table.Header>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Numero de mesa</Table.HeaderCell>
                    <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
        </Table.Header>
        <Table.Body>
            {map(tables, (table, index) => (
                <Table.Row key={index}>
                    <Table.Cell>{table.number}</Table.Cell>
                    <Actions table={table}/>
                </Table.Row>
            ))}
        </Table.Body>
    </Table>
  )
}

function Actions(props){
    const {table} = props
    return (
        <Table.Cell textAlign='right'>
            <Button icon onClick ={()=>console.log("Editar mesa")} >
                <Icon name='pencil' />
            </Button>

            <Button icon negative onClick ={()=>console.log("Editar mesa")} >
            <Icon name='close' />
            </Button>
        </Table.Cell>
    )
}