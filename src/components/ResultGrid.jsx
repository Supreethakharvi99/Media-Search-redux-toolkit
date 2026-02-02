import { useDispatch, useSelector } from 'react-redux'
import {fetchPhotos,fetchVideos,fetchGifs} from '../api/mediaApi.js'
import {setQuery,setResults,setError,setLoading} from '../redux/features/searchSlice.js'
import { useEffect } from 'react'

const ResultGrid = () => {
 
    const dispatch = useDispatch()

    const {query, activeTab,results,loading,error} = useSelector((store) => store.search)
     
   
    
    useEffect(function(){
       const getData = async() => {
      let data
      if(activeTab == 'photos'){
        let response = await fetchPhotos(query)
        data = response.results
       }
       if(activeTab == 'videos'){
        let response = await fetchVideos(query)
        data = response.videos
       }
       if(activeTab == 'gif'){
        let response = await fetchGifs(query)
        data = response.data.data
       }
       console.log(data);
       
    }
      getData()

    },[query, activeTab])
      return (
    <div>
    </div>
  )
}

export default ResultGrid