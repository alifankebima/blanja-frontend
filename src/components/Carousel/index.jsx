import React from 'react'

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="mt-4 carousel slide w-50 h-25" data-bs-ride="true">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="../assets/img/carousel/carousel-1.jpg" className="d-block w-100" alt="carousel-1"></img>
        </div>
        <div className="carousel-item">
          <img src="../assets/img/carousel/carousel-2.jpg" className="d-block w-100" alt="carousel-2"></img>
        </div>
        <div className="carousel-item">
          <img src="../assets/img/carousel/carousel-3.jpg" className="d-block w-100" alt="carousel-3"></img>
        </div>
        <div className="carousel-item">
          <img src="../assets/img/carousel/carousel-4.jpg" className="d-block w-100" alt="carousel-4"></img>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel;