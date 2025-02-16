
import { configureStore } from "@reduxjs/toolkit";
import Product  from "../Feature/Slice";

 export const store = configureStore({
    reducer: {
        productKey: Product
    }
})

export default store;