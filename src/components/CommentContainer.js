import React from 'react'
import CommentList from './CommentList';

const commentData =[

{
    name:"sangram",
    text:"lorem ipsum sit amet conseoter adip",
    replies :[
        {
            name:"sangram",
            text:"lorem ipsum sit amet conseoter adip",
            replies :[
            {
                name:"sangram",
                text:"lorem ipsum sit amet conseoter adip",
                replies :[
                
                {
                    name:"sangram",
                    text:"lorem ipsum sit amet conseoter adip",
                    replies :[],
                },
            ]
            }
            ],
        }
    ],
},

{
    name:"sangram",
    text:"lorem ipsum sit amet conseoter adip",
    replies :[],
},

{
    name:"sangram",
    text:"lorem ipsum sit amet conseoter adip",
    replies :[],
},

{
    name:"sangram",
    text:"lorem ipsum sit amet conseoter adip",
    replies :[],
},

{
    name:"sangram",
    text:"lorem ipsum sit amet conseoter adip",
    replies :[],
},

{
    name:"sangram",
    text:"lorem ipsum sit amet conseoter adip",
    replies :[],
},

{
    name:"sangram",
    text:"lorem ipsum sit amet conseoter adip",
    replies :[],
},
]


const CommentContainer = () => {
  return (
    <div  className='m-4 p-2 shadow-lg bg-slate-50'>
       <h1 className='text-xl font-bold'>Comments :</h1>
       <CommentList comments={commentData} />
    </div>
  )
}

export default CommentContainer;

// import React, { useEffect, useState } from 'react';
// import CommentList from './CommentList';

// const CommentContainer = ({ videoId }) => {
//   const [comments, setComments] = useState([]);

//   const API_KEY = 'AIzaSyB4FFp_J0hEe7Htxhvh6jdpSFThckmle70'; // 🔁 Replace with your real API key

//   useEffect(() => {
//     const fetchComments = async () => {
//       try {
//         const res = await fetch(
//           `https://www.googleapis.com/youtube/v3/commentThreads?key=${API_KEY}&part=snippet,replies&videoId=${videoId}&maxResults=25`
//         ); 
//         const data = await res.json();
//          console.log(data.items);
//         const parsedComments = data.items.map(item => {
//           const topComment = item.snippet.topLevelComment.snippet;

//           const replies = item.replies?.comments?.map(reply => ({
//             name: reply.snippet.authorDisplayName,
//             text: reply.snippet.textDisplay,
//             replies: [],
//           })) || [];

//           return {
//             name: topComment.authorDisplayName,
//             text: topComment.textDisplay,
//             replies,
//           };
//         });

//         setComments(parsedComments);
//       } catch (error) {
//         console.error('Error fetching comments:', error);
//       }
//     };

//     if (videoId) fetchComments();
//   }, [videoId]);

//   return (
//     <div className="m-5 p-2">
//       <h1 className="text-xl font-bold">Comments:</h1>
//       {comments.length > 0 ? (
//         <CommentList comments={comments} />
//       ) : (
//         <p className="text-gray-500">No comments available.</p>
//       )}
//     </div>
//   );
// };

// export default CommentContainer;
