'use client';

import React, { useContext, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { profileLinks } from '../lib/definitions'
import ThemeContext from './contexts/ThemeContext';

const Profiles = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <section className='mt-8 flex gap-2'>
        {profileLinks.map((profileLink, i) => 
                <Link
                    key={i}
                    href={profileLink.url}
                    className='opacity-75 hover:scale-105 hover:opacity-100 transition-all'
                >
                    <Image
                        src={`${theme === 'light' ? profileLink.iconBlack : profileLink.iconWhite}`}
                        alt={profileLink.alt}
                        width={24}
                        height={24}
                    />
                </Link>
        )}
    </section>
  )
}

export default Profiles;