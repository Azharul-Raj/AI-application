import Image from 'next/image'
import {  Poppins } from 'next/font/google'
import styles from '../styles/custom.module.css'
import React, { useState } from 'react'
import Card from '@/components/Card'
import {PhotoProvider} from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Spinner from '@/components/Spinner'
import HeroSection from '@/components/others/HeroSection'
import Features from '@/components/others/Features'
import Stats from '@/components/others/Stats'
import Testimonials from '@/components/others/Testimonials'
import CallToAction from '@/components/others/CallToAction'
import Blog from '@/components/others/Blog'
import Pricing from '@/components/Pricing'



export default function Home() {
  return(
    <main className=''>
      <HeroSection/>
      <Pricing/>
		<Features/>
		<Stats/>
		<Testimonials/>
		<CallToAction/>
		<Blog/>
    </main>
  )
}
