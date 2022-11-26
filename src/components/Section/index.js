import React from 'react'
import { useSelector } from "react-redux"
import Card from '../Card'


function Section() {

    const products = useSelector(state => state.products.products)


  return (
    <div className='w-full mb-4 grid grid-flow-row gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
            products.map((item, index) => (
                <Card item={item} index={index} key={index} />
            ))
        }
    </div>
  )
}

export default Section