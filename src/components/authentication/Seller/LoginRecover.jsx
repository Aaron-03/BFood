import React from 'react';

import { Container,
         Row,
         Form,
         FormGroup,
         FormLabel,
         FormControl,
         Button,
         Image

} from 'react-bootstrap';


import '../../../assets/css/authenticationSeller.css';
import scooter from '../../../assets/img/scooter.svg';




const LoginForm = () => {





    return (
        <Container id="container_login_seller">

            <h2 className="text-center text-white mb-4">INGRESA A LA PLATAFORMA</h2>

            <Row className="w-100 justify-content-center">
                <Form className="col-md-8">
                    <FormGroup className="form-inline">
                        <FormLabel
                            htmlFor="email"
                            className="col-sm-4 justify-content-between"
                        >Email</FormLabel>

                        <FormControl
                            name="email"
                            type="email"
                            placeholder="Ingrese su email"
                            className="col-sm-8"
                        />
                    </FormGroup>

                    <FormGroup className="form-inline">
                        <FormLabel
                            htmlFor="password"
                            className="col-sm-4 justify-content-between"
                        >Contraseña</FormLabel>

                        <FormControl
                            name="password"
                            type="password"
                            placeholder="Ingrese su contraseña"
                            className="col-sm-8"
                        />
                    </FormGroup>

                    <Button
                        type="submit"
                        variant="dark"
                        className="d-block mx-auto mt-5"
                    >INGRESAR AL SISTEMA</Button>

                    <Row className="justify-content-center p-2 my-3">
                        No tiene una cuenta?
                        &nbsp;
                        <a href="/">Regístrece</a>
                    </Row>
                </Form>
            </Row>

            <Row>
                <Image
                    src={scooter}
                    alt="scooter"
                    className="login_form_image"
                    rounded
                />
            </Row>

            <p className="mt-2 p-2 text-white">
                ¡UNA NUEVA FORMA DE COMPARTIR!
            </p>
        </Container>
    );
}
 
export default LoginForm;