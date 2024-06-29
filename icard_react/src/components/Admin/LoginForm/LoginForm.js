import React from 'react';
import { Button, Form } from "semantic-ui-react"
import "./LoginForm.scss"

export  function LoginForm() {
  return (
    <Form className='login-form-admin'>
        <Form.Input name="email" placeholder="Correo electronico" />
        <Form.Input name="password" type='password' placeholder="Contrasena" />
        <Button type='submit' content="Iniciar sesion" primary fluid/>
    </Form>
  )
}

