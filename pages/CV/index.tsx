import { years } from '@/data/data';
import React, { useRef, useState } from 'react'
import clipboard from '../../assets/copy-content.png';
import Image from 'next/image';

function Resume() {
    const [myExp,setMyExp]=useState("")
    const [jobReqExp,setReqExp]=useState("");
    const [tooltip,setTooltip]=useState(false)
    const textareaRef=useRef(null);
    const tag=[]
    const copyToClipboard=()=>{
        let textarea:string|any=textareaRef?.current;
        textarea?.select();
        document.execCommand('copy')
    }
    // submit the form
    const handleSubmit=(e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const form=e.target;
        const title=form.JobTitle?.value;
        const experience=myExp;
        const requiredExp=jobReqExp;
        const additionalInfo=form.additionalInfo.value;
        const skill=form.skill.value;
        const data={title,experience,requiredExp,additionalInfo,skill}
        console.log(data);
        
    }
    return (
        <div className="pt-24 mx-[5%]">
            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-12 md:col-span-5">
                    <form onSubmit={handleSubmit} action="" className='space-y-3'>
                        {/* Job title */}
                        <div className="flex flex-col">
                            <label htmlFor="title">Write Job title</label>
                            <input className='focus:outline-none dark:bg-gray-200 p-2 rounded-lg' type="text" name="JobTitle" id="" placeholder='Job title ...' />
                        </div>
                        {/* Job experience */}
                        <div className="flex justify-between">
                            <div className="flex flex-col w-[45%]">
                                <label htmlFor="title">Your Job Experience</label>
                                <select onChange={(e)=>setMyExp(e.target.value)} className='w-full rounded-sm bg-gray-200 p-2 focus:outline-none' name="Your Experience" id="">
                                    {
                                        years.map(yr => <option key={yr.id}>{yr.experience}</option>)
                                    }
                                </select>
                            </div>
                            <div className="flex flex-col w-[45%]">
                                <label htmlFor="title">Required Job Experience </label>
                                <select onChange={(e)=>setReqExp(e.target.value)} className='w-full rounded-sm bg-gray-200 p-2 focus:outline-none' name="Your Experience" id="">
                                    {
                                        years.map(yr => <option key={yr.id}>{yr.experience}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        {/* Your skill */}
                                <div className="flex flex-col">
                                    <label htmlFor="skill">Write your skill</label>
                                    <input className='focus:outline-none dark:bg-gray-200 p-2 rounded-lg' type="text" name="skill" id="" placeholder='Separate skill by (,) comma' />
                                    {/* <button></button> */}
                                </div>
                                {/* additional info */}
                                <div className="flex flex-col">
                                    <label htmlFor="additional-info"> Additional Information</label>
                                    <textarea className='bg-gray-200 focus:outline-none p-2' name="additionalInfo" id="" cols={30} rows={8}></textarea>
                                </div>
                                {/* submit btn */}
                                <div className="">
                                    <button type='submit' className='w-full bg-blue-500 p-4 rounded-lg  text-white font-lg'>Generate</button>
                                </div>
                    </form>
                </div>
                <div  className="col-span-12 md:col-span-7 relative">
                    <label htmlFor="resume">Your Resume</label>
                    <textarea ref={textareaRef} name="resume" id=""  className='w-full h-[400px] md:h-full lg:h-[80vh] border focus:outline-none bg-gray-100 rounded-lg p-2 pt-5'></textarea>
                    <div onMouseEnter={()=>setTooltip(true)} onMouseLeave={()=>setTooltip(false)} onClick={copyToClipboard} className="absolute top-8 right-4 cursor-pointer active:animate-bounce">
                        {tooltip && <span className='absolute -top-5 transition '>Copy</span>}
                        <Image height={20} width={20} src={clipboard} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;