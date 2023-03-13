import { createSlice} from "@reduxjs/toolkit"
import { data } from "autoprefixer"
import axios from "axios";

const productdata=createSlice({
name:'product',
initialState:{
    isLoading:false,
    isError:false,
    data:[],
},
reducers:{


    setloading(state,action){
            state.isLoading=true;
    },
    setproduct(state,action){
        state.data=action.payload,
        state.isLoading=false


    }




}

})

export default productdata;
export   const {setproduct}=productdata.actions;


export function fetchproduct(){

    return  async function fetchProductthunk (disaptch,getstate){

        disaptch(setloading(isLoading))

        try{
                const res =await axios.get("https://fakestoreapi.com/products")
                const data=await res.data;

                disaptch(setproduct(data))
        }
catch(err){

}
    }

}