import React from 'react'

const VideoCard = ({info}) => {
  const {snippet}=info||{}
  const {channelTitle,title}=snippet||{}
  return (
    <div className='w-72 p-1  m-1 shadow-lg'>
      <img src={info?.snippet?.thumbnails?.high?.url} className='my-2' alt="Thumbnail"/>
      <ul>
        <li className='font-bold my-2 '> {title}</li>
        <li>{channelTitle}</li>

        <li>{info?.statistics?.viewCount}Views</li>
      </ul>
      </div>
  )
}

export default VideoCard
export const Sponsered=({video})=>{
  return(<div className="border border-gray-300 m-2 p-2">
    <VideoCard info={video}/>
    <h1>Sponsered</h1>
  </div>)}