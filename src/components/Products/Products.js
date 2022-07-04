import React from 'react'

function Products() {
  return (
    <div className='container mt-[200px]'>
        <div className='text-center'>
            <h1 className='font-bold tracking-wider text-4xl'>Svad’s products</h1>
            <br/>
            <p className='text-gray text-base'>Quality in every package <br/> Best Price and Freshest Always</p>
            <br/>
            <br/>
            <br/>
            <button className='c-btn' type="">LOG IN TO SEE PRICE</button>
        </div>

        <div className='mt-[100px] columns-2'>
            <div class="bg-white rounded-lg px-6 py-[40px] shadow-xl w-[400px]">
                
                <img src="/Rectangle 14.png" alt=""/>
                
                <h3 class="text-slate-900  mt-5 text-base font-medium tracking-tight text-center text-lg">Pork, Pork Parts & <br/> Pork Live Stock</h3>
                <br/>
                <p className='text-center text-gray'>Call for Pricing or</p>
                <p className='text-center text-green'>Become A member</p>
            </div>

            <div class="bg-white rounded-lg px-6 py-[40px] shadow-xl w-[400px]">
                <img src="/Rectangle 13.png" alt=""/>
                <h3 class="text-slate-900  mt-5 text-base font-medium tracking-tight text-center text-lg">Pork, Pork Parts & <br/> Pork Live Stock</h3>
                <br/>
                <p className='text-center text-gray'>Call for Pricing or</p>
                <p className='text-center text-green'>Become A member</p>
            </div>
        </div>

    </div>
  )
}

export default Products