import React, { useState } from 'react'
import { onClickButton } from "../../redux/productsSlice"
import { useSelector, useDispatch } from "react-redux"
import Button from '../Button'


function Card({ item }) {
    
    const [ piece, setPiece ] = useState(0)
    const dispatch = useDispatch()
    const currentMoney = useSelector(state => state.products.currentMoney)

    const handleSubmit = (value) => {
        const convertValue = Number(value)
        setPiece(convertValue)
        dispatch(onClickButton({item, convertValue}))
    }

    return (
        <div className='p-4 bg-white'>
            <div className="flex flex-col justify-center items-center pt-4 pb-[20px] h-[264px] bg-white">
                <img src={item.link} alt="item.name" className='h-[120px]' />
                <p className='text-xl font-bold	'>
                    {item.name}
                </p>
                <p className="text-xl text-[#24c486]">
                    ${item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </p>
                <div className='flex w-full justify-between gap-2 mt-[25px]'>
                    <Button 
                    name="Sell" 
                    style={ piece < 1 ? "disable" : "secondary"}
                    onClick={() => handleSubmit(piece-1)}
                    />
                    <input 
                    pattern="[0-9]"
                    type="text"
                    className='w-24 py-2 px-3  border-2 rounded-md text-center font-bold  focus:outline-none cursor-default'
                    value={piece}
                    onChange={(e) => handleSubmit(e.target.value)}
                    readOnly
                    />
                    <Button 
                    name="Buy" 
                    style={item.price > currentMoney ? "disable" : "primary"} 
                    onClick={() => handleSubmit(piece+1)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Card