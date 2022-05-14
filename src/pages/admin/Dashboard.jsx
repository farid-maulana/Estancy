import React from 'react'
import Navbar from '../../components/admin/Navbar'
import Sidebar from '../../components/admin/Sidebar'
import Footer from '../../components/admin/Footer'
import CardReport from '../../components/admin/CardReport'

const Dashboard = () => {
  document.body.classList.add('bg-gray-100')
  return (
    <>
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Navbar activePage={'Dashboard'} />
        <div className="container-fluid py-4">
          <div className="row">
            <CardReport name={'Sales'} value={'$230,220'} growth={'+55%'}/>
            <CardReport name={'Customers'} value={'3.200'} growth={'+12%'}/>
            <CardReport name={'Avg. Revenue'} value={'$1.200'} growth={'+213%'}/>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <div className="card mb-4">
                <div className="card-header pb-0">
                  <h6>Top Selling Products</h6>
                </div>
                <div className="card-body px-0 pt-0 pb-2">
                  <div className="table-responsive p-0">
                    <table className="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Product</th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Value</th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Ads Spent</th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Refunds</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex px-3 py-1">
                              <div>
                                <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/blue-shoe.jpg" className="avatar me-3" alt="item 1" />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">Nike v22 Running</h6>
                                <p className="text-sm font-weight-bold text-secondary mb-0"><span className="text-success">8.232</span> orders</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm font-weight-bold mb-0">$130.992</p>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <p className="text-sm font-weight-bold mb-0">$9.500</p>
                          </td>
                          <td className="align-middle text-end">
                            <div className="d-flex px-3 py-1 justify-content-center align-items-center">
                              <p className="text-sm font-weight-bold mb-0">13</p>
                              <i className="ni ni-bold-down text-sm ms-1 mt-1 text-success"></i>
                              <button type="button" className="btn btn-sm btn-icon-only btn-rounded btn-outline-secondary mb-0 ms-2 btn-sm d-flex align-items-center justify-content-center ms-3" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Refund rate is lower with 97% than other products">
                                <i className="fas fa-info" aria-hidden="true"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-3 py-1">
                              <div>
                                <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/black-mug.jpg" className="avatar me-3" alt="item 2" />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">Business Kit (Mug + Notebook)</h6>
                                <p className="text-sm font-weight-bold text-secondary mb-0"><span className="text-success">12.821</span> orders</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm font-weight-bold mb-0">$80.250</p>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <p className="text-sm font-weight-bold mb-0">$4.200</p>
                          </td>
                          <td className="align-middle text-end">
                            <div className="d-flex px-3 py-1 justify-content-center align-items-center">
                              <p className="text-sm font-weight-bold mb-0">40</p>
                              <i className="ni ni-bold-down text-sm ms-1 mt-1 text-success"></i>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-3 py-1">
                              <div>
                                <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/black-chair.jpg" className="avatar me-3" alt="item 3" />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">Black Chair</h6>
                                <p className="text-sm font-weight-bold text-secondary mb-0"><span className="text-success">2.421</span> orders</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm font-weight-bold mb-0">$40.600</p>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <p className="text-sm font-weight-bold mb-0">$9.430</p>
                          </td>
                          <td className="align-middle text-end">
                            <div className="d-flex px-3 py-1 justify-content-center align-items-center">
                              <p className="text-sm font-weight-bold mb-0">54</p>
                              <i className="ni ni-bold-up text-sm ms-1 mt-1 text-danger"></i>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-3 py-1">
                              <div>
                                <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/bang-sound.jpg" className="avatar me-3" alt="item 4" />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">Wireless Charger</h6>
                                <p className="text-sm font-weight-bold text-secondary mb-0"><span className="text-success">5.921</span> orders</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm font-weight-bold mb-0">$91.300</p>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <p className="text-sm font-weight-bold mb-0">$7.364</p>
                          </td>
                          <td className="align-middle text-end">
                            <div className="d-flex px-3 py-1 justify-content-center align-items-center">
                              <p className="text-sm font-weight-bold mb-0">5</p>
                              <i className="ni ni-bold-down text-sm ms-1 mt-1 text-success"></i>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-3 py-1">
                              <div>
                                <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/photo-tools.jpg" className="avatar me-3" alt="item 5" />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">Mountain Trip Kit (Camera + Backpack)</h6>
                                <p className="text-sm font-weight-bold text-secondary mb-0"><span className="text-success">921</span> orders</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm font-weight-bold mb-0">$140.925</p>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <p className="text-sm font-weight-bold mb-0">$20.531</p>
                          </td>
                          <td className="align-middle text-end">
                            <div className="d-flex px-3 py-1 justify-content-center align-items-center">
                              <p className="text-sm font-weight-bold mb-0">121</p>
                              <i className="ni ni-bold-up text-sm ms-1 mt-1 text-danger"></i>
                              <button type="button" className="btn btn-sm btn-icon-only btn-rounded btn-outline-secondary mb-0 ms-2 btn-sm d-flex align-items-center justify-content-center ms-3" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Refund rate is higher with 70% than other products">
                                <i className="fas fa-info" aria-hidden="true"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  )
}

export default Dashboard