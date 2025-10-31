"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const CryptoConverter: React.FC = () => {
  const [isBuy, setIsBuy] = useState(true);
  const [usd, setUsd] = useState(5000);
  const [btc, setBtc] = useState(0.0455);

  // Conversion constants
  const USD_TO_BTC = 0.0000091; // 1 USD = 0.0000091 BTC
  const BTC_TO_USD = 1 / USD_TO_BTC; // 1 BTC = 109,890.11 USD

  const convertUsdToBtc = (usd: number): number =>
    parseFloat((usd * USD_TO_BTC).toFixed(7)); // 4 decimal places

  const convertBtcToUsd = (btc: number): number =>
    parseFloat((btc * BTC_TO_USD).toFixed(2)); // 2 decimal places

  // Handlers
  const handleUsdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setUsd(value);
    setBtc(convertUsdToBtc(value));
  };

  const handleBtcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setBtc(value);
    setUsd(convertBtcToUsd(value));
  };

  return (
    <div className="py-20 px-5">

              <div className="max-w-[680px] mx-auto text-center mb-12">
                <h2 className="text-[49px] font-bold mb-24px leading-[1.1]">One click, instant payout with credit or debit card.</h2>
                <p>Become a crypto owner in minutes using your debit or credit card and quickly purchase top cryptocurrencies.</p>
              </div>

      <div className="w-[350px] sm:w-[400px] bg-[#2F324190] rounded-2xl py-6 px-8 backdrop-blur-5xl mx-auto relative">
        <Image src={'/cardImg.svg'} fill alt="" className="-z-10 top-[50px]! left-[-150px]!"/>
        {/* Tabs */}
        <div className="flex justify-between mb-6">
          <button
            onClick={() => setIsBuy(true)}
            className={`text-lg font-semibold text-center grow ${
              isBuy ? "text-[#1A82FF]" : "text-[#5D6588]"
            }`}
          >
            Buy
          </button>
          <div className="h-8 w-px bg-[#34384C] mx-2" />
          <button
            onClick={() => setIsBuy(false)}
            className={`text-lg font-semibold text-center grow ${
              !isBuy ? "text-[#1A82FF]" : "text-[#5D6588]"
            }`}
          >
            Sell
          </button>
        </div>

        {/* Rate Info */}
        <div className="text-center mb-8 mt-4">
          <p className="mb-2">1 BTC is roughly</p>
          <p className="text-[20px] font-semibold text-white">
            {BTC_TO_USD.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}{" "}
            <span className="text-[#A5ADCF] text-base">USD</span>
          </p>
        </div>

        {/* Input Fields */}
        <div className="flex flex-col gap-6 mb-6">
          {/* USD Input */}
          <div className="flex items-center justify-between bg-[#2F324180] px-8 py-3 rounded-full border border-[#34384C] h-15">
            <input
              type="number"
              value={usd}
              onChange={handleUsdChange}
              className="bg-transparent text-white text-lg outline-none w-full font-light"
            />
            <div className="flex items-center gap-1 text-gray-300">
              <Image src="/usdIcon.svg" width={14} height={14} alt="" />
              <span className="font-semibold text-white">USD</span>
            </div>
          </div>

          {/* BTC Input */}
          <div className="flex items-center justify-between bg-[#2F324180] px-8 py-3 rounded-full border border-[#34384C] h-15">
            <input
              type="number"
              value={btc}
              onChange={handleBtcChange}
              className="bg-transparent text-white text-lg outline-none w-full font-light"
            />
            <div className="flex items-center gap-1 text-gray-300">
              <Image src="/bitcoinIcon.svg" width={28} height={28} alt="" />
              <span className="font-semibold text-white">BTC</span>
            </div>
          </div>
        </div>

        {/* Button */}
        <Button
          variant="default"
          size="default"
          className="rounded-full w-full font-semibold"
        >
          {isBuy ? "Buy Now" : "Sell Now"}
        </Button>
      </div>

      <div className="max-w-[490px] mx-auto px-5 mt-20">
             <p className="text-[#5D6588] text-center">We accept payment with many methods:</p>
             <div className="flex gap-8 justify-between mt-2">
                <Image src={'/master.svg'} width={64} height={64} alt=""/>
                <Image src={'/visa.svg'} width={64} height={64} alt=""/>
                <Image src={'/apple-pay.svg'} width={64} height={64} alt=""/>
                <Image src={'/google-pay.svg'} width={64} height={64} alt=""/>
                <Image src={'/paypal.svg'} width={64} height={64} alt=""/>
             </div>
      </div>
    </div>
  );
};

export default CryptoConverter;
