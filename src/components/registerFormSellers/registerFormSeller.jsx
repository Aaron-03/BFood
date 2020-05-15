import React from 'react'

function registerFormSeller() {
    return (
        <div>
           <h3>Registro de vendedor</h3>
      <form>
        <label for="nombre">Nombre</label>
        <input id="nombre" name="nombre" required />
        <label for="correo">Correo</label>
        <input id="Correo" name="Correo" type="email" required />
        <label for="contrasenia">Contraseña</label>
        <input id="contrasenia" name="contrasenia" type="password" required />
        <label for="razonSocial">Razon Soc.</label>
        <input id="razonSocial" name="razonSocial" required />
        <label for="ruc">R.U.C</label>
        <input id="ruc" name="ruc" required />
        <label for="delivery">Delivery</label>
        <input id="delivery" name="delivery" />
        <label for="pagWeb">Pag. web</label>
        <input id="pagWeb" name="pagWeb" />
        <label for="contacto">Contacto</label>
        <input id="contacto" name="contacto" />
        <label for="logo">Logo</label>
        <input id="logo" name="logo" type="file" />
      </form>
        </div>
    )
}

export default registerFormSeller;