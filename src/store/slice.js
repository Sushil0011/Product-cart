import { createSlice }from  "@reduxjs/toolkit";

const initialState=[];
 const productReducer=createSlice({

    name:"cart",
    initialState,
    reducers:{

        
        add(state,action){
            state.push(action.payload)
            
        },
        remove(state,action){

              return state.filter((item)=>item.id!==action.payload)
        },
        cartdata(state,action){
            // state.initialState+=1;
            return
            console.log("value added")

        }

        
    
    }
});

export const {add,remove, cartdata}=productReducer.actions;

export default productReducer;