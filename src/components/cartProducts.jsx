import React from 'react'
import { Counter } from './counter'
import Image from 'next/image'

export const CartProducts = ({image, name, price}) => {
  return (
      <div className='flex justify-between gap-12 items-center font-semibold'>
          <div className='flex place-items-center gap-2'>
              <div className=' bg-primary-gray-100 w-20 h-20 rounded-lg'>
                  <Image src={image } />
              </div>
              <div>
                  <h4 className=''>{name }</h4>
                  <p className='text-primary-gray-90'>{"$" + " " + price}</p>
              </div>
          </div>
          <div><Counter classname="p-2 w-20"/></div>
    </div>
  )
}
