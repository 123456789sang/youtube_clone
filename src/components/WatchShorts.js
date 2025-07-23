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
              console.warn('Play error:', e.message);
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

  // Observe current videos
  videoRefs.current.forEach((video) => {
    if (video) observer.observe(video);
  });

  // ✅ Fix the warning by copying ref values into a local variable
  const observedVideos = [...videoRefs.current];

  return () => {
    observedVideos.forEach((video) => {
      if (video) observer.unobserve(video);
    });
  };
}, []);

  return (
    <div className="min-h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
      {shortData.map((short, index) => (
        <div
          key={short.id}
          className="snap-start h-full flex items-center justify-center"
        >
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={short.videoUrl}
            controls
            loop
            playsInline
            className="h-full w-auto max-w-[100vh] max-h-screen object-contain md:object-cover rounded-lg shadow-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default WatchShorts;   