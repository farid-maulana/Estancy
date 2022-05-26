import React from 'react'

const IconButton = ({ onClickHandler, path, alt }) => {
  return (
    <div className="mx-1">
      <button className="btn btn-outline-light w-100" onClick={onClickHandler}>
        <img src={path} alt={alt} className="my-1" width='24px' height="24px" />
      </button>
    </div>
  )
}

export default IconButton