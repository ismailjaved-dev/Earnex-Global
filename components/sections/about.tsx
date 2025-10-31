import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { TextAnimate } from '../ui/text-animate'

const About = () => {
  return (
    <div className='fluid-container grid grid-cols-2 gap-12 lg:gap-24 items-center max-w-[1150px] pt-14 lg:pt-28 pb-10 sm:pb-16 px-5'>
        <div className='relative w-full h-full max-w-[520px] hidden md:block'>
            <Image src={'/aboutImg.png'} fill alt=''/>
        </div>
        <div className='flex flex-col justify-center gap-5 col-span-2 md:col-span-1 mx-auto text-center md:text-start md:min-h-[400px] lg:min-h-[520px]  max-w-[470px]'>
             <TextAnimate animation="slideUp" by="word" className={'text-[38px] md:text-5xl font-semibold '}>
Diversify your portfolio</TextAnimate>
           
            <p className='text-lg lg:text-xl leading-[160%]'>
                Invest in a variety of asset classes — including 20 global stock exchanges and 100 cryptocurrencies — while managing all of your holdings in one place
            </p>
        </div>

        <div className='flex flex-wrap gap-3 justify-center mx-auto col-span-2'>
           <Button className="" size='default' variant={'destructive'}>Register</Button>
           <Button className="" size='default' variant={'secondary'}>Try Free Demo</Button>
        </div>
    </div>
  )
}

export default About
