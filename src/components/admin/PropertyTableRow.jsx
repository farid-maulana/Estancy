import { faClipboard, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const PropertyTableRow = ({ id, name, location, price, deleteProperty, updateProperty, data }) => {
  return (
    <tr>
      <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">{name}</td>
      <td className="border-b border-slate-100 p-4 text-slate-500">{location}</td>
      <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">Rp {price}</td>
      <td className="border-b border-slate-100 p-4 text-slate-500 flex justify-around">
        <a href="::javascript" className='text-secondary'>
          <FontAwesomeIcon icon={faClipboard} /> <span className='hidden lg:inline'>Detail</span>
        </a>
        <button onClick={() => updateProperty(data)} className='text-secondary'>
          <FontAwesomeIcon icon={faEdit} /> <span className='hidden lg:inline'>Edit</span>
        </button>
        <button onClick={() => deleteProperty(id)} className='text-secondary'>
          <FontAwesomeIcon icon={faTrash} /> <span className='hidden lg:inline'>Delete</span>
        </button>
      </td>
    </tr>
  )
}

export default PropertyTableRow