import React from 'react'
import { footer } from '../lib/definitions'

const Footer = () => {
  return (
    <section className='mt-8 text-right italic text-[12px] opacity-50'>
        <p> — Made with NextJS, TailwindCSS and &lt;3</p>
        <p>© {new Date().getFullYear()}, {footer.text}</p>
    </section>
  )
}

export default Footer;