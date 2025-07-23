
import { formatDuration, formatTimeAgo, formatViews } from "../utils/helper";

const VedioCard = ({ info, channelLogo }) => {
  const { snippet, statistics, contentDetails } = info;
  const { thumbnails, title, channelTitle, publishedAt } = snippet;
  const { duration } = contentDetails;

  const viewCount = statistics?.viewCount ? formatViews(statistics.viewCount) : "N/A";
  const timeAgo = formatTimeAgo(publishedAt);
  const videoDuration = formatDuration(duration);

  return (
    <div className="w-full  rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-white">
      
      {/* Thumbnail with duration */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl">
        <img
          src={thumbnails?.medium?.url}
          alt={title}
          className="w-full h-full object-cover"
        />
        {videoDuration && (
          <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-[12px] px-1.5 py-0.5 rounded font-semibold">
            {videoDuration}
          </span>
        )}
      </div>

      {/* Video Info */}
      <div className="flex  p-3 gap-3">
        <img
          src={channelLogo || "/fallback.png"}
          alt="channel"
          className="w-8 h-8 sm:w-10 sm:h-10  rounded-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/fallback.png";
          }}
        />
        <div className="flex flex-col justify-start gap-1">
          <h3 className="text-base font-semibold text-gray-900 line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600">{channelTitle}</p>
          <p className="text-sm text-gray-600">{viewCount} • {timeAgo}</p>
        </div>
      </div>
    </div>
  );
};

export default VedioCard;
