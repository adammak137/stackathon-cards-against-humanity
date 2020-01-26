import React from 'react'

function WhiteCard(props) {
  const text = props.text

  return (
    <div className='wc'>
      <h1>{text}</h1>
    </div>
  )
}

export default WhiteCard
