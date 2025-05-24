import React from 'react'

const VedioCard = ({info}) => {
    if (!info) return null; 
    console.log(info);
    const{snippet,statistics}=info;
    const{title,channelTitle,thumbnails}=snippet;
    

    return (
        <div>
            <img src={thumbnails?.high?.url} alt="vedio_img"/>
            <ul>
                <li>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount}</li>
                <li>{statistics.favoriteCount}</li>
            </ul>
        </div>
   )
}

export default VedioCard;