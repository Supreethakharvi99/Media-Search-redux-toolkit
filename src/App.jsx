import React from 'react'
import { fetchPhotos, fetchVideos } from './api/mediaApi'

const App = () => {
 
  return (
    <div className='h-screen w-full bg-gray-950  text-white '>
     <button
     className='bg-amber-50 text-gray-700 px-5 py-2 m-4 rounded active:scale-95'
      onClick={async() => {
      const data =await fetchPhotos('dog')
      console.log(data);
      
     }}>Get Photos</button>

     <button
     className='bg-amber-50 text-gray-700 px-5 py-2 m-4 rounded active:scale-95'
     onClick={async() => {
      const data = await fetchVideos('cat')
      console.log(data.videos);
      
     }} 
     >Get Videos</button>
    </div>

  )
}

export default App