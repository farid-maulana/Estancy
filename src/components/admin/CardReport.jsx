import React from 'react'

const CardReport = ({ name, value, growth }) => {
  return (
    <div className="col-sm-4 mb-sm-0 mb-4">
      <div className="card">
        <div className="card-body p-3 position-relative">
          <div className="row">
            <div className="col-7 text-start">
              <p className="text-sm mb-1 text-capitalize font-weight-bold">{name}</p>
              <h5 className="font-weight-bolder mb-0">
                {value}
              </h5>
              <span className="text-sm text-end text-success font-weight-bolder mt-auto mb-0">{growth} <span className="font-weight-normal text-secondary">since last month</span></span>
            </div>
            <div className="col-5">
              <div className="dropdown text-end">
                <a href=" #" className="cursor-pointer text-secondary" id="dropdownUsers2" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="text-xs text-secondary">6 May - 7 May</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end px-2 py-3" aria-labelledby="dropdownUsers2">
                  <li><a className="dropdown-item border-radius-md" href=" #">Last 7 days</a></li>
                  <li><a className="dropdown-item border-radius-md" href=" #">Last week</a></li>
                  <li><a className="dropdown-item border-radius-md" href=" #">Last 30 days</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardReport