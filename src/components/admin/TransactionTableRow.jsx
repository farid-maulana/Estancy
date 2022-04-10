import { faClipboard, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const TransactionTableRow = ({ id,  customerId, transactionId, startDate, endDate, deleteTransaction, updateTransaction, data }) => {
  return (
    <tr>
      <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">{customerId}</td>
      <td className="border-b border-slate-100 p-4 text-slate-500">{transactionId}</td>
      <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">{startDate}</td>
      <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">{endDate}</td>
      <td className="border-b border-slate-100 p-4 text-slate-500 flex justify-around">
        <a href="::javascript" className='text-secondary'>
          <FontAwesomeIcon icon={faClipboard} /> <span className='hidden lg:inline'>Detail</span>
        </a>
        <button onClick={() => updateTransaction(data)} className='text-secondary'>
          <FontAwesomeIcon icon={faEdit} /> <span className='hidden lg:inline'>Edit</span>
        </button>
        <button onClick={() => deleteTransaction(id)} className='text-secondary'>
          <FontAwesomeIcon icon={faTrash} /> <span className='hidden lg:inline'>Delete</span>
        </button>
      </td>
    </tr>
  )
}

export default TransactionTableRow