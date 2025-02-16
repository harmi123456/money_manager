
import { createAction, createSlice } from "@reduxjs/toolkit"

export const  decrement = createAction('Product/decrement')

export const Product = createSlice({
    name: "Product",
    initialState: { count_money: 0},
    reducers: {
        increment: (state, action) => {
            state.count_money += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(decrement, (state, action) => {
            state.count_money -= action.payload
        })
    }
})

export const {increment }= Product.actions
export default Product.reducer