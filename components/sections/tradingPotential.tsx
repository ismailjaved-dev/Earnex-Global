import { ArrowRight, MoveRightIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const TradingPotential = () => {
    return (
        <div className='fluid-container max-w-[1140px] grid grid-cols-2 gap-5 pt-28 pb-10'>
            <div className='flex flex-col gap-15 py-5'>
                <h2 className='text-5xl font-semibold max-w-[490px] leading-[1.3]'>Unlock Your Trading Potential</h2>
                <p className='text-xl max-w-[640px]' style={{wordSpacing:"1px"}}>
                    With real time data and advanced charting tools, You can
                    track your portfolio and quickly react to changes in the market.
                </p>
                <div className='relative h-15 w-full'>
                    <input placeholder='Enter your email address'
                     className='rounded-full w-full h-full border border-[#FFFFFF59] outline-none py-3 px-8 font-sora
                      text-[#FFFFFF8C] text-xl placeholder:text-[#FFFFFF8C] 
                     '/>
                     <button className='text-black text-xl absolute rounded-full h-15 flex justify-center gap-3 items-center w-40 border border-[#FFFFFF59] btn-gradient font-semibold top-0 right-0 cursor-pointer'>Send <MoveRightIcon /></button>
                </div>
            </div>
            <div className='relative w-full h-full max-w-[664px] min-h-[664px]'>
                <div className='ellipse block h-[600px] w-[600px] absolute rounded-full'></div>
                <Image src={'/tradeImg.png'} fill alt=''/>
            </div>
        </div>
    )
}

export default TradingPotential
