import React, { useEffect, useRef } from 'react';
import shortData from '../utils/shortData';

const WatchShorts = () => {
  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch((e) => {
              if (e.name !== 'AbortError') {
              alert('Play error:', e.message);
              }
            });
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.75,
      }
    );

    const observedVideos = [...videoRefs.current];
    observedVideos.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      observedVideos.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    <div className="h-screen  overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
      {shortData.map((short, index) => (
        <div
          key={short.id}
          className="relative snap-start h-screen  flex items-center py-3  justify-center"
        >
          
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={short.videoUrl}
              controls
              loop
              playsInline
              className="   h-full w-auto  sm:w-96 object-cover  rounded-lg shadow-lg "
            />
        
        </div>
      ))}
    </div>
  );
};

export default WatchShorts;
