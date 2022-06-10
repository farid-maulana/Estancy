import React from 'react'
import { Link } from 'react-router-dom'

const Property = ({ data, photo, name, address, bed, bath, private_pool, price }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card">
        <div className="position-relative">
          <Link to={'#'} className="d-block blur-shadow-image">
            <img src={photo} alt="img-blur-shadow" className="img-fluid shadow border-radius-lg" />
          </Link>
        </div>
        <div className="card-body px-3 pt-3">
          <div className='d-flex justify-content-between'>
            <div className="mb-3">
              <Link to={'#'}>
                <h5>
                  {name}
                </h5>
              </Link>
              <div className="rating text-xs">
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star-half-alt" aria-hidden="true"></i>
              </div>
            </div>
            <div className='d-flex'>
              <button type="button" className="btn btn-facebook btn-icon-only rounded-circle me-2">
                <span className="btn-inner--icon"><i className="far fa-heart" style={{ fontSize: "16px" }}></i></span>
              </button>
              <button type="button" className="btn btn-facebook btn-icon-only rounded-circle">
                <span className="btn-inner--icon"><i className="fas fa-share-alt" style={{ fontSize: "16px" }}></i></span>
              </button>
            </div>
          </div>
          <p className="text-sm mb-3" style={{ maxHeight: '55px', minHeight: '55px' }}>
            <i className='fas fa-map-marker-alt'></i> {address}
          </p>
          <div className='mb-3' style={{ maxHeight: '55px', minHeight: '55px' }}>
            <span className="badge bg-gradient-primary me-1 mt-1"><i className='fas fa-bed me-1'></i> {bed} Bed</span>
            <span className="badge bg-gradient-primary me-1 mt-1"><i className='fas fa-bath me-1'></i> {bath} Bath</span>
            <span className="badge bg-gradient-primary me-1 mt-1"><i className='fas fa-swimmer me-1'></i> {private_pool === 'available' ? 'Private pool' : 'No private pool'}</span>
          </div>
          <p className='mb-0 text-xs'>Start from</p>
          <h4>IDR {price}<span style={{ fontSize: "16px" }}>/night</span></h4>
        </div>
      </div>
    </div>
  )
}

export default Property
