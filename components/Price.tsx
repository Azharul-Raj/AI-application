import { InfoContext } from '@/contexts/InfoProvider';
import { PriceDataType } from '@/types/types';
import Link from 'next/link';
import React, { useContext } from 'react'

function Price({data}:PriceDataType) {
    const {setPriceInfo}=useContext(InfoContext);
    const {plan,price,advantage,priceId}=data;
  return (
    <div className={`group relative md:col-span-1 ${plan=="Standard"? "lg:w-[36%]":"lg:w-[34%]"} `}>
                    <div
                        aria-hidden="true"
                        className="absolute top-0 h-full w-full rounded-3xl border border-gray-100  bg-white  shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
                    ></div>
                    <div className="relative space-y-8 p-8">
                        <h3 className="text-center text-3xl font-semibold text-gray-700 ">{plan}</h3>
                        <div className="relative flex justify-around">
                            <div className="flex">
                                <span className="-ml-6 mt-2 text-3xl font-bold text-primary">$</span>
                                <span className="leading-0 text-8xl font-bold text-gray-800 ">{price}</span>
                            </div>
                            <span className="absolute right-9 bottom-2 lg:right-2 text-xl font-bold text-primary"
                            >/ Mo</span
                            >
                        </div>
                        <ul role="list" className="m-auto w-max space-y-4 pb-6 text-gray-600 ">
                            {
                                advantage.map((adv,i)=>(
                                    <li key={i} className="space-x-2">
                                <span className="font-semibold text-primary">✓</span>
                                <span>{adv}</span>
                            </li>
                                ))
                            }
                           
                        </ul>
                        <Link href={'/Checkout'} onClick={()=>setPriceInfo({price:price,prideId:priceId})} className={`relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full ${plan==='Standard'?"before:rounded-full before:bg-gradient-to-r from-yellow-300 to-pink-300":"before:bg-sky-50"}  before:border before:border-sky-500  before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95`}>
                            <span className={`relative text-base font-semibold ${plan==="Standard"?"text-gray-900":"text-sky-600"}  `}>Get Started</span>
                        </Link>
                    </div>
                </div>
  )
}
{/*  */}
export default Price;