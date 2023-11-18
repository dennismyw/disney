import React from 'react'
import disney from '/disney.png'
import marvel from '/marvel.png'
import pixar from '/pixar.png'
import starwar from '/starwar.png'
function ProductionHouse() {
    const ProductioinHouselist=[
        {
            id:1,
            image:disney,
        },
        {
            id:2,
            image:marvel,
        },
        {
            id:3,
            image:pixar,
        },
        {
            id:4,
            image: starwar,
        }
    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5  md:px-16 '>
        {ProductioinHouselist.map((item)=>(
            <div className='border-[2px] w-[200px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer'>
                <img src={item.image} className='w-30px flex' />
            </div>

       )) }   
    
    </div>
   
  )
}

export default ProductionHouse