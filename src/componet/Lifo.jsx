import React from 'react'
import PooularProductCart from './PooularProductCart'
import {products} from '../content'
const Lifo = () => {
  return (
    <div className='max-container '>
        <div className='flex flex-col justify-center gap-5 '>
            <h1 className='text-red-400 mb-10'>Populart Poorduct</h1>
            <p className='text-gray-500 mb-10 max-w-lg '>Lorem ipsum dolor sit amet, consectetur adipisicing e
                lit. Recusandae error minima eaque doloribus. Veritatis, id saepe temporibus pariatu
                r aperiam odio corporis repellat? Autem dolorem pariatur officiis, consequuntur ut aut veritatis!

            </p>

        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 '>

        {products.map((product) => (
          < PooularProductCart  key={product.name} {...product} />
        ))}
        </div>
        
     
    </div>
  )
}

export default Lifo
