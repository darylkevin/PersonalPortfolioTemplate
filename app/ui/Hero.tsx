'use client';

import React, { useContext, useEffect, useState } from 'react'
import { hero } from '../lib/definitions'
import Link from 'next/link'
import ThemeContext from './contexts/ThemeContext';
import { useSearchParams } from 'next/navigation';

const Hero = () => {

  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    if (theme === 'light') {
        setTheme('dark');
    } else {
        setTheme('light');
    }
  }

  return (
    <Link href='#' className='hover:cursor-pointer'>
        <main>
            <article className='text-5xl font-bold' onClick={() => toggleTheme()}>
                {hero.name}
            </article>
            <section className='pt-1 text-lg font-normal text-zinc-400'>
                {hero.title}
            </section>
        </main>
    </Link>
  )
}

export default Hero