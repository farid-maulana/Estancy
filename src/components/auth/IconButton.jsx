import React from 'react'

const IconButton = ({ href, path, alt }) => {
  return (
    <div className="mx-1">
      <a className="btn btn-outline-light w-100" href={href}>
        <img src={path} alt={alt} className="my-1" width='24px' height="24px" />
      </a>
    </div>
  )
}

export default IconButton