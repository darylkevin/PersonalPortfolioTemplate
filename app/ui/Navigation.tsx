import React from 'react'
import { navs } from '../lib/definitions'

interface Navigation {
    shortHand?: boolean,
    flex?: boolean
}

const Navigation = ( { shortHand = true, flex = true } : Navigation ) => {
  return (
    <nav className={`font-normal ${flex ? "flex justify-between gap-2 pb-4" : "p-4"}`}>
        {navs.map((nav, i) => 
            <div key={i} className='hover:font-semibold hover:cursor-pointer hover:text-lg transition-all'>
                {shortHand ? nav.shortPart : nav.longPart}
            </div>
        )}
    </nav>
  )
}

export default Navigation