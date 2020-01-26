import React from 'react'
function fieldCard(props) {
  const text = props.text

  return (
    <div className="fc">
      <h1>{text}</h1>
    </div>
  )
}

export default fieldCard
