import React from 'react'

const Directory = (props) => {
  return (
    <div className="container mt-5 mb-3">   
    Home {'>'} Category {'>'} {props.category}
    </div>
  )
}

export default Directory