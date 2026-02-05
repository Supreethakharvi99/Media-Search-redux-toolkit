import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice';

const SearchBar = () => {

   const [text,setText] = useState('');

   const dispatch = useDispatch()

   const submitHandler = (e) => {
    e.preventDefault()

    dispatch(setQuery(text))
    setText('');
    
    
   }
  return (
    <div>
     <form 
     onSubmit={(e)=>{
        submitHandler(e)
     }}
 className="flex items-center gap-5 p-8
           bg-gradient-to-r from-gray-700 via-cyan-800 to-gray-800">
        <input 
        value={text}
        onChange={(e)=>{
            setText(e.target.value);
            
        }}
        required
        className=' w-full  px-4 py-2 text-xl rounded
    bg-gray-900 text-white
    border border-gray-600
    focus:border-cyan-400 focus:ring-2 focus:ring-gray-500
    outline-none
    transition-all duration-300'
        type='text' 
        placeholder='Search anything..'/>

        <button
        className='bg-gradient-to-r from-gray-500 to-cyan-600
    text-white rounded font-medium
    px-6 py-2 text-xl
    transition-all duration-300
    hover:from-gray-600 hover:to-cyan-700
    active:scale-95
    cursor-pointer'
        >Search
        </button>
    </form>
    </div>
  )
}

export default SearchBar