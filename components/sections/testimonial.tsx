"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import 'swiper/css';
import 'swiper/css/pagination';

interface MediaItem {
    id: number;
    name: string;
    quote: string;
    logo: string;
}

const mediaData: MediaItem[] = [
    {
        id: 1,
        name: "Forbes",
        quote:
            "Derivative exchange America-based Cryptolly believes they will continue to grow in 2020.",
        logo: "/forbes.svg",
    },
    {
        id: 2,
        name: "EuroNews",
        quote:
            "Earnex Global continues to innovate with secure and transparent trading solutions.",
        logo: "/euronews.svg",
    },
    {
        id: 3,
        name: "Newsweek",
        quote:
            "Earnex Global is redefining modern trading with cutting-edge technology.",
        logo: "/newsweek.svg",
    },
    {
        id: 4,
        name: "Forbes",
        quote:
            "Derivative exchange America-based Cryptolly believes they will continue to grow in 2020.",
        logo: "/forbes.svg",
    },
    {
        id: 5,
        name: "EuroNews",
        quote:
            "Earnex Global continues to innovate with secure and transparent trading solutions.",
        logo: "/euronews.svg",
    },
    {
        id: 6,
        name: "Newsweek",
        quote:
            "Earnex Global is redefining modern trading with cutting-edge technology.",
        logo: "/newsweek.svg",
    }

];

const Testimonial = () => {
    return (
        <div className="fluid-container px-5 py-16">
            <h2 className="text-center text-[38px] md:text-[44px] fromt-semibold leading-[1.2] mb-16 ">What media says about<br />
             <span className="text-[42px] md:text-[49px] font-bold">Earnex  Global?</span></h2>
            <div className=" w-full text-center text-white relative">


                <div className="relative">

                    <div
                        className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer border border-white p-2 rounded-full"
                        id="media-prev"
                    >
                        <ChevronLeft size={20} />
                    </div>
                    <div
                        className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer border border-white p-2 rounded-full"
                        id="media-next"
                    >
                        <ChevronRight size={20} />
                    </div>

                    {/* Swiper */}
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            prevEl: "#media-prev",
                            nextEl: "#media-next",
                        }}
                        autoplay={{
                          delay: 3000,
                          disableOnInteraction: false,
                        }}
                        loop={true}
                        centeredSlides={true}
                        slidesPerView={1}
                        speed={700}
                        className="w-full items-center"
                        breakpoints={{
                            640:{
                                slidesPerView:2.6
                            }
                        }}
                    >
                        {mediaData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="flex flex-col items-center justify-center gap-4 rounded-xl p-8 sm:p-10 mx-auto w-full max-w-[600px]">
                                    <img
                                        src={item.logo}
                                        alt={item.name}
                                        className="w-[100px] object-contain"
                                    />
                                    <p className="text-[#cfd2e1] text-sm sm:text-base leading-relaxed">
                                        “{item.quote}”
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
