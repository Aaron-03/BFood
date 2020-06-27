import React from 'react';

import { Table } from 'react-bootstrap';


const ListOrdersVendor = () => {


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
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>12062020340001</td>
                        <td>12-06-20 20:34:40</td>
                        <td>Ricolas Jovanni, De las casas Ochoa</td>
                        <td>5</td>
                        <td>2012012545</td>
                        <td>248.40</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}
 
export default ListOrdersVendor;