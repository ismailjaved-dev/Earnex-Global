import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const About = () => {
  return (
    <div className='fluid-container grid grid-cols-2 gap-24 items-center max-w-[1150px] pt-28 pb-16'>
        <div className='relative w-full h-full max-w-[520px]'>
            <Image src={'/aboutImg.png'} fill alt=''/>
        </div>
        <div className='flex flex-col justify-center gap-5 min-h-[520px]  max-w-[470px]'>
            <h2 className='text-5xl font-semibold '>Diversify your portfolio</h2>
            <p className='text-xl leading-[160%]'>
                Invest in a variety of asset classes — including 20 global stock exchanges and 100 cryptocurrencies — while managing all of your holdings in one place
            </p>
        </div>

        <div className='flex gap-3 justify-center mx-auto col-span-2'>
           <Button className="" size='default' variant={'destructive'}>Register</Button>
           <Button className="" size='default' variant={'secondary'}>Try Free Demo</Button>
        </div>
    </div>
  )
}

export default About
