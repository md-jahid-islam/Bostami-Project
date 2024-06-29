
import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BiBriefcase } from "react-icons/bi";
import { FaBlogger } from "react-icons/fa";
import { RiContactsBook3Line } from "react-icons/ri";
import { FaBarsProgress } from "react-icons/fa6";
import { HiOutlineMoon } from "react-icons/hi2";




const Navbar = () => {
    const [show, setShow]=useState(false)

    const handleShow=()=>{
        setShow(!show)
    }


  return (
    <>
        <nav>
            <div className="container">
                <div className="menu_row p-5 flex justify-between flex-wrap">
                    <div className="logo_col">
                       <Link to="#" >  <img src="images/logo.png" alt="logo" /></Link>
                    </div>
                    <div className="menu relative">
                        <FaBarsProgress onClick={handleShow} className='text-xl md:hidden'/>
                        {
                            show&&
                            <ul className='flex flex-col items-center gap-4 text-[13px] font-poppins font-medium text-inherit absolute right-3 top-[120%]'>
                                <li><NavLink to='/' className={({ isActive }) => isActive? 'gap-[3px] px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] ... h-10 flex justify-center items-center rounded-lg':'gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg'}><IoHomeOutline className='text-xl' />Home</NavLink></li>
                                <li><NavLink to='/about' className={({ isActive }) => isActive? 'gap-[3px] px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] ... h-10 flex justify-center items-center rounded-lg':'gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg'}><IoPersonOutline className='text-xl' />About</NavLink></li>
                                <li><NavLink to='/resume' className={({ isActive }) => isActive? 'gap-[3px] px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] ... h-10 flex justify-center items-center rounded-lg':'gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg'}><IoDocumentTextOutline className='text-xl' />Resume</NavLink></li>
                                <li><NavLink to='/work' className={({ isActive }) => isActive? 'gap-[3px] px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] ... h-10 flex justify-center items-center rounded-lg':'gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg'}><BiBriefcase className='text-xl' />Works</NavLink></li>
                                <li><NavLink to='/blog' className={({ isActive }) => isActive? 'gap-[3px] px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] ... h-10 flex justify-center items-center rounded-lg':'gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg'}><FaBlogger className='text-xl' />Blog</NavLink></li>
                                <li><NavLink to='/contact' className={({ isActive }) => isActive? 'gap-[3px] px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] ... h-10 flex justify-center items-center rounded-lg':'gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg'}><RiContactsBook3Line className='text-xl' />Contact</NavLink></li>
                                <li><NavLink to='/' className={({ isActive }) => isActive? 'gap-[3px] px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] ... h-10 flex justify-center items-center rounded-lg':'gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg'}><HiOutlineMoon  className='text-xl' /></NavLink></li>

                            </ul>                      
                        }
                        <div className='hidden md:block'>
                            <ul className='flex gap-4 text-[13px] font-poppins font-medium text-inherit '>
                                <li><NavLink to='/' className={({ isActive }) => isActive? 'gap-[3px] px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] ... h-10 flex justify-center items-center rounded-lg':'gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg'}><IoHomeOutline className='text-xl' />Home</NavLink></li>
                                <li><NavLink to='/about' className={({ isActive }) => isActive? 'gap-[3px] px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] ... h-10 flex justify-center items-center rounded-lg':'gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg'}><IoPersonOutline className='text-xl' />About</NavLink></li>
                                <li><NavLink to='/resume' className={({ isActive }) => isActive? 'gap-[3px] px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] ... h-10 flex justify-center items-center rounded-lg':'gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg'}><IoDocumentTextOutline className='text-xl' />Resume</NavLink></li>
                                <li><NavLink to='/work' className={({ isActive }) => isActive? 'gap-[3px] px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] ... h-10 flex justify-center items-center rounded-lg':'gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg'}><BiBriefcase className='text-xl' />Works</NavLink></li>
                                <li><NavLink to='/blog' className={({ isActive }) => isActive? 'gap-[3px] px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] ... h-10 flex justify-center items-center rounded-lg':'gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg'}><FaBlogger className='text-xl' />Blog</NavLink></li>
                                <li><NavLink to='/contact' className={({ isActive }) => isActive? 'gap-[3px] px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] ... h-10 flex justify-center items-center rounded-lg':'gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg'}><RiContactsBook3Line className='text-xl' />Contact</NavLink></li>
                                <li><NavLink to='/' className={({ isActive }) => isActive? 'gap-[3px] px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] ... h-10 flex justify-center items-center rounded-lg':'gap-[3px] px-[19px] bg-[#fff] h-10 flex justify-center items-center rounded-lg'}><HiOutlineMoon  className='text-xl' /></NavLink></li>

                            </ul>                          
                        </div>
                       
                    </div>
                </div>
            </div>
        </nav>
        
    </>
  )
}

export default Navbar
 
