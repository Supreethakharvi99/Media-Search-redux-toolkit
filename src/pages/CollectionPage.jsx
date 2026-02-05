import { useDispatch, useSelector } from "react-redux"
import CollectionCard from "../components/CollectionCard"
import {clearCollection} from '../redux/features/collectionSlice.js'

const CollectionPage = () => {
  const collection = useSelector(state => state.collection.items)
  const dispatch = useDispatch()

  const clearAll = ()=>{
    dispatch(clearCollection())
  }
  
  return (
    <div className='overflow-auto px-8 py-6'>
      {collection.length>0? <div className="flex justify-between mb-6">
       
        <h2 className="text-2xl font-medium ">Your Collection</h2>
        <button 
        onClick={()=>{
          clearAll()

        }}
         className="bg-gradient-to-r from-red-700  to-red-800 px-4 py-2  text-xl font-medium rounded cursor-pointer active:scale-95 tarnsition hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700">Clear Collection</button>

      </div>: <h2 className="text-2xl font-medium ">Collection is Empty</h2>}
     
      <div  className='flex w-full justify-start flex-wrap gap-6 '>
      {collection.map((item,idx)=>{
        return <div key={idx}>
          <CollectionCard item={item}/>
        </div>
      })}

    </div>
    </div>
  )
}

export default CollectionPage