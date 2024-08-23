import React, { useState, useEffect} from 'react';
import { getOrderByTableApi } from '../../../../api/orders';
import { Label, Button, Checkbox, Icon } from 'semantic-ui-react';
import { ORDER_STATUS } from '../../../../utils/constans';
import { ReactComponent as IcTable} from "../../../../assets/mesa.svg";
import "./TableAdmin.scss";

export  function TableAdmin(props) {
  const {table} = props;
  useEffect(()=>{
    (async() =>{
      console.log(table.number)
      const response = await getOrderByTableApi(table.id, ORDER_STATUS.PENDING);
      console.log(response);
      
    })()
  }, [])
  return (
    <div className='table-admin'>
      <IcTable />
      <p>Mesa {table.number}</p>
    </div>
  )
}
