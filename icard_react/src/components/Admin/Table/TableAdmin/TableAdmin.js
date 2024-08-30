import React, { useState, useEffect} from 'react';
import { initial, size } from 'lodash';
import { Label, Button, Checkbox, Icon } from 'semantic-ui-react';
import classNames from "classnames";
import { Link } from 'react-router-dom';
import { getOrderByTableApi } from '../../../../api/orders';
import { ORDER_STATUS } from '../../../../utils/constans';
import { ReactComponent as IcTable} from "../../../../assets/mesa.svg";
import "./TableAdmin.scss";

export  function TableAdmin(props) {
  const {table} = props;
  const [ orders, setOrders ] = useState([]);
  const [ tableBusy, setTableBusy] = useState(false)
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
  
  useEffect(() => {
    (async () => {
      try {
        const response = await getOrderByTableApi(
          table.id,
          ORDER_STATUS.DELIVERED
        );
        if(size(response)>0) setTableBusy(response);
        else setTableBusy(false)
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    })();
  }, [table.id]);
    

  return (
    <Link className='table-admin' to={`/admin/table/${table.id}`}>
      {size(orders) > 0 ? <Label circular color='orange'>{size(orders)}</Label> : null}
      <IcTable 
        className= { classNames({
          pending:size(orders) >0,
          busy: tableBusy,
        })}
      />
      <p>Mesa {table.number}</p>
    </Link>
  );
}
