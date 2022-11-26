import React from 'react'
import bill from "../../assets/billgates.jpg"
import { useSelector } from "react-redux"

function Header() {

    const currentMoney = useSelector(state => state.products.currentMoney)

  return (
    <>
    <div className='flex flex-col w-full h-full items-center py-5 px-5 bg-white'>
        <img 
        src={bill}
        alt="bill"
        className='rounded-full w-32 m-6'
        />
        <h1 className='text-3xl font-bold'>Spen Bill Gates' Money</h1>
    </div>

    <div className='flex justify-center items-center sticky top-0 h-20 w-full m-3 bg-gradient-to-b from-[#2ecc71] to-[#1abc9c]'>
        <p className='text-3xl font-bold text-white'>${currentMoney.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
    </div>
    </>
    

  )
}

export default Header