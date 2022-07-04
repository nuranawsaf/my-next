import React from 'react'

function Farming() {
  return (
    <div className='container mt-[200px] gap-8 columns-2'>
        <div>
            <img src="/Rectangle 8.png" alt=""/>
        </div>
        <div>
            <h1>Farming First is SVAD’s way</h1>
            <br/>
            <p className='text-gray text-xl'>We are here to serve our communities by offering</p>
            <br/>
            <br/>
            <h6 className='text-gray text-xl mb-4 flex '>
              <img src="/Group.png" alt=""/>
             <span className='ml-3'>the freshest products</span>
            </h6>
            <h6 className='text-gray text-xl mb-4 flex'>
             <img src="/Group.png" alt=""/>
             <span className='ml-3'>the healthiest products</span>
            </h6>
            <h6 className='text-gray text-xl mb-4 flex'>
              <img src="/Group.png" alt=""/>
              <span className='ml-3'>the best price possible</span>
              
              </h6>
            <h6 className='text-gray text-xl mb-4 flex'>
              <img className='h-max' src="/Group.png" alt=""/>
              <span className='ml-3'>empower our communities memers with <br/> jobs with great benefits</span>
            </h6>
            <button className='c-btn ml-6'>OUR STORY</button>
        </div>
    </div>
  )
}

export default Farming