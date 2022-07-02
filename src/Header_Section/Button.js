import React from 'react'
import './button.css'

function Button() {
  return (
    <div className='options'>
        <div className='normal_button arrange_text'>
            <p className='text_style_normal'>WEBSITE</p>
        </div>   
        <div className='highlight_botton arrange_text'>
            <p className='text_style_high'>CONNECT</p>
        </div>     
    </div>
  )
}

export default Button