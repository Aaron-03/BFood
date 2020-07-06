import React, { useContext, useState, useEffect } from 'react';
import ProductContext from '../../context/products/ProductContext';
import styled from '@emotion/styled';
import Swal from 'sweetalert2';



const ContentBtn = styled.div`
    margin-bottom: 45rem;
    padding: 0.5rem;
    text-align: center;
`;



const PanelPedido = () => {

    const { pedido, addPedido } = useContext(ProductContext);

    const [ complements, setComplements ] = useState({
        descripcion: '',
        total: 0
    });

    const { descripcion, total } = complements;

    const [ products, setProducts ] = useState([]);

    const getTotal = (prods) => {

        let tot = 0;

        prods.forEach(prod => {
            tot += prod.cantidad * prod.precio;
        });

        console.log(tot);

        setComplements({
            ...complements,
            total: tot
        });
    }

    const handleChangePedido = (e) => {
        setComplements({
            ...complements,
            [e.target.name]: e.target.value
        });
    }

    const handleSendPedido = (ped) => {
        ped.descripcion = descripcion;
        ped.total = total;
        ped.consumidor = {
            id: 1
        }
        ped.status = "PENDIENTE";

        addPedido(ped);

        Swal.fire({
            title: 'Pedido agregado correctamente',
            timer: 2000
          });
  
          return;
    }

    useEffect(() => {

        const prods = pedido.products;
        setProducts(prods);
        getTotal(prods);

        console.log(prods);

    }, []);



    return (
        <div className="w-75 m-auto p-4">
            <form>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Subtotal</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                        products.map((product, index) => (
                        <tr key={product.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{product.nombre}</td>
                            <td>{product.cantidad}</td>
                            <td>{product.precio}</td>
                            <td>{product.precio * product.cantidad }</td>
                        </tr>
                        ))
                        }
                    </tbody>
                </table>

                <div className="form-group">
                    <input
                        className="form-control"
                        value={descripcion}
                        name="descripcion"
                        onChange={handleChangePedido}
                        type="text"
                        placeholder="Agregue una descripción de su pedido"
                    />
                </div>
            </form>

            <p className="text-right p-2 px-4 mt-3">Total a pagar: s/ {total} soles</p>

            <ContentBtn>
                <button
                    onClick={() => handleSendPedido(pedido)}
                    className="btn btn-success"
                >REALIZAR PEDIDO</button>
            </ContentBtn>
        </div>
    );
}
 
export default PanelPedido;