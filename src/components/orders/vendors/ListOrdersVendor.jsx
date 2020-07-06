import React from 'react';

import { Table } from 'react-bootstrap';
import { useContext } from 'react';
import VendorContext from '../../../context/vendors/VendorContext';
import { useEffect } from 'react';


const ListOrdersVendor = () => {

    const { getOrdersByVendor, orders } = useContext(VendorContext);

    useEffect(() => {

        getOrdersByVendor();

    }, []);

    return (
        <div className="w-100 p-5">
            <h2 className="p-4 text-center">Pedidos Realizados</h2>

            <Table responsive bordered hover>
                <thead>
                    <tr className="text-left">
                        <th>N°</th>
                        <th>Fecha</th>
                        <th>Cliente</th>
                        <th>Cant. Prod</th>
                        <th>N° Comprobante</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                    orders.map(order => (
                    <tr key={order.idpedido}>
                        <td>{order.idpedido}</td>
                        <td>{order.fecha}</td>
                        <td>{order.consumidor.nombres} {order.consumidor.apellidos}</td>
                        <td>{order.detalles.length}</td>
                        <td>2012012545</td>
                        <td>{order.total}</td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-warning"
                            >Ver Detalle</button>
                        </td>
                    </tr>
                    ))
                    }
                </tbody>
            </Table>
        </div>
    );
}
 
export default ListOrdersVendor;