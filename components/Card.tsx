"use client"
import React from 'react'
import { PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
interface imageProps{
    image:{
        url:string
    }
    id:number
}

function Card({image,id}:imageProps) {
    console.log(image);
    
  return (
    <div className='max-h-80 col-span-3'>
        <PhotoView key={image.url} src={`${image.url}`}>
        <img src={image.url} alt="" />
        {/* <img src="https://cdn.openai.com/API/images/guides/image_generation_detailed.webp" alt="" /> */}
        </PhotoView>
    </div>
  )
}

export default Card;