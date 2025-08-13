
import React, { useEffect, useState } from 'react';
import { VIDEO_API } from "../utils/constants";

const useGetVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(VIDEO_API);
      const json = await data.json();

      setVideos(json.items);
    } catch (error) {
     alert("something went :please try again some time");
    }
  };

  return videos;
};

export default useGetVideos;


