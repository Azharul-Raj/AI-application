import React from 'react'
import Image from 'next/image';
import Container from './Container';

import microsoft from '../../assets/clients/microsoft.svg';
import arbnb from '../../assets/clients/airbnb.svg';
import google from '../../assets/clients/google.svg';
import ge from '../../assets/clients/ge.svg';
import netflix from '../../assets/clients/netflix.svg';
import googleCloud from '../../assets/clients/google-cloud.svg';
import Marquee from 'react-fast-marquee';


function HeroSection() {
    return (
        <div className="relative" id="home">
            <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>
            <Container>
                <div className="relative pt-36 ml-auto">
                    <div className="lg:w-2/3 text-center mx-auto">
                        <h1 className="text-gray-900  font-bold text-5xl md:text-6xl xl:text-7xl">Shaping a world with <span className="text-indigo-700 ">reimagination.</span></h1>
                        <p className="mt-8 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!</p>
                        <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                            <a
                                href="#"
                                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-violet-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                            >
                                <span className="relative text-base font-semibold text-white"
                                >Get started</span
                                >
                            </a>
                            <a
                                href="#"
                                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-violet-500 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-200 dark:before:bg-gray-200 sm:w-max"
                            >
                                <span
                                    className="relative text-base font-semibold text-violet-700 "
                                >Learn more</span
                                >
                            </a>
                        </div>
                        <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
                            <div className="text-left">
                                <h6 className="text-lg font-semibold text-gray-700 ">The lowest price</h6>
                                <p className="mt-2 text-gray-500">Pick your best option</p>
                            </div>
                            <div className="text-left">
                                <h6 className="text-lg font-semibold text-gray-700">The fastest on the market</h6>
                                <p className="mt-2 text-gray-500">Fastest growing in the market</p>
                            </div>
                            <div className="text-left">
                                <h6 className="text-lg font-semibold text-gray-700">The most loved</h6>
                                <p className="mt-2 text-gray-500">People starts loving our products</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6"> */}
                    <Marquee speed={100} direction='right'>
                        <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
                        <div className="p-4 grayscale-0 transition duration-200 ">
                            <Image src={microsoft} className="h-12 w-auto mx-auto" loading="lazy" alt="client logo"  />
                        </div>
                        <div className="p-4 grayscale-0 transition duration-200 ">
                            <Image src={arbnb} className="h-12 w-auto mx-auto" loading="lazy" alt="client logo"  />
                        </div>
                        <div className="p-4 flex grayscale-0 transition duration-200 ">
                            <Image src={google} className="h-9 w-auto m-auto" loading="lazy" alt="client logo"  />
                        </div>
                        <div className="p-4 grayscale-0 transition duration-200 ">
                            <Image src={ge} className="h-12 w-auto mx-auto" loading="lazy" alt="client logo"  />
                        </div>
                        <div className="p-4 flex grayscale-0 transition duration-200 ">
                            <Image src={netflix} className="h-8 w-auto m-auto" loading="lazy" alt="client logo"  />
                        </div>
                        <div className="p-4 grayscale-0 transition duration-200 ">
                            <Image src={googleCloud} className="h-12 w-auto mx-auto" loading="lazy" alt="client logo"  />
                        </div>
                        </div>
                    </Marquee>
                </div>
            </Container>
        </div>
    )
}

export default HeroSection