import React from 'react'

const VedioCard = ({info}) => {
   // console.log(info)
    if (!info) return null; 
   
    const{snippet,statistics}=info;
    const{title,channelTitle,thumbnails}=snippet;
    

    return (
        <div className='p-2 m-2 w-72 shadow-lg selection:'>
            <img src={thumbnails?.high?.url} alt="vedio_img" className='rounded-lg'/>
            <ul>
                <li className='font-bold py-2 text-[16px] '>{title}</li>
                <li className='font-semi-bold text-[16px] '>{channelTitle}</li>
                <li className='font-light text-[14px] py'>{statistics.favoriteCount}</li>
                <li className='font-light text-[14px]'>{statistics.viewCount} views</li>
            </ul>
        </div>
   )
}

export default VedioCard;