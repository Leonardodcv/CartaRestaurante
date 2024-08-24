import React, { useState, useEffect} from 'react';
import { size } from 'lodash';
import { Label, Button, Checkbox, Icon } from 'semantic-ui-react';
import classNames from "classnames";
import { getOrderByTableApi } from '../../../../api/orders';
import { ORDER_STATUS } from '../../../../utils/constans';
import { ReactComponent as IcTable} from "../../../../assets/mesa.svg";
import "./TableAdmin.scss";

export  function TableAdmin(props) {
  const {table} = props;
  const [ orders, setOrders ] = useState([]);
  console.log(orders);

  
  useEffect(() => {
    (async () => {
      try {
        const response = await getOrderByTableApi(
          table.id,
          ORDER_STATUS.PENDING
        );
        setOrders(response);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    })();
  }, [table.id]);
  
    

  return (
    <div className='table-admin'>
      {size(orders) > 0 ? <Label circular color='orange'>{size(orders)}</Label> : null}
      <IcTable 
        className= { classNames({
          pending:size(orders) >0,
        })}
      />
      <p>Mesa {table.number}</p>
    </div>
  );
}
/*
useEffect(()=>{
    (async() =>{
      const response = await getOrderByTableApi(
        table.id, 
        ORDER_STATUS.PENDING
      );
      setOrders(response);
      
    })()
  }, [])*/