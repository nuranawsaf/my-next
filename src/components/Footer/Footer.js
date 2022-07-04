import React from 'react'

function Footer() {
  return (
    <footer className='bg-green'>
        
        <div className='container grid grid-cols-3 gap-x-[82px]  mt-[100px] py-[100px] px-[100px]'>
        <div >
            <img className='h-[126px] w-auto' src="/Rectangle 19.png" alt=""/>
            <p className='mt-6'>Sligoville Agriculture Development (SVAD) is dedicated to providing fresh meat to the market.Located in the first free village of Jamaica, our goal is to increase the visibility of this historic land and to partner with its people to continue to make strides. In the land of “one love and one people” our food is an important aspect of our culture, and SVAD embodies that vision and seeks to empower others through our products.</p>
        </div>

        <div className='     flex flex-col gap-y-[28px] font-bold'>
            <button className='c-btn w-max ' type="">SHOP NOW</button>

            <a href="/story" class="">OUR STORY</a>
            <a href="/blog" class="">BLOG</a>
            <a href="/contact" class="">CONTACT</a>
            <a href="/shop" class="">SHOP NOW</a>
            <a href="/club" class="">SVAD CLUB MEMBERS</a>
        </div>

        <div className='    '>
            <h1>KEEP IN TOUCH</h1>
            <h6 className='mt-3'>(876)834-9389 / (876)327-1468</h6>
            <h6 className='mt-3'>Sligoville PO, Sligoville District Jamaica West Indies</h6>
            <h6 className='mt-3'>Mon - Fri 09:00 AM - 4:30 pM <br/> (except public holidays)</h6>
            <p className='mt-3 font-bold'>subscribe to SVAD’s mailing list</p>
            <input className='h-[45.78px] w-[290px] rounded-lg' type="" name="" value=""/>
            <button className='c-btn mt-3' type="">SIGN UP</button>
            
        </div>
        </div>
        <h6 className='text-center font-bold py-6'>© 2022 SVAD Farm. All Rights Reserved</h6>
    </footer>
  )
}

export default Footer