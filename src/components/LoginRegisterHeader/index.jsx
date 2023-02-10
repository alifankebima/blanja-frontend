import React, { Fragment, useEffect, useState } from 'react'

const LoginRegisterHeader = (props) => {
  const [pageTitle, setPageTitle] = useState("Sign Up");
  useEffect(() => {
    if (props.title) {
      setPageTitle(props.title)
    }  
  }, [])

  return (
    <Fragment>
      <div className="row justify-content-center align-items-center mt-5 pt-5 g-0">
        <div className="col-md-auto">
          <img className="img-logo" src="/assets/svg/logo.svg" alt="Logo-Blanja" />
        </div>
        <div className="fs-4 fw-bolder col-md-1 text-dark-orange">
          Blanja
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-lg-4">
          <p className="fw-bolder">Please {pageTitle} with your account</p>
        </div>
      </div>
    </Fragment>
  )
}

export default LoginRegisterHeader