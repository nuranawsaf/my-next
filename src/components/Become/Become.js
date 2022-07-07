import React from 'react'

function Become() {
  return (
    <div className='container mx-auto  mt-[200px] sb lg:gap-8 grid lg:grid-cols-2 flex flex-col flex-row-0 items-center justify-center'>
        <div className=''>
            <h1 className='text-[39px] text-center lg:text-left'><b>BECOME AN SVAD<br/>MEMBER TODAY</b></h1>
            <br/>
            <p className='text-gray text-xl text-center lg:text-left'>Lots of benefits and offers.<br/>Signing up is easy & Fast.</p>
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
            <button className='c-btn ml-6 text-center'>JOIN NOW</button>
        </div>
        <div className='mt-[50px] lg:mt-0 flex flex-col flex-row items-end'>
            <img  src="/Group 3.png" alt=""/>
        </div>
    </div>
  )
}

export default Become