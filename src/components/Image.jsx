import React from 'react'

const Image = (props) => {
  return <img src={props.path} alt={props.alt} class={props.className} />
}

export default Image;