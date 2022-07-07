import React from 'react'

function Mobile() {
  return (
    <nav class="bg-green p-3 shadow md:flex md:items-center md:justify-between">
           <div className='flex justify-between items-center'>
                <span >
                    <img src="/logo_white 1.png" alt=""/>
                </span>
                <span className='mx-2 md:hidden block'>
                    <img  src="/menu.png" alt=""/>
                </span>
           </div>

           <ul className=' md:flex md:items-center z-[-1] md:z-auto md:static absolute   w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500'>
                {/* <li className="sb my-6 md:my-6">
                    <a href="" className=' px-3 py-3 text-white font-bold  text-slate-700 rounded-lg hover:bg-orange'>OUR STORY</a>
                 </li >
                <li className="sb h-max">
                    <a href="" className='text-white font-bold px-3 py-3 text-slate-700 rounded-lg hover:bg-orange'>BLOG</a>
                 </li > */}
                 <li className="  mx-4 my-6  md:my-0">
                    <a href="" className='text-white font-bold px-3 py-3   rounded-lg hover:bg-orange'>OUR STORY</a>
                 </li >
                 <li className="  mx-4 my-6  md:my-0">
                    <a href="" className='text-white font-bold px-3 py-3   rounded-lg hover:bg-orange'>BLOG</a>
                 </li >
                <li className="  mx-4 my-6  md:my-0">
                    <a href="" className='text-white font-bold px-3 py-3   rounded-lg hover:bg-orange'>CONTACT</a>
                 </li >
                <li className="  mx-4 my-6  md:my-0">
                    <a href="" className='text-white font-bold px-3 py-3  rounded-lg hover:bg-orange'>SHOP NOW</a>
                 </li >
                <li className="  mx-4 my-6  md:my-0">
                    <a href="" className='text-white font-bold px-3 py-3  rounded-lg hover:bg-orange'>OUR CLUB MEMBER</a>
                 </li >
           </ul>
    </nav>
  )
}



export default Mobile