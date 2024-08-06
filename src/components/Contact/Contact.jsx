import React from 'react'

const Contact = ({
  id,
  name,
  number,
onDeleteProfile}) => {
  return (
    <div>
          <p>{id}</p>
      <p>{name}</p>
          <p>{number}</p>
          <button onClick={() => onDeleteProfile(id)}type='button'>Delete</button>
    </div>
  )
}

export default Contact
