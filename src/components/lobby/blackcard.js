import React from 'react'

function BlackCard(props) {
  const text = props.text
  return (
    <div className='bc'>
      <h1>{text}</h1>
    </div>
  )
}

export default BlackCard
