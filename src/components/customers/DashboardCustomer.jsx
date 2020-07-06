import React, { Fragment } from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import UpdateCustomer from '../authentication/Customer/UpdateCustomer';
import PedidosRealizados from './PedidosRealizados';
import EliminarCuentaConsumidor from './EliminarCuentaConsumidor';

const DashboardCustomer = () => {
  return (
    <Fragment>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Pedidos Recientes</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Actualizar Datos</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="thrid">Eliminar Cuenta</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div style={{ height: '100vh' }}>
                  <PedidosRealizados />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div style={{ height: '100vh' }}>
                  <UpdateCustomer />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="thrid">
                <div style={{ height: '100vh' }}>
                  <EliminarCuentaConsumidor />
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Fragment>
  );
};

export default DashboardCustomer;
