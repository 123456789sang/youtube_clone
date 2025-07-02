import React, { useState } from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => {
  const [localComments, setLocalComments] = useState(comments);

  const addReply = (indexPath, replyText) => {
    const newComments = JSON.parse(JSON.stringify(localComments)); // deep clone
    let current = newComments;
    for (let i = 0; i < indexPath.length - 1; i++) {
      current = current[indexPath[i]].replies;
    }
    const parent = current[indexPath[indexPath.length - 1]];
    parent.replies.push({
      name: 'You',
      text: replyText,
      replies: [],
    });
    setLocalComments(newComments);
  };

  const renderComments = (comments, path = []) =>
    comments.map((comment, index) => (
      <div key={path.concat(index).join('-')}>
        <Comment
          data={comment}
          onReply={(replyText) => addReply(path.concat(index), replyText)}
        />
        {comment.replies.length > 0 && (
          <div className="pl-6 border-l border-gray-300 ml-4">
            {renderComments(comment.replies, path.concat(index))}
          </div>
        )}
      </div>
    ));

  return <>{renderComments(localComments)}</>;
};

export default CommentList;
