import { years } from '@/data/data';
import React from 'react'

function Resume() {
    const tag=[]
    const handleAdd=()=>{

    }
    return (
        <div className="pt-24 mx-[5%]">
            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-5">
                    <form action="" className='space-y-3'>
                        {/* Job title */}
                        <div className="flex flex-col">
                            <label htmlFor="title">Write Job title</label>
                            <input className='focus:outline-none dark:bg-gray-200 p-2 rounded-lg' type="text" name="title" id="" placeholder='Job title ...' />
                        </div>
                        {/* Job experience */}
                        <div className="flex justify-between">
                            <div className="flex flex-col w-[45%]">
                                <label htmlFor="title">Your Job Experience</label>
                                <select className='w-full rounded-sm bg-gray-200 p-2 focus:outline-none' name="Your Experience" id="">
                                    {
                                        years.map(yr => <option key={yr.id}>{yr.experience}</option>)
                                    }
                                </select>
                            </div>
                            <div className="flex flex-col w-[45%]">
                                <label htmlFor="title">Required Job Experience </label>
                                <select className='w-full rounded-sm bg-gray-200 p-2 focus:outline-none' name="Your Experience" id="">
                                    {
                                        years.map(yr => <option key={yr.id}>{yr.experience}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        {/* Your skill */}
                                <div className="flex flex-col">
                                    <label htmlFor="skill">Write your skill</label>
                                    <input className='focus:outline-none dark:bg-gray-200 p-2 rounded-lg' type="text" name="skill" id="" placeholder='Your skill ...' />
                                    <button></button>
                                </div>
                    </form>
                </div>
                <div className="col-span-7"></div>
            </div>
        </div>
    )
}

export default Resume;