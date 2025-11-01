'use client'
import React, { useEffect, useState } from 'react'
import { ArrowRight, MoveRightIcon } from 'lucide-react'
import Image from 'next/image'
import { TextAnimate } from '../ui/text-animate'
import AOS from 'aos';
import 'aos/dist/aos.css';

const TradingPotential = () => {

      const [email, setEmail] = useState('')
      const [loading, setLoading] = useState(false)

      useEffect(() => {
    AOS.init({
      duration: 1000 // Duration in milliseconds
    });
  }, []);

    const handleSubmit = (e) =>{
    setLoading(true)
    e.preventDefault()
    console.log(email)
    fetch('https://sheetdb.io/api/v1/9riwz6dpixu6c', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: [
          {
            'Number': '-',
            'Newsletter': email,
            'Email': '-',
            'Interest': '-',
          }
        ]
      })
    })
    .then((response) => response.json())
    .then((data) => {
      setLoading(false)
    setEmail('')
  })
   .catch((error)=> console.log(error))
  }


    return (
        <div className='fluid-container max-w-[1140px] grid grid-cols-2 gap-5 lg:pt-28 lg:pb-10 px-5 overflow-hidden'>
            <div className='flex flex-col items-center lg:items-start gap-8 md:gap-15 py-5 text-center lg:text-start col-span-2 lg:col-span-1'>
                <h2 className=''></h2>
                <TextAnimate animation="slideUp" by="word" className={'text-[38px] md:text-5xl font-semibold max-w-[490px] leading-[1.3]'}>
                    Unlock Your Trading Potential
                </TextAnimate>
                <p className='text-lg lg:text-xl max-w-[640px]' style={{wordSpacing:"1px"}}>
                    With real time data and advanced charting tools, You can
                    track your portfolio and quickly react to changes in the market.
                </p>
                <form onSubmit={(e)=> handleSubmit(e)} className='relative h-15 w-full max-w-[700px]'>
                    <input placeholder='Enter your email address'
                    type='email' 
              value={email}
              required
              onChange={(e)=> setEmail(e.target.value)}
                     className='rounded-full w-full h-full border border-[#FFFFFF59] outline-none py-3 px-8 font-sora
                      text-[#FFFFFF8C] md:text-lg lg:text-xl placeholder:text-[#FFFFFF8C] 
                     '/>
                     <button type='submit' disabled={loading} className='text-black md:text-lg lg:text-xltext-xl absolute rounded-full h-15 flex justify-center gap-3 items-center w-32 md:w-40 border border-[#FFFFFF59] btn-gradient font-semibold top-0 right-0 cursor-pointer'>Send <MoveRightIcon /></button>
                </form>
            </div>
            <div className='relative w-full h-full max-w-[664px] min-h-[664px] hidden lg:block' data-aos={'fade-left'}>
                <div className='ellipse block h-[600px] w-[600px] absolute rounded-full'></div>
                <Image src={'/tradeImg.png'} fill alt='' className='max-w-[550px] max-h-[550px]'/>
            </div>
        </div>
    )
}

export default TradingPotential
