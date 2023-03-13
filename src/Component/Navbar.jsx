import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {

  const cartvalue=useSelector((state)=>state.product)
  return (
    <div className=' max-w-[100vw] px-[1rem] h-[100px] flex items-center md:px-[8rem]  2xl-[18rem] justify-between  2xl:justify-evenly bg-slate-300  sticky top-0 z-[99]' >
        <h2  className='md:text-2xl  md:block font-bold  text-slate-700 hidden'>Redux ToolKit</h2>
<div   className='flex md:gap-[4rem]  gap-[30px]' >
        <Link   className='md:text-xl  font-bold text-slate-700 hover:text-blue-600' to='/'>Home</Link>
        <Link  className='md:text-xl bold-400  font-bold  hover:text-blue-600 text-slate-700' to='/cart'>Cart</Link>
        </div>
        <span className=' md:text-xl  lg:2xl font-black  text-slate-700'> Cart Items : {cartvalue.length}  </span>

    </div>
  )
}

export default Navbar