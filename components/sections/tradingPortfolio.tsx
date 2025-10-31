import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { TextAnimate } from '../ui/text-animate'

const TradingPortfolio = () => {

    const data = [
        { title: "Register", description: "Signup for an Itrade account and get access to world class pricing.", button: true },
        { title: "Verify your identity", description: "Complete the identity verification process to secure your account and transactions.", button: false },
        { title: "Start trading", description: "You're good to go! Trade 300+ markets across forex, crypto, stocks, commodities.", button: false },
    ]



    return (
        <div className='fluid-container grid lg:grid-cols-2 py-10 lg:py-16 gap-10 px-5'>
        <div>
             <TextAnimate animation="slideUp" by="word" className={'text-[40px] md:text-[50px] lg:text-5xl font-semibold mb-12 lg:max-w-[530px] text-center lg:text-start'}>
Start Your Trading Portfolio.</TextAnimate>
            {data.map((item, index) => (
                <div key={index} className='mb-8 lg:max-w-lg relative pl-[60px] sm:pl-[92px]'>
                    <span className='bg-[#095171] rounded-full h-11 w-11 flex items-center justify-center absolute top-0 left-0'>{index+1}</span>
                    <h3 className='text-[25px] font-semibold mb-2'>{item.title}</h3>
                    <p className='md:text-lg lg:text-xl font-light mb-4 lg:max-w-[500px]'>{item.description}</p>
                    {item.button && <Button variant={'default'} size={'default'} className='rounded-full!'>Get Started</Button>}
                </div>
            ))}
        </div>
        <div className='relative hidden lg:block'>
           <Image src={'/build-portfolio-img.svg'} alt='' fill className='max-w-[550px] lmax-h-[550px] my-auto right-0! left-auto!'/>
        </div>
        </div>
    )
}

export default TradingPortfolio
