import React from 'react'
import pic1 from '../Assets/RankCertificate1.jpeg'
import pic2 from '../Assets/RankCertificate2.jpeg'
import pic3 from '../Assets/FSD Certificate.png'
import pic4 from '../Assets/Topper1.jpeg'
import pic5 from '../Assets/Topper2.jpeg'
import '../css/Certificate.css'

function Certificates() {
    return (
        <div className='p-5 mt-5'>
            <h1 className='container text-center'>Certificates</h1>
            <div id="carouselIndicators" className="carousel slide mt-4">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={pic1} className="d-block w-100 certificate-img" alt="Rank Certificate" />
                    </div>
                    <div className="carousel-item">
                        <img src={pic2} className="d-block w-100 certificate-img" alt="Rank Certificate" />
                    </div>
                    <div className="carousel-item">
                        <img src={pic3} className="d-block w-100 certificate-img" alt="FSD Certificate" />
                    </div>
                    <div className="carousel-item">
                        <img src={pic4} className="d-block w-100 certificate-img" alt="Topper Certificate" />
                    </div>
                    <div className="carousel-item">
                        <img src={pic5} className="d-block w-100 certificate-img" alt="Topper Certificate" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Certificates