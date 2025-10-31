import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const Footer = () => {

    const data = [
        {title:"Company", links:[
            {link:"Home"},
            {link:"About us"},
            {link:"Services"},
            {link:"Careers"},
        ]},
        {title:"Resources", links:[
            {link:"Community"},
            {link:"Video Tutorials"},
            {link:"API Documentation"},
            {link:"Security Reports"},
        ]},
        {title:"Help", links:[
            {link:"Customer Support"},
            {link:"Terms & Conditions"},
            {link:"Privacy Policy"}
        ]}
    ]


  return (
    <div className='fluid-container px-5'>

         <div className='py-10 grid grid-cols-2 '>
          <div>
            <h5 className='text-2xl font-semibold mb-5'>Subscribe to Newsletter</h5>
            <p className='max-w-[560px] text-[#CDCDCD]'>Aliquet dignissim erat habitasse aliquet tincidunt phasellus ultrices. Aenean sed elit mattis sagittis id velit sed scelerisque.</p>
          </div>
          <div className='flex justify-end items-center gap-3'>
            <input type='email' placeholder='Enter your email' className='bg-white outline-none rounded-full h-14 px-10 py-5 max-w-[330px] w-full text-sm text-[#CDCDCD]'/>
            <Button size={'default'} variant={'outline'} className={'rounded-full font-semibold text-[17px]'}>Subscribe</Button>
          </div>
         </div>

    <div className=' flex justify-between py-10 gredientBorder'>
          <div className='max-w-[330px]'>
             <h3 className='text-[32px] font-semibold'>Earnex Global</h3>
             <p className=''>Euismod libero faucibus egestas elementum scelerisque porta commodo purus nam. Ante ac egestas duis.</p>
             <div className='flex gap-2.5 my-4'>
                <span className='flex justify-center items-center rounded-full bg-[#095171] h-8 w-8 cursor-pointer'><Image src='/facebook.svg' width={14} height={14} alt=''/></span>
                <span className='flex justify-center items-center rounded-full bg-[#095171] h-8 w-8 cursor-pointer'><Image src='/twitter.svg' width={14} height={14} alt=''/></span>
                <span className='flex justify-center items-center rounded-full bg-[#095171] h-8 w-8 cursor-pointer'><Image src='/linkedin.svg' width={14} height={14} alt=''/></span>
                <span className='flex justify-center items-center rounded-full bg-[#095171] h-8 w-8 cursor-pointer'><Image src='/instagram.svg' width={14} height={14} alt=''/></span>
             </div>
          </div>
             
          <div className='col-span-3 flex flex-row justify-between gap-10'>
            {
                data.map((res:any,index:number)=>{
                    return <div key={index} className='px-3'>
                         <h6 className='text-xl mb-5 font-semibold'>{res.title}</h6>
                         {
                            res.links.map((links:any, index:number)=>{
                                return <p key={index} className='text-[#CDCDCD] text-[15px] font-light my-3 cursor-pointer w-fit'>{links.link}</p>
                            })
                         }
                    </div>
                })
               }
          </div>
    </div>

    <p className='text-center px-5 py-5'>Copyright © 2025 Earnexglobal</p>

    </div>
  )
}

export default Footer
