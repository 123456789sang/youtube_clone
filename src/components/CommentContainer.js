// import React from 'react'
// import CommentList from './CommentList';

// const commentData =[

// {
//     name:"sangram",
//     text:"lorem ipsum sit amet conseoter adip",
//     replies :[
//         {
//             name:"sangram",
//             text:"lorem ipsum sit amet conseoter adip",
//             replies :[
//             {
//                 name:"sangram",
//                 text:"lorem ipsum sit amet conseoter adip",
//                 replies :[
                
//                 {
//                     name:"sangram",
//                     text:"lorem ipsum sit amet conseoter adip",
//                     replies :[],
//                 },
//             ]
//             }
//             ],
//         }
//     ],
// },

// {
//     name:"sangram",
//     text:"lorem ipsum sit amet conseoter adip",
//     replies :[],
// },

// {
//     name:"sangram",
//     text:"lorem ipsum sit amet conseoter adip",
//     replies :[],
// },

// {
//     name:"sangram",
//     text:"lorem ipsum sit amet conseoter adip",
//     replies :[],
// },

// {
//     name:"sangram",
//     text:"lorem ipsum sit amet conseoter adip",
//     replies :[],
// },

// {
//     name:"sangram",
//     text:"lorem ipsum sit amet conseoter adip",
//     replies :[],
// },

// {
//     name:"sangram",
//     text:"lorem ipsum sit amet conseoter adip",
//     replies :[],
// },
// ]


// const CommentContainer = () => {
//   return (
//     <div  className='m-4 p-2 shadow-lg bg-slate-50'>
//        <h1 className='text-xl font-bold'>Comments :</h1>
//        <CommentList comments={commentData} />
//     </div>
//   )
// }

// export default CommentContainer;
import { useSearchParams } from "react-router-dom";
import useVideoData from "../hooks/getVideoComment";
import CommentList from "./CommentList";

const CommentContainer = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const { comments, setComments, loading } = useVideoData(videoId);

  if (loading) return <p className="mt-4">Loading comments...</p>;

  if (!comments || !Array.isArray(comments)) {
    return <p className="mt-4">No comments available.</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-3">
        {comments.length} Comments
      </h2>
      <CommentList comments={comments} setComments={setComments} />
    </div>
  );
};

export default CommentContainer;
