import { FooterLink } from '@/common'
import React from 'react'

const Links = ({ name, links }: FooterLink) => {
  return (
    <div>
      <h1 className='font-bold font-test_staff text-2xl mb-6'>{name}</h1>
      {links.map((link) => (
        <p key={link.name} className='text-xl mb-3'>{link.name}</p>
      ))}
    </div>
  )
}

export default Links