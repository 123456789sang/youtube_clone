
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
            video.play();
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.75, // 80% of video should be visible to start playing
      }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    <div className="h-[calc(100vh-5.5rem)] w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
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
