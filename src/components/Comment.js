import React, { useState } from 'react';

const Comment = ({ data, onReply }) => {
  const { name, text } = data;
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleReply = () => {
    if (replyText.trim()) {
      onReply(replyText);
      setReplyText('');
      setShowReplyBox(false);
    }
  };

  return (
    <div className="flex flex-col mb-4">
      <div className="flex items-start gap-3">
        <img
          className="w-10 h-10 rounded-full"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
        />
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-sm">{text}</p>
          <div className="flex gap-4 text-sm text-gray-600 mt-1">
            <button>👍</button>
            <button>👎</button>
            <button onClick={() => setShowReplyBox(!showReplyBox)} className="hover:underline">
              Reply
            </button>
          </div>

          {showReplyBox && (
            <div className="mt-2">
              <textarea
                className="w-full border p-2 rounded text-sm"
                rows={2}
                placeholder="Write a reply..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              />
              <div className="flex gap-2 mt-1">
                <button
                  className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
                  onClick={handleReply}
                >
                  Reply
                </button>
                <button
                  className="text-sm text-gray-600"
                  onClick={() => setShowReplyBox(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
