import React from 'react'
import { useSelector } from "react-redux"

function Cart() {

    const products = useSelector(state => state.products.products)
    const cart = products.filter(item => item.count !== 0)
    const totalMoney = useSelector(state => state.products.totalMoney)
    const currentMoney = useSelector(state => state.products.currentMoney)

    const formatToCurrency = (number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(number)
    }

    if (cart.length === 0) {
        return
    }

    return (

        <div className='justify-center items-center bg-white w-full text-center my-4 p-4'>
            <h4 className='text-2xl font-bold p-4'>Your Receipt</h4>

            {
                cart.map(item => (
                    <div key={item.id} className="max-w-sm mx-auto">
                        <div className="grid grid-flow-row gap-4 grid-cols-3 text-lg items-center">
                            <span className='text-left'>{item.name}</span>
                            <span>x{item.count}</span>
                            <span className='text-[#24c486] font-bold text-right'>$
                                {
                                    new Intl.NumberFormat("en-GB", {
                                        notation: "compact",
                                        compactDisplay: "short"
                                    }).format(item.count * item.price)
                                }
                            </span>
                        </div>

                    </div>
                ))
            }
            <div className='flex justify-between max-w-sm mx-auto text-xl border-t-2 border-t-black font-medium'>
                <span>TOTAL:</span>
                <span className='text-[#24c486]'>{formatToCurrency(totalMoney - currentMoney)}</span>
            </div>
        </div>
    )
}

export default Cart