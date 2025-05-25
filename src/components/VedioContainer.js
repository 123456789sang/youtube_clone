import React ,{useEffect,useState} from 'react'
import {YOUTUBE_VEDIO_API} from "../utils/constants"
import VedioCard from './VedioCard';

const VedioContainer = () => {
   const[Videos,setVideos]=useState();
   useEffect(()=>{

       getVideos();

   }, []);

   const getVideos =async ()=>{
     const data = await fetch(YOUTUBE_VEDIO_API);
     const json  =await data.json();
     console.log(json.items)
     setVideos(json.items);
   }
  return (
    <div className='flex flex-wrap '>
   {Videos && Videos.map((video) => (
      <VedioCard key={video.id} info={video} />
    ))}
    </div>
   )
}

export default VedioContainer;