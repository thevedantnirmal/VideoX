import { useEffect, useState } from "react"
import { GoogleAPIKey } from "../utils/constants"
import VideoCard, { Sponsered } from "./VideoCard"
import { Link } from "react-router-dom"

const VideoContainer = () => {
  const [video,setVideos]=useState([])
  const getVideo=async()=>{
    const data=await fetch(GoogleAPIKey)
    const json=await data.json()
    
    setVideos(json?.items)

  }
  useEffect(()=>{
    getVideo()
  },[])
   
  
  return (
    <div className="flex flex-wrap">
     {video[0] && <Sponsered info={video[0]}/>
     }
    {video.map((details)=>
    <Link to={"/watch?v="+details.id} key={details.id}><VideoCard info={details} /></Link>
    ) }
    </div>
  )
}

export default VideoContainer