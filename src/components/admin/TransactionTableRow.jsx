import React from 'react'
import { Link } from 'react-router-dom'

const TransactionTableRow = ({ data, customerName, customerPhoneNumber, propertyName, propertyAddress, checkIn, checkOut, status, updateTransaction }) => {
  return (
    <tr>
      <td>
        <div class="d-flex px-2 py-1">
          <div class="d-flex flex-column justify-content-center">
            <h6 class="mb-0 text-xs">{customerName}</h6>
            <p class="text-xs text-secondary mb-0">{customerPhoneNumber}</p>
          </div>
        </div>
      </td>
      <td>
        <div class="d-flex px-2 py-1">
          <div class="d-flex flex-column justify-content-center">
            <h6 class="mb-0 text-xs">{propertyName}</h6>
            <p class="text-xs text-secondary mb-0">{propertyAddress}</p>
          </div>
        </div>
      </td>
      <td class="align-middle text-center">
        <span class="text-secondary text-xs font-weight-bold">{checkIn}</span>
      </td>
      <td class="align-middle text-center">
        <span class="text-secondary text-xs font-weight-bold">{checkOut}</span>
      </td>
      <td class="align-middle text-center text-sm">
      <span 
          class={(
            status === 'active' ? 'badge badge-sm bg-gradient-success' : (
              status === 'booking' ? 'badge badge-sm bg-gradient-warning' : (
                status === 'posponed' ? 'badge badge-sm bg-gradient-secondary' : 'badge badge-sm bg-gradient-danger'
              )
            )
          )}>{status}</span>
      </td>
      <td class="align-middle">
        <Link to={'#'} class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="View customer">
          View
        </Link> &nbsp;
        {/* <Link to={'#'} onClick={() => updateTransaction(data)} class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit customer">
          Edit
        </Link> */}
        <button onClick={() => updateTransaction(data)} className="text-secondary font-weight-bold text-xs" style={{ border: 'none', background: 'transparent' }}>
          <span className='hidden lg:inline'>Edit</span>
        </button>
      </td>
    </tr>
  )
}

export default TransactionTableRow