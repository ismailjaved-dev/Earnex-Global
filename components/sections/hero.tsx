import Image from 'next/image'
import React from 'react'

const Hero = () => {

    const data = [
        {
            style:'1',
            title:"70,000+",
            text:"Active Traders"
        },
        {
            style:'2',
            title: "Multiple Regulatory Licenses",
            maxWidth: "max-w-[250px]"
        },
        {
            style:'2',
            title: "PCI DSS Certified",
            maxWidth: "max-w-[150px]"
        },
        {
            style:'1',
            title:"24/7",
            text:"Customer Support"
        }
    ]

    return (
        <div className='relative overflow-hidden '>
           <div className='relative pt-[150px] pb-[270px] sm:pb-[350px] md:pb-[450px] lg:pb-[490px] overflow-hidden px-5'>
             <Image src={'/heroBg.png'} fill alt='' className='object-cover object-center -z-10 h-[113%]!' />
            <h1 className='font-bold text-[40px] md:text-[50px] lg:text-[55px] text-center max-w-[650px] mx-auto leading-[1.2]'>Transform Opportunities
                into Profits</h1>
            <p className='text-lg lg:text-xl text-center max-w-[625px] mx-auto mt-5 tracking-[1.5px]'>Trade with the world's largest retail broker and benefit from
                better-than-market conditions.</p>
           </div>

            <Image src={'/heroImg2.svg'} fill alt='' className='-z-10 sm:bottom-0! top-[150px]! sm:top-auto! max-h-[752px]'/>

            <div className='min-h-[235] w-full bg-[#05050580]  backdrop-blur-2xl flex flex-col justify-center py-5'>
                <div className='max-w-[1200px] mx-auto h-full flex flex-col sm:flex-row flex-wrap justify-around items-center gap-x-16 gap-y-10 px-5'>
                   {
                    data.map((item, index) => (
                        <div key={index} className='flex flex-col gap-4 justify-center items-center text-center '>
                            <h3 className={`font-semibold sora ${item.style === '1' ? 'text-[40px] md:text-[50px] lg:text-[56px]' : 'text-2xl'} ${item.maxWidth} `}>{item.title}</h3>
                           {item.text && <p className='text-lg text-[#CDCDCD]'>{item.text}</p>}
                        </div>
                    ))
                   }
            </div>
            </div>

        </div>
    )
}

export default Hero
