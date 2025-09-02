"use client"
import React from 'react'
import { useTheme } from 'next-themes'
import Head from "next/head";


const ThemeSwitcher = () => {
    const {theme,setTheme}=useTheme()
    
  return (
    <>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet" />
  </Head>
    <div>
      {/* The current theme is: {theme}
      <button onClick={()=>{setTheme('light')}}>Light Mode</button>
      <button onClick={()=>{setTheme('dark')}}>Dark Mode</button> */}
    </div>
    </>
  )
}

export default ThemeSwitcher

