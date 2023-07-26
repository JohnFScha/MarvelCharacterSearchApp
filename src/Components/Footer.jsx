import React from 'react'
import { StyledFooter, FooterTitle } from '../styles/componentStyles'

const Footer = () => {
  return (
    <StyledFooter className='relative bottom-0 p-5 border-t-2 w-full'>
      <FooterTitle className='text-center'>Data provided by Marvel. © 2014 Marvel</FooterTitle>
    </StyledFooter>
  )
}

export default Footer