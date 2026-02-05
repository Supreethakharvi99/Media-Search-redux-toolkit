import { useDispatch, useSelector } from 'react-redux'
import {fetchPhotos,fetchVideos,fetchGifs} from '../api/mediaApi.js'
import {setResults,setError,setLoading} from '../redux/features/searchSlice.js'
import { useEffect } from 'react'
import ResultCard from './ResultCard.jsx'

const ResultGrid = () => {
 
    const dispatch = useDispatch()

  const { query, activeTab, results, loading, error } = useSelector(
  (state) => state.search
);
   
    
    useEffect(function(){
      if(!query) return
       const getData = async() => {
     try {
      dispatch(setLoading(true))
      let data = []
      if(activeTab === 'photos'){
        let response = await fetchPhotos(query)
        data = response.results.map((item)=>({
            id:item.id,
            type:'photo',
            title:item.alt_description,
            thumbnail:item.urls.small,
            src:item.urls.full,
            url:item.links.html
        }))
       }
       if(activeTab === 'videos'){
        let response = await fetchVideos(query)
        data = response.videos.map((item)=>({
           id:item.id,
           type:'video',
           title:item.user.name || 'video',
           thumbnail:item.image,
           src:item.video_files[0].link,
           url:item.url
        }))
       }
       if(activeTab === 'gif'){
        let response = await fetchGifs(query)
        
        data = response.data.data.map((item)=>({
          id:item.id,
          title:item.title,
          type:'gif',
          thumbnail:item.images.fixed_width_small.url,
          src:item.images.original.url,
          url:item.url
        }))
       }
         dispatch(setResults(data))
      
     } catch (err) {
      dispatch(setError(err.message))
      
     }finally{
      dispatch(setLoading(false))
     }
      
         }
      getData()
    },[query, activeTab, dispatch])

    if(error) return <h1>Error</h1>
    if(loading) return <h1>Loading...</h1>
      return (
    <div className='flex w-full justify-between flex-wrap gap-6 overflow-auto px-8'>
      {results.map((item)=>{
        return  <div key={item.id}>
        <ResultCard item={item}/>
        </div>
      })}
    </div>
  )
}

export default ResultGrid