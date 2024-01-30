import React from 'react'
import Spline from '@splinetool/react-spline'
import styles from '../../app/styles/page.module.css'
import { Suspense } from 'react'

const Header = () => {
  const Spline = React.lazy(() => import('@splinetool/react-spline'));
  return (

    <div className={styles.container} >
      
   
<div  className={styles.canvas} >
  

    <Suspense fallback={<div>Loading...</div>}>
    <Spline scene="https://prod.spline.design/GfJNqJIvXPb0D33t/scene.splinecode" />
  </Suspense>
  </div>
  </div>
  )
}

export default Header