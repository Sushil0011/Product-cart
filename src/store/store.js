import {configureStore} from "@reduxjs/toolkit"
import productdata from './productslice'

import productReducer from "./slice"
    const store=configureStore({
    reducer:{
            product:productReducer.reducer,
            // fetchData:productdata.reducer

    }
})

export default store;