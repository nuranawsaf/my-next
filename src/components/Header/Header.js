import React from 'react'

function Header() {
  return (
    <section className='relative   header  h-[864px] mb-8 flex items-center justify-center'>
       <div className=' text-white '>
            <h3 className='txt-xl md:text-2xl lg:text-4xl'>SVAD FARM</h3>
            <h1 className='text-3xl md:text-6xl lg:text-8xl'>The Best Price & <br/> Freshest Always.</h1>
        </div>

    <div className=' absolute  left-1/2 -translate-x-1/2 bottom-[0px] translate-y-1/2  lg:mt-6 flex flex-col lg:flex-row gap-y-2 lg:gap-y-0  lg:gap-x-4'>
        <div className="bg-white dark:bg-slate-800 w-[330px] pt-5 pb-5  px-6 py-8 shadow-xl flex items-center justify-center p-2  ">
            <img src="/icon.png" alt=""/>
            <div className='ml-4'>
                <h3 className="  font-medium ">Lowest Price</h3>
                <p className="text-gray text-slate-500 dark:text-slate-400 text-sm">We will match or <br/> beat any price</p>
            </div>
        </div>

        <div className="bg-white dark:bg-slate-800 w-[330px] pt-5 pb-5  px-6 py-8 shadow-xl flex items-center justify-center p-2   ">
        <img src="/icon.png" alt=""/>
        <div className='ml-4'>
            <h3 className="  font-medium ">Lowest Price</h3>
            <p className="text-gray text-slate-500 dark:text-slate-400 text-sm">We will match or <br/> beat any price</p>
        </div>
        </div>

        <div className="bg-white dark:bg-slate-800 w-[330px] pt-5 pb-5  px-6 py-8 shadow-xl flex items-center justify-center p-2   ">
            <img src="/icon.png" alt=""/>
            <div className='ml-4'>
                <h3 className="  font-medium ">Lowest Price</h3>
                <p className="text-gray text-slate-500 dark:text-slate-400 text-sm">We will match or <br/> beat any price</p>
            </div>
        </div>
    </div>

    
    </section>
  )
}

export default Header