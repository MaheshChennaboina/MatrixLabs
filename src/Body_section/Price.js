import React from 'react'
import './price.css'

function Price(props) {
  return (
    <div className='price_content'>
        <p className='title'>{props.title}</p>
        <h3 className='green_color'>{props.amount}</h3>
    </div>
  )
}

export default Price