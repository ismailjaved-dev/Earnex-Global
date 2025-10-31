import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const TradingPortfolio = () => {

    const data = [
        { title: "Register", description: "Signup for an Itrade account and get access to world class pricing.", button: true },
        { title: "Verify your identity", description: "Complete the identity verification process to secure your account and transactions.", button: false },
        { title: "Start trading", description: "You're good to go! Trade 300+ markets across forex, crypto, stocks, commodities.", button: false },
    ]



    return (
        <div className='fluid-container grid grid-cols-2 py-16 gap-10 px-5'>
        <div>
            <h2 className='text-5xl font-semibold mb-12 max-w-[530px]'>Start Your Trading Portfolio.</h2>
            {data.map((item, index) => (
                <div key={index} className='mb-8 max-w-lg relative pl-[92px]'>
                    <span className='bg-[#095171] rounded-full h-11 w-11 flex items-center justify-center absolute top-0 left-0'>{index+1}</span>
                    <h3 className='text-[25px] font-semibold mb-2'>{item.title}</h3>
                    <p className='text-xl font-light mb-4 max-w-[500px]'>{item.description}</p>
                    {item.button && <Button variant={'default'} size={'default'} className='rounded-full!'>Get Started</Button>}
                </div>
            ))}
        </div>
        <div className='relative '>
           <Image src={'/build-portfolio-img.svg'} alt='' fill className='max-w-[550px] max-h-[550px] my-auto right-0! left-auto!'/>
        </div>
        </div>
    )
}

export default TradingPortfolio
