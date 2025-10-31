import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


interface Stat {
  title: string;
  subtitle: string;
}

const statsData: Stat[] = [
  { title: "$0 Fee", subtitle: "On Deposits" },
  { title: "300+", subtitle: "Markets to trade" },
  { title: "1ms", subtitle: "Execution from" },
  { title: "24/7", subtitle: "Markets open" },
  { title: "0.0 Pips", subtitle: "Spread from" },
  { title: "Trustful", subtitle: "Website" },
];


const Trade = () => {
    return (
        <div className='fluid-container px-5 pt-20 pb-10'>
            <div className='max-w-[800px] mx-auto'>
                <h2 className='text-[38px] md:text-[48px] font-semibold text-center mb-5'>Trade Anywhere, Anytime.</h2>
                <p className='md:text-lg lg:text-xl text-center'>
                    4 platforms to choose from —
                    <Link className='underline decoration-[#CDCDCD] px-1' href='https://afterprime.com/tradingview' target='_blank'>TradingView</Link>,
                    <Link className='underline decoration-[#CDCDCD] px-1' href='https://afterprime.com/mt4' target='_blank'>MT4</Link>,
                    <Link className='underline decoration-[#CDCDCD] px-1' href='https://afterprime.com/traderevolution' target='_blank'>TraderEvolution</Link>
                    or
                    <Link className='underline decoration-[#CDCDCD] px-1' href='https://afterprime.com/fixapi' target='_blank'>FIX API</Link>
                    . Across all devices — Web, iPhone, Android, Windows and Mac.
                </p>
            </div>

            <div className='max-w-[1000px] mx-auto py-10 md:py-20 flex flex-wrap sm:flex-nowrap justify-center gap-10'>
                  <div className='relative rounded-lg block h-[300px] w-[300px] hover:scale-110 transition-all duration-300'>
                    <Image src={'/tradeImg1.svg'} fill alt=''/>
                  </div>
                  <div className='relative rounded-lg block h-[300px] w-[300px] hover:scale-110 transition-all duration-300'>
                    <Image src={'/tradeImg2.svg'} fill alt=''/>
                  </div>
                  <div className='relative rounded-lg block h-[300px] w-[300px] hover:scale-110 transition-all duration-300'>
                    <Image src={'/tradeImg3.svg'} fill alt=''/>
                  </div>
            </div>


 <div className="flex justify-center w-full px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center text-white max-w-[1200px] w-full">
        {statsData.map((item, i) => {
          // total items
         
          return (
            <div
              key={i}
              className={`flex flex-col items-center justify-center py-10 px-4  border-[#09517180]
                                                ${(i + 1) % 2 === 0 ? 'border-r-0' : 'sm:border-r '}
                                ${(i + 1) % 3 === 0 ? 'md:border-r-0' : 'md:border-r '}
                `}
            >
              <h3 className="text-[25px] font-bold">{item.title}</h3>
              <p className="text-xl mt-1 text-gray-300">{item.subtitle}</p>
            </div>
          );
        })}
      </div>
    </div>

        </div>
    )
}

export default Trade
