import React from 'react';
import { Label, Button, Checkbox, Icon } from 'semantic-ui-react';
import { map, size } from 'lodash';
import { TableAdmin } from '../TableAdmin';
import "./TableListAdmin.scss"

export  function TableListAdmin(props) {
    const {tables} = props;
  return (
    <div className='tables-list-admin'>
        <Button 
            primary 
            icon 
            className='tables-list-admin__reload' 
            onClick={() => console.log("onRefetchReload")}
        >
            <Icon name='refresh' />
        </Button> 

        <div className='tables-list-admin__reload-toggle'>
            <span>Reload automatico</span>
            <Checkbox toggle onChange={(_, data) => console.log(data.checked)} />
        </div>

        {map (tables, (table) => (
            < TableAdmin key = {table.number} table ={table}/>
        ))}
    </div>
  )
}
