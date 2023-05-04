import Image from 'next/image'
import {  Poppins } from 'next/font/google'
import styles from '../styles/custom.module.css'
import React, { useState } from 'react'
import Card from '@/components/Card'
import {PhotoProvider} from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Spinner from '@/components/Spinner'



export default function Home() {
  const [images,setImages]=useState([]);
  const handleSubmit=(e:React.ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault();
    e.target.prompt.value
    fetch(`/api/generateImage`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({prompt:e.target?.prompt?.value})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setImages(data?.images);
    })
    .catch(err=>console.log(err))
    e.target.reset()
  }
  return (
    <main >
      {/* <Header/> */}
      <div className="pt-24 px-10 md:px-[20%]">
        {/* input field */}
        <form onSubmit={handleSubmit} action="" className={`flex rounded-[10px]  ${styles.customShadow}`}>
          <input className='w-full text-gray-700 pl-5 focus:outline-none p-[12px' placeholder='Generate your desired images' type="text" name="prompt" id="" />
          <button className={`border-l p-[12px] font-semibold text-gray-500 rounded-tr-[10px] rounded-br-[10px] focus:bg-gray-950 focus:text-white hover:bg-gray-950 hover:text-white`} type='submit'>Generate</button>
        </form>
      </div>
        <PhotoProvider>
      <div className="grid grid-cols-12 gap-4 px-[2%]">
        { !images? <Spinner/>:
          images?.map((image,i)=><Card key={i} id={i} image={image}/>)
        }
      </div>
      </PhotoProvider>
    </main>
  )
}
