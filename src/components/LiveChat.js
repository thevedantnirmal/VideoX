import React, { useEffect,useState } from 'react'
import ChatList from './ChatList'
import { createRandomString, generateRandomName, names } from '../utils/helper'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/ChatSlice'

const LiveChat = () => {
  const [sendMessage,setSendMessage]=useState("")
    const messages=useSelector((store)=>store.messages.message)
    const dispatch=useDispatch()

    useEffect(()=>{
        //data

        const i=setInterval(()=>{
            dispatch(addMessage(
                {name:generateRandomName(),
                 text:createRandomString(5) +" "+createRandomString(6)   
                }

            ))



        },1500)
        return ()=>clearInterval(i)

    },[])
  return (
    <>
    <div className='overflow-y-scroll h-full flex flex-col-reverse'>

       {messages?.map( (name)=>(
        <ChatList name={name.name} text={name.text} />
        ))}
     
      

    </div>
    <form className=' flex flex-col'
    onSubmit={(e)=>e.preventDefault()}
    >
      <input className='p-2 bg-gray-200 rounded-lg'
      onChange={(e)=>{
        setSendMessage(e.target.value)
        

      }}/>
      <button className=' p-2 bg-gray-500 rounded-lg text-white'
      onClick={()=>{
        dispatch(addMessage({
          name:"Vedant",
          text:sendMessage
        }))
      }}
      >Send</button>
      
      </form>   
    </>
  )
}

export default LiveChat