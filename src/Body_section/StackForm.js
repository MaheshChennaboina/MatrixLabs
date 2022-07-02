import React from 'react'
import './stackform.css'

function StackForm() {
  return (
    <div className='stackform'>
        <form>
            <label>Stack your Token</label>
            <br></br>
            <div className='upperInput'>
            <input type="text" width="100%" placeholder='Enter Amount Of Token'></input>
            <button className='max'>Max</button>
            </div>
            <div className='outerbox'>
            <div className='input_stake_button'>
                <button className='stake'>STAKE</button>
                <button className='stake'>UNSTAKE</button>
            </div>    
              <div className='withdraw_btn'>
                <button>EMERGENCY WITHDRAW</button>
              </div>
            </div>
           
                
            
        </form>
    </div>
  )
}

export default StackForm