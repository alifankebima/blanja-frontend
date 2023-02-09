import React from 'react'
import { Link } from 'react-router-dom'

const Directory = (props) => {
  return (
    <div className="container mt-5 mb-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
          <li className="breadcrumb-item"><Link to={'/'}>Category</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{props.category}</li>
        </ol>
      </nav>
      {/* Home {'>'} Category {'>'}  */}
    </div>
  )
}

export default Directory