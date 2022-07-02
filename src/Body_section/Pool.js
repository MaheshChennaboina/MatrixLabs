import React from 'react'
import './pool.css'

function Pool(props) {
  return (
    <div >
      <p className='pool_text'>Pool Filled</p>
      <div className='bar' style={{position:'relative'}}><span className='pool_highlight' style={{width:"45%",backgroundColor:"#00C88C",height:"20px",textAlign:"start", position:'absolute',left:'0px',borderRadius:"10px"}}></span></div>
    </div>
  )
}

export default Pool