'use client';
import React from 'react'
import Image from 'next/image';

const logos = [
    { name: 'UBP', url: '/logo1.svg' },
    { name: 'Pictet', url: '/pictet.png' },
    { name: 'IBM', url: '/ibm.png' },
    { name: 'Deutsche Bank', url: '/logo4.svg' },
    { name: 'J. Safra Sarasin', url: '/logo5.svg' },
    { name: 'Intel', url: '/logo6.svg' },
    { name: 'Coutts', url: '/logo7.svg' },
    { name: 'J.P. Morgan', url: '/logo8.svg' },
];



const LogoGrid = () => {
    return (
        <div className="w-full  bg-black flex flex-col items-center justify-center px-6 py-10 gap-12">

                  <p className='text-2xl font-semibold text-center '>Your funds are held in top-tier institutions</p>           
                  
            <div
                className="grid grid-cols-2 md:grid-cols-4 w-full max-w-[1200px] mx-auto gridContainer">
                {logos.map((logo, index) => (
                    <div
                        key={index}
                        className="
              relative flex items-center justify-center bg-black "

                    >
                        <div
                            className={`flex items-center justify-center w-full h-60 py-10  bg-black  border-[#09517180]
                              ${(index + 1) % 4 === 0 ? '' : 'border-r'}
                            `}>
                            <Image
                                src={logo.url}
                                alt={logo.name}
                                width={160}
                                height={60}
                                className="object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LogoGrid
