import React from 'react'
import { useSearchParams } from 'react-router-dom'
import CommentConatiner from './CommentConatiner'
import LiveChat from './LiveChat'

const ShowVideo = () => {
  const [searchParams]=useSearchParams()
  return (
    <div>
    <div className='p-2 m-2 flex w-full' >
      <iframe width="1100" height="600" src={"https://www.youtube.com/embed/"+searchParams.get("v") }
      title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <div className='shadow-xl w-[30%] px-2 m-2 border border-gray-300 h-[37rem]'>
        <LiveChat/>
      </div>
    </div>
    <div>
      <CommentConatiner/>

    </div>
    </div>
  )
}

export default ShowVideo