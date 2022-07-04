import React from 'react'

function Navbar() {
  return (
    <div className=' bg-green flex-1 flex items-center justify-center sm:items-stretch sm:justify-center '>
        <div className=' mr-[90px] flex-shrink-0  flex items-center'>
            <img className=' h-8 w-auto m-1 ' src="/logo_white 1.png" alt=""/>
        </div>


        <nav class=" ml-[90px] flex justify-center space-x-4 m-4   text-white">
            <a href="/story" class="font-bold px-3 py-3 text-slate-700 rounded-lg hover:bg-orange hover:text-slate-900">OUR STORY</a>
            <a href="/blog" class="font-bold px-3 py-3 text-slate-700 rounded-lg hover:bg-orange hover:text-slate-900">BLOG</a>
            <a href="/contact" class="font-bold px-3 py-3 text-slate-700 rounded-lg hover:bg-orange hover:text-slate-900">CONTACT</a>
            <a href="/shop" class="font-bold px-3 py-3 text-slate-700 rounded-lg hover:bg-orange hover:text-slate-900">SHOP NOW</a>
            <a href="/club" class="font-bold px-3 py-3 text-slate-700 rounded-lg hover:bg-orange hover:text-slate-900">SVAD CLUB MEMBERS</a>
        </nav>
    </div>
  )
}

export default Navbar