import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetchVideos from '../hooks/useFetchVideos';
import CategoryVedioCard from './CategoryVideoCard';
import { YOUTUBE_CHANNEL_API } from '../utils/constants'; // make sure this is defined
import { useParams } from 'react-router-dom';

const VideoCategory = () => {
  const { categoryId} = useParams(); // get categoryId from route params
  const { videos } = useFetchVideos(categoryId);
  const [channelThumbnails, setChannelThumbnails] = useState({});

  useEffect(() => {
    const fetchChannelLogos = async () => {
      if (!videos.length) return;

      // 1. Get unique channel IDs
      const channelIds = [...new Set(videos.map((v) => v.snippet.channelId))];

      // 2. Fetch all channel data
      try {
        const responses = await Promise.all(
          channelIds.map((id) =>
            fetch(`${YOUTUBE_CHANNEL_API}&id=${id}`).then((res) => res.json())
          )
        );

        // 3. Map channelId to thumbnail URL
        const logos = {};
        responses.forEach((res) => {
          const item = res.items?.[0];
          if (item) {
            logos[item.id] = item.snippet.thumbnails.default.url;
          }
        });

        setChannelThumbnails(logos);
      } catch (err) {
        alert('Error fetching channel logos', err);
      }
    };

    fetchChannelLogos();
  }, [videos]); 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {videos.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`} className="block">
          <CategoryVedioCard
            info={video}
            channelLogo={channelThumbnails[video.snippet.channelId]}
          />
        </Link>
      ))}
    </div>
  );
};

export default VideoCategory;
