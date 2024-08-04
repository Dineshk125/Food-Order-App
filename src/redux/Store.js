import { configureStore } from "@reduxjs/toolkit"
import CartSlice from "./slices/CartSlice";
import Search from "./slices/Search";

const Store = configureStore({
        reducer:{
            cart: CartSlice,
            search:Search,
        },
})

export default Store;