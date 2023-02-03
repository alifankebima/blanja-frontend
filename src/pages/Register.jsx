import React, { Fragment } from 'react'
import LoginRegisterHeader from '../components/LoginRegisterHeader'
import RegisterForm from '../components/RegisterForm'

const Register = () => {
  return (
    <Fragment>
      <div class="container text-center">
        <LoginRegisterHeader title="Register" />
        <RegisterForm />
      </div>
    </Fragment>
  )
}

export default Register