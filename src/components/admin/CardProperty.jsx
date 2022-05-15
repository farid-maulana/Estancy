import React from 'react'

const CardProperty = ({ data, photo, status, name, address, detailProperty }) => {
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card card-blog card-plain">
        <div className="position-relative">
          <div className="d-block shadow-xl border-radius-xl">
            <img src={photo} alt="img-blur-shadow" className="img-fluid shadow border-radius-xl" />
          </div>
        </div>
        <div className="card-body px-1 pb-0">
          <span className={'badge badge-sm mb-2 ' + (status === 'available' ? 'bg-success' : (status === 'unavailable' ? 'bg-danger' : 'bg-secondary'))}>{status}</span>
          <h5>
            {name}
          </h5>
          <p className="mb-4 text-sm">
            {address}
          </p>
          <div className="d-flex align-items-center justify-content-between">
            <button onClick={() => detailProperty(data)} className="btn btn-outline-primary btn-sm mb-0">View Villa</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardProperty