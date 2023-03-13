import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import {remove} from '../store/slice'
const Cart = () => {

const dispatch=useDispatch();
  const cartdata= useSelector((state)=>state.product);

const removehandler=(id)=>{
  dispatch(remove(id))
}


  return (
  
  <div  className='min-h-[100vh] flex flex-col gap-[2rem] box-border w-screen items-center bg-slate-400  py-[10px] px-[2rem]'>


    {cartdata.length<=0?  <h1  className=' font-bold  text-[2rem]'> No  Items</h1>:  ""  }

    
    
    {

cartdata.map((elem,index)=>{
  console.log( "elem",elem)
  return(
     
    <div   className='flex  max-w-[1200px] rounded-[4px] w-[90vw] bg-white items-center md:justify-between   flex-col gap-[10px] md:px-[1rem] lg:px-[4rem]  md:flex-row   px-[10px]  py-[10px]'>
          <img  className="h-[100px] object-contain w-[100px]" src={elem.image} alt=""/>
          <h5> {elem.title}</h5>
          <h5>{elem.price}</h5>
          <button   onClick={()=>removehandler(elem.id)} className=' w-[100px] py-[10px] text-white rounded-[3px]  bg-violet-500  hover:scale-105   transition duration-700 ease-in-out'>Remove</button>
          </div>
         
  )

}
)

} 



</div> 

  )
}

export default Cart;