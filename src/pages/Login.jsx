import LoginForm from '../components/LoginForm';
import React from 'react'
import LoginRegisterHeader from '../components/LoginRegisterHeader'

const Login = () => {
  return (
    <div class="container text-center">
      <LoginRegisterHeader title="login" />
      <LoginForm />
    </div>
  )
}

export default Login