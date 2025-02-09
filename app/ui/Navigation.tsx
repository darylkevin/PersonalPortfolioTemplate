"use client";

import React from 'react'
import { motion } from 'motion/react'
import { navs } from '../lib/definitions'

interface Navigation {
    shortHand?: boolean,
    flex?: boolean
}

const Navigation = ( { shortHand = true, flex = true } : Navigation ) => {
  return (
    <nav className={`font-normal ${flex ? "flex justify-between gap-2 pb-4" : "p-4"}`}>
        {navs.map((nav, i) => 
            <div key={i} className=''>
                <motion.p
                initial={{ x: 0 }}
                whileHover={{ x: 10, scale: 1.05 }}>
                  {shortHand ? nav.shortPart : nav.longPart}
                </motion.p>
            </div>
        )}
    </nav>
  )
}

export default Navigation