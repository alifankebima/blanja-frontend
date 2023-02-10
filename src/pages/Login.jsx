import React from 'react'

import LoginRegisterHeader from '../components/LoginRegisterHeader'
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div className="container text-center">
      <LoginRegisterHeader title="login" />
      <LoginForm />
    </div>
  )
}

export default Login