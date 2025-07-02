import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from "../utils/constants"
import VedioCard from './VedioCard'
import { Link } from 'react-router-dom'
import { YOUTUBE_CHANNEL_API } from '../utils/constants'

const VedioContainer = () => {
  const [videos, setVideos] = useState([])
 const [channelThumbnails,setChannelThumbnails]=useState({})
  useEffect(() => {
   getVideos()
 }, [])


const getVideos = async () => {
  const res = await fetch(YOUTUBE_VIDEO_API);
  const data = await res.json();
  console.log(data)
  setVideos(data.items);

  const channelIds = [...new Set(data.items.map(v => v.snippet.channelId))].join(',');
  const channelRes = await fetch(YOUTUBE_CHANNEL_API(channelIds));
  const channelData = await channelRes.json();

  const logos = Object.fromEntries(
    channelData.items.map(c => [c.id, c.snippet.thumbnails.default.url])
  );
  setChannelThumbnails(logos);
};

  return (

  <div className="w-full px-2 sm:px-2 md:px-4 lg:px-6 py-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    {videos?.map((video) => (
      <Link key={video.id} to={"watch?v=" + video.id} className="block">
        <VedioCard
          info={video}
          channelLogo={channelThumbnails[video.snippet.channelId]}
        />
      </Link>
    ))}
  </div>
</div>


  )
}

export default VedioContainer
