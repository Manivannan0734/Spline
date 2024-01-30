'use client'
import styles from '../app/styles/page.module.css'
import Header from './comp/Header'
import Middle from './comp/Middle'
import Footer from './comp/Footer'
import React from 'react'
import Mani from '../../public/Mani'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'

const page = () => {
  return (
    <div>
      <Header/>
      <Middle/>
      
      <Footer/>
      
    </div>
  )
}

export default page