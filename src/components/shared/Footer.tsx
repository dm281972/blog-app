import React from 'react'
import { footerLinks } from '../../constants'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   
        <footer className='flex flex-col text-black-100  mt-5 border-t border-black max-w-[1440px] mx-auto'>
         
          <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <img src='assets/images/logo.svg' alt='logo' width={118} height={18} className='object-contain' />
           <p className='text-base text-gray-700'>
          Bloghub 2023 <br />
          All Rights Reserved &copy;
        </p>
        </div>

        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
        {footerLinks.map((item) => (
          <div key={item.title} className="flex flex-col gap-6 text-base min-w-[170px]">
            <h3 className="font-bold text-black">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  to={link.url}
                  className="text-black"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

       </div>
        
  
    </footer>
      
 
  )
}

export default Footer
