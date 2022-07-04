import React from 'react'

function Become() {
  return (
    <div className='container mt-[200px] gap-8 grid grid-cols-2'>
        <div className=''>
            <h1><b>BECOME AN SVAD<br/>MEMBER TODAY</b></h1>
            <br/>
            <p className='text-gray text-xl'>Lots of benefits and offers.<br/>Signing up is easy & Fast.</p>
            <br/>
            <br/>
            <h6 className='text-gray text-xl mb-4 flex'>
            <img className='h-max' src="/Group.png" alt=""/>
              <span className='ml-3'>Earn Rewards On Every Purchase</span>
              
            </h6>
            <h6 className='text-gray text-xl mb-4 flex'>
            <img className='h-max' src="/Group.png" alt=""/>
              <span className='ml-3'>Deals Only For Members</span>
              
            </h6>
            <h6 className='text-gray text-xl mb-4 flex'>
            <img className='h-max' src="/Group.png" alt=""/>
              <span className='ml-3'>Scheduled Priority Deliveries</span>
              
            </h6>
            <h6 className='text-gray text-xl mb-4 flex'>
            <img className='h-max' src="/Group.png" alt=""/>
              <span className='ml-3'>Excellent Customer Service</span>
              
            </h6>
            <button className='c-btn ml-6'>JOIN NOW</button>
        </div>
        <div className=''>
            <img src="/Group 3.png" alt=""/>
        </div>
    </div>
  )
}

export default Become