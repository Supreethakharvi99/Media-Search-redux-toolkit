import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs = ['photos','videos','gif']

    const dispatch = useDispatch()

    const activeTab = useSelector((state)=>state.search.activeTab)

  return (
    <div className='flex gap-5 p-10'>
        {tabs.map(function(elem,idx){
            return (
            <button
            className={`${(activeTab==elem?'bg-blue-800':'bg-gray-600')} transition-colors duration-200 px-5 py-2 rounded uppercase active:scale-95 cursor-pointer`}
             key={idx}
             onClick={() =>{
                dispatch(setActiveTabs(elem))
             }}
             >{elem}
             </button>
        )       
      })}
  
    </div>
  )
}

export default Tabs