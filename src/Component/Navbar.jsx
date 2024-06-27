import React from 'react'
import { Link ,NavLink} from 'react-router-dom'
import { FcHome } from "react-icons/fc";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineContactPage } from "react-icons/md";
import { PiShoppingBagOpen } from "react-icons/pi";
import { TbBrandBlogger } from "react-icons/tb";
import { RiContactsBookLine } from "react-icons/ri";
import { IoMoonOutline } from "react-icons/io5";


const Navbar = () => {
  return (
   <>

  <nav className= ""> 
 <div className="container">
    <div className="menu_row p-5 flex justify-between flex-wrap">
    <div className="logo_col">
   <Link to="#" >  <img src="images/logo.png" alt="logo" /></Link>
    </div>
    <div className="menu">
        <ul className='flex flex-wrap gap-5 text-[13px] font-poppins font-medium text-inherit'>
           
        <NavLink
     to="Home"
     className={({ isActive }) => isActive ? "gap-[3px] bg- bg-purple-700 bg-red-500 px-[19px] h-10 flex justify-center items-center rounded-lg"
     : "gap-[3px] px-[19px] bg-white h-10 flex justify-center items-center rounded-lg" }><FcHome className='text-xl'/>Home</NavLink>
  <NavLink
     to="About"
     className={({ isActive }) => isActive ? "gap-[3px] bg- bg-purple-700 bg-red-500 px-[19px] h-10 flex justify-center items-center rounded-lg"
     : "gap-[3px] px-[19px] bg-white h-10 flex justify-center items-center rounded-lg" }><RiContactsLine className='text-xl'/>About</NavLink>
  <NavLink
     to="Resume"
     className={({ isActive }) => isActive ? "gap-[3px] bg- bg-purple-700 bg-red-500 px-[19px] h-10 flex justify-center items-center rounded-lg"
     : "gap-[3px] px-[19px] bg-white h-10 flex justify-center items-center rounded-lg" }><MdOutlineContactPage className='text-xl'/>Resume</NavLink>
  
  <NavLink
     to="works"
     className={({ isActive }) => isActive ? "gap-[3px] bg- bg-purple-700 bg-red-500 px-[19px] h-10 flex justify-center items-center rounded-lg"
     : "gap-[3px] px-[19px] bg-white h-10 flex justify-center items-center rounded-lg" }><PiShoppingBagOpen className='text-xl'/>Works</NavLink>
  
  <NavLink
     to="Blogs"
     className={({ isActive }) => isActive ? "gap-[3px] bg- bg-purple-700 bg-red-500 px-[19px] h-10 flex justify-center items-center rounded-lg"
     : "gap-[3px] px-[19px] bg-white h-10 flex justify-center items-center rounded-lg" }><TbBrandBlogger className='text-xl'/>Blogs</NavLink>
  
  <NavLink
     to="Contact"
     className={({ isActive }) => isActive ? "gap-[3px] bg- bg-purple-700 bg-red-500 px-[19px] h-10 flex justify-center items-center rounded-lg"
     : "gap-[3px] px-[19px] bg-white h-10 flex justify-center items-center rounded-lg" }><RiContactsBookLine className='text-xl'/>Contact</NavLink>
  
  <NavLink
     to=""
     className={({ isActive }) => isActive ? "gap-[3px] bg- bg-purple-700 bg-red-500 px-[19px] h-10 flex justify-center items-center rounded-lg"
     : "gap-[3px] px-[19px] bg-white h-10 flex justify-center items-center rounded-full" }>< IoMoonOutline /></NavLink>
  



 </ul> 
    </div>
    </div>
 </div>
  </nav>

   </>
  )
}

export default Navbar
 
