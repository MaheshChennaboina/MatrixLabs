import React from 'react'
import './details.css'
import Pool from './Pool'
import StackForm from './StackForm'

function Details(props) {
  return (
    <div className='detail_content'>
        <div className='detail_value'>
        <p>Your Wallet Address</p>
        <span>{props.address}</span>
        </div>
        <div className='detail_value'>
        <p>Total Stakable Token</p>
        <span>{props.token}</span>
        </div >
        <div className='detail_value'>
        <p>Total Stakable Token In USD</p>
        <span>{props.usd}</span>
        </div>
        <div className='detail_value'>
        <p>Unstake Fee</p>
        <span>{props.ufee}</span>
        </div>
        <div className='detail_value'>
        <p>Lock Deadline</p>
        <span>{props.deadline}</span>
        </div>
        <Pool highlight="45%"></Pool>
        <StackForm></StackForm>
    </div>
  )
}

export default Details