import { createSlice } from "@reduxjs/toolkit";
import items from "../assets/items"

export const productsSlice = createSlice({
    name: "products",
    initialState:{
        products: items,
        cart: [],
        totalMoney: 100000000000,
        currentMoney: 100000000000
        

    },
    reducers: {
        onClickButton: (state, action) => {
            const {item, convertValue} = action.payload
            const findItem = state.products.find((product) => product.id === item.id)
            findItem.count = convertValue

            let money = 0
            state.products.map( item => (
                money += item.count * item.price
            ))
            state.currentMoney = state.totalMoney - money
        }
    }
})

export const { onClickButton } = productsSlice.actions
export default productsSlice.reducer