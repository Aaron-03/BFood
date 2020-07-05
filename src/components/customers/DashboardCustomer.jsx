import React, { Fragment } from 'react';

const DashboardCustomer = () => {
  return (
    <Fragment>
      <div className="content p-4">
        <div className="card-deck">
          <div className="card p-2 shadow border-0" style={{ width: +'18rem' }}>
            <h5 className="card-title text-secondary">Tienda 1</h5>
            <img src="img/indice.jpg" className="card-img-top" alt="..." />
          </div>
          <div className="card p-2 shadow border-0" style={{ width: +'18rem' }}>
            <h5 className="card-title text-secondary">Tienda 2</h5>
            <img src="img/indice.jpg" className="card-img-top" alt="..." />
          </div>
          <div
            className="card p-2 shadow border-0"
            style={{ width: +'18rem' }}
          />
          <h5 className="card-title text-secondary">Tienda 3</h5>
          <img src="img/indice.jpg" className="card-img-top" alt="..." />
        </div>
        <div className="card p-2 shadow border-0" style={{ width: +'18rem' }}>
          <h5 className="card-title text-secondary">Tienda 4</h5>
          <img src="img/indice.jpg" className="card-img-top" alt="..." />
        </div>
      </div>

      <div className="content mt-2 p-4">
        <h5 className="text-secondary">MI RESUMEN</h5>
        <div className=" row ml-auto">
          <div className="col-8 mr-4 bg-light">
            <div className="card-deck mt-4">
              <div className="card mb-3 p-0" style={{ maxWidth: +'540px' }}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src="img/kfc.png" className="card-img" alt="..." />
                  </div>
                  <div className="col-md-8 p-0">
                    <div className="card-body p-1">
                      <h5 className="card-title">
                        <small>Tienda donde mas compra</small>
                      </h5>
                      <p className="card-text">
                        <small className="text-muted">KFC</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3 p-0" style={{ maxWidth: +'540px' }}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src="img/kfc.png" className="card-img" alt="..." />
                  </div>
                  <div className="col-md-8 p-0">
                    <div className="card-body p-1">
                      <h5 className="card-title">
                        <small>Tienda donde mas compra</small>
                      </h5>
                      <p className="card-text">
                        <small className="text-muted">KFC</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3 p-0" style={{ maxWidth: +'540px' }}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src="img/kfc.png" className="card-img" alt="..." />
                  </div>
                  <div className="col-md-8 p-0">
                    <div className="card-body p-1">
                      <h5 className="card-title">
                        <small>Tienda donde mas compra</small>
                      </h5>
                      <p className="card-text">
                        <small className="text-muted">KFC</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <img src="..." className="img-fluid" alt="imagen responsive" /> */}
          </div>
          <div>
            <div
              className="card shadow float-right"
              style={{ maxWidth: +'540px' }}
            >
              <div className="card-body p-1">
                <h5 className="card-title text-muted text-center">
                  Ultimos pedidos
                </h5>
                <hr />
                <div className="col">
                  <div
                    className="card mb-3 border-0"
                    style={{ maxWidth: +'540px' }}
                  >
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img
                          src="img/hamburguesa.jpg"
                          className="card-img p-1"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8 p-0">
                        <div className="card-body p-1">
                          <p className="card-text m-0">Hamburguesa de queso</p>
                          <p className="card-text m-0">
                            <small>KFC</small>
                          </p>
                          <p className="card-text m-0">
                            <small className="text-muted m-0">
                              Hace 2 minutos
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card mb-3 border-0"
                    style={{ maxWidth: +'540px' }}
                  >
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img
                          src="img/hamburguesa.jpg"
                          className="card-img p-1"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8 p-0">
                        <div className="card-body p-1">
                          <p className="card-text m-0">Hamburguesa de queso</p>
                          <p className="card-text m-0">
                            <small>KFC</small>
                          </p>
                          <p className="card-text m-0">
                            <small className="text-muted m-0">
                              Hace 2 minutos
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card mb-3 border-0"
                    style={{ maxWidth: +'540px' }}
                  >
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img
                          src="img/hamburguesa.jpg"
                          className="card-img p-1"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8 p-0">
                        <div className="card-body p-1">
                          <p className="card-text m-0">Hamburguesa de queso</p>
                          <p className="card-text m-0">
                            <small>KFC</small>
                          </p>
                          <p className="card-text m-0">
                            <small className="text-muted m-0">
                              Hace 2 minutos
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DashboardCustomer;
