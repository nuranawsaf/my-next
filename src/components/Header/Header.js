import React from 'react'

function Header() {
  return (
    <section className='relative   header  h-[864px] mb-8 flex items-center justify-center'>
       <div className=' text-white '>
            <h3 className='text-4xl'>SVAD FARM</h3>
            <h1 className='text-8xl'>The Best Price & <br/> Freshest Always.</h1>
        </div>

    <div className=' absolute  left-1/2 -translate-x-1/2 bottom-[0px] translate-y-1/2 mt-6 flex items-end justify-center gap-x-4'>
        <div class="bg-white dark:bg-slate-800 w-[330px] pt-5 pb-5  px-6 py-8 shadow-xl flex items-center justify-center p-2 bg-indigo-500  shadow-lg">
            <img src="/icon.png" alt=""/>
            <div className='ml-4'>
                <h3 class="  font-medium ">Lowest Price</h3>
                <p class="text-gray text-slate-500 dark:text-slate-400 text-sm">We will match or <br/> beat any price</p>
            </div>
        </div>

        <div class="bg-white dark:bg-slate-800 w-[330px] pt-5 pb-5  px-6 py-8 shadow-xl flex items-center justify-center p-2 bg-indigo-500  shadow-lg">
        <img src="/icon.png" alt=""/>
        <div className='ml-4'>
            <h3 class="  font-medium ">Lowest Price</h3>
            <p class="text-gray text-slate-500 dark:text-slate-400 text-sm">We will match or <br/> beat any price</p>
        </div>
        </div>

        <div class="bg-white dark:bg-slate-800 w-[330px] pt-5 pb-5  px-6 py-8 shadow-xl flex items-center justify-center p-2 bg-indigo-500  shadow-lg">
            <img src="/icon.png" alt=""/>
            <div className='ml-4'>
                <h3 class="  font-medium ">Lowest Price</h3>
                <p class="text-gray text-slate-500 dark:text-slate-400 text-sm">We will match or <br/> beat any price</p>
            </div>
        </div>
    </div>

    
    </section>
  )
}

export default Header