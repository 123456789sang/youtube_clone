import { useEffect, useState } from 'react';
import axios from 'axios';
import {GET_VIDEO_API_URL} from '../utils/constants';

const useFetchVideos = (categoryId = '') => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const response = await axios.get(GET_VIDEO_API_URL(categoryId));
        setVideos(response.data.items);
      } catch (err) {
        alert('Error fetching videos:', err);
        setError('Failed to fetch videos');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [categoryId]);

  return { videos, loading, error };
};

export default useFetchVideos;
