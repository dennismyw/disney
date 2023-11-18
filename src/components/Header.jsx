import React, { useState } from 'react'
import logo from '/vite.svg'
import HeaderItem from './HeaderItem'
import {HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv} from "react-icons/hi2"
import {HiPlus, HiDotsVertical, HiOutlineDotsVertical} from "react-icons/hi"
function Header() {
    const[toggle,setToggle] = useState(false);
    const menu=[
        {
            name:'HOME',
            icon: HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINAL',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        }
    ]
  return (
    <div className='flex items-center justify-between p-3'>
        <div className='flex gap-8 items-center'>
            <img src={logo} className=' w-[80px]  object-cover'/>
            <div className='hidden md:flex gap-8'>
                {menu.map((item)=>(
                <HeaderItem name={item.name} Icon={item.icon}/> 
                ))} 
            </div>
            <div className='flex md:hidden gap-5 '>
                {menu.map((item, index)=>index<3&&(
                <HeaderItem name={''} Icon={item.icon}/> 
                ))} 
                <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
                    <HeaderItem name={''} Icon={HiDotsVertical}/>
                    {toggle? <div className='absolute mt-3 bg-[#121212] border-[1px] 
                    border-grey-700 p-3 px-5 py-4'>
                    {menu.map((item, index)=>index>3&&(
                    <HeaderItem name={item.name} Icon={item.icon}/> 
                    ))} 
                    </div>:null}
                </div>
            </div>
            <img src='https://ps.w.org/avatar/tags/0.1.1/mystery-man-50.jpg' 
            className='w-[40px] rounded-full'/>
        </div>   
        <img src=""      ></img> 
    </div>
    ) 
}

export default Header