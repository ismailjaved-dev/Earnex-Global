"use client";
import React, { useState, useEffect } from "react";
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogDescription,
} from "@/components/ui/alert-dialog"; 

import {  X } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";


const AlertBox = () => {
    const [open, setOpen] = useState(false);
      const [data, setData] = useState({email:"", number: "", interest:""})
  const [loading, setLoading] = useState(false)
 const [active, setActive] = useState(false)

  useEffect(() => {
     const handleScroll = () => {
      const currentScrollY = window.scrollY; // Current scroll position (vertical)
      const documentHeight = document.documentElement.scrollHeight; // Total document height
      const windowHeight = window.innerHeight; // Visible window height

      // Calculate the percentage of the page scrolled
      const scrollPos = (currentScrollY / (documentHeight - windowHeight)) * 100;

       scrollPos > 3 && setActive(true)
       scrollPos < 3 && setActive(false)
     
  
    
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




    useEffect(() => {
        setTimeout(() => {
            setOpen(true);
        }, 10000);
    }, []);

    const handleSubmit = (e) =>{
        
            e.preventDefault()
     
    setLoading(true)
    
    fetch('https://sheetdb.io/api/v1/9riwz6dpixu6c', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: [
          {
            'Number': data.number,
            'Newsletter': '-',
            'Email': data.email,
            'Interest': data.interest,
          }
        ]
      })
    })
    .then((response) => response.json())
    .then((res) => {
      setLoading(false)
    setData({email:"", number: "", interest:""})
  })
   .catch((error)=> console.log(error))
  }

    return (
    
     <>
      <button className={`fixed z-100 bottom-[25px] right-[25px] bg-white text-black rounded-3xl  w-[50px] h-[50px] overflow-hidden flex items-center justify-center hover:bg-[#2bf568] transition duration-300 ease-in-out  ${active ? 'opacity-100 cursor-pointer' : 'opacity-0 '}`} disabled={!active && true} onClick={()=>{
        window.open('https://t.me/earnexglobal', '_blank');
      }}>
        <Image src={'/telegram.png'} fill alt=""/>
      </button>
        <AlertDialog  open={open} >

  <AlertDialogContent className='bg-[#1b1c24] rounded-2xl py-6 px-8 backdrop-blur-5xl border-none mx-auto max-h-[90dvh] w-full max-w-[400px]! overflow-y-auto '>
    <div className="relative ">
        <div onClick={() => !loading && setOpen(false)} className="absolute -top-3 -right-4 cursor-pointer border-[1.5px] w-6 rounded-full h-6   flex justify-center items-center">
                        <X size={40} className="size-10 max-h-[18px]" />
                    </div>
    </div>
        
         
    <AlertDialogHeader>
      
      <AlertDialogDescription className=''>
   <form onSubmit={(e)=> handleSubmit(e)} className="flex flex-col gap-5 mb-5">
    <p className="text-lg md:text-xl text-center font-semibold text-white">Interested? Let's Talk!</p>
     <div className="flex items-center justify-between bg-[#2F324180] px-8 py-3 rounded-full border border-[#34384C] h-15">
               <input
               placeholder="Phone"
                 type="text"
                 required
                value={data.number}
                 onChange={(e)=> setData({...data, number:e.target.value})}
                 className="bg-transparent text-white text-lg outline-none w-full font-light"
               />
             </div>
   <div className="flex items-center justify-between bg-[#2F324180] px-8 py-3 rounded-full border border-[#34384C] h-15">
               <input
               placeholder="Email"
                 type="email"
                 required
                 value={data.email}
                 onChange={(e)=> setData({...data, email:e.target.value})}
                 className="bg-transparent text-white text-lg outline-none w-full font-light"
               />
             </div>
   <div className="flex items-center justify-between bg-[#2F324180] px-8 py-3 rounded-full border border-[#34384C] h-15">
               <input
               placeholder="Interest"
                 type="text"
                 required
               value={data.interest}
                 onChange={(e)=> setData({...data, interest:e.target.value})}
                 className="bg-transparent text-white text-lg outline-none w-full font-light"
               />
             </div>
             <Button
          variant="default"
          size="default"
          className="rounded-full w-full font-semibold"
          type='submit' disabled={loading}
        >
          Submit
        </Button>
   </form>
      </AlertDialogDescription>
      
    </AlertDialogHeader>
      
  </AlertDialogContent>
</AlertDialog>
     </>
    );
};

export default AlertBox;