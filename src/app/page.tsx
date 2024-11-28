"use client";

import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer';
import Skills from '@/components/Skills'
import React from 'react'



const page = () => {
  return (
    <div>
      <main>
        <Hero />
        <Skills />
        <Contact />
        <About />
        <Footer />~
      </main>
    </div>
  )
}

export default page
