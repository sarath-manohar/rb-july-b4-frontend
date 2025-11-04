import React from 'react'
import { MdEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className='bg-primary text-center text-dark p-5'>
        <h4>Contact Us</h4>
            <h6 className='mt-4'><MdEmail className="fs-4"/> rbuilder@gmail.com</h6>
            <h6><IoPhonePortraitOutline  className=" fs-4"/>9898989898</h6>
            <br />
        <h5>Connect with Us</h5>
        <div className='d-flex justify-content-center align-items-center'>
            <FaWhatsapp className='fs-4 me-3' />
            <FaInstagram className='fs-4 me-3'/>
            <FaLinkedin className='fs-4 me-3'/>
        </div>
        <p className='mt-3'><i>Designed & built with ❤️ using React</i></p>
    </div>
    </div>
  )
}

export default Footer
