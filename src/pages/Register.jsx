import React from 'react'
import LoginRegisterHeader from '../components/LoginRegisterHeader'
import RegisterForm from '../components/RegisterForm'

const Register = () => {
  return (
    <div class="container text-center">
      <LoginRegisterHeader title="Register" />
      <RegisterForm />
    </div>
  )
}

export default Register