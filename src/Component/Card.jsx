import React from 'react'
import { useDispatch } from 'react-redux'
import {cartdata} from '../store/slice'
import {add ,remove} from "../store/slice"
const Card = ({elem}) => {
    const {title,price,image}=elem
    const dispatch=useDispatch();
    // console.log( "cart",elem)


    const cartvalue=(elem)=>{
        dispatch(add(elem))
    }


  return (
    <div    className=' md:h-[450px]  md:max-w-[400px]   w-[300px] shadow-md bg-white  flex flex-col   items-center gap-[20px] px-[20px] py-[20px]'>
<img className='h-[200px] w-[200px]  hover:scale-110 transition duration-700 ease-in-out '  src={image} alt=""/>
<h4 className='text-center'>{title}</h4>
<h5>$ {price}</h5>

<button onClick={()=>cartvalue(elem)} className='rounded-[4px] hover:scale-110 transition duration-700 ease-in-out h-[30px] w-[130px] shadow-md bg-violet-800 text-white py-[20px] flex items-center
justify-center'>Add To Cart</button>

    </div>
  )
}

export default Card