import React from 'react'
import { Link } from 'react-router-dom'

const PropertyImage = ({ path }) => {
  return (
    <figure itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
      <Link to={path} itemProp="contentUrl" data-size="500x600">
        <img className="w-75 min-height-100 max-height-100 border-radius-lg shadow" src={path} alt="Property description" />
      </Link>
    </figure>
  )
}

export default PropertyImage