import { faCheck } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'

const CustomerTableRow = ({ data, id, name, email, phone_number, date_of_birth, checkIn, status, deleteCustomer, updateCustomer }) => {
  return (
    <tr>
      <td>
        <div class="d-flex px-2 py-1">
          <div>
            <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="avatar" />
          </div>
          <div class="d-flex flex-column justify-content-center">
            <h6 class="mb-0 text-xs">{name}</h6>
            <p class="text-xs text-secondary mb-0">{email}</p>
          </div>
        </div>
      </td>
      <td>
        <Link to={'#'} class="text-xs font-weight-bold mb-0" target={'_blank'}>{phone_number}</Link>
      </td>
      {/* <td>
        <Link to={'#'} class="text-xs font-weight-bold mb-0" target={'_blank'}>{date_of_birth}</Link>
      </td> */}
      <td class="align-middle text-center">
        <span class="text-secondary text-xs font-weight-bold">22 year</span>
      </td>
      <td class="align-middle text-center">
        <span class="text-secondary text-xs font-weight-bold">{checkIn}</span>
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
        <button onClick={() => updateCustomer(data)} className='text-secondary font-weight-bold text-xs' style={{ border: 'none', background: 'transparent'}}>
          Edit
        </button>
        <button onClick={() => deleteCustomer(data.id)} className="text-secondary font-weight-bold text-xs" style={{ border: 'none', background: 'transparent'}}>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default CustomerTableRow