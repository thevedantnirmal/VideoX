import { useDispatch, useSelector} from "react-redux"
import { hamburgerIcon, Suggestion_APi, userIcon, youtubeIcon } from "../utils/constants"
import { toggleSidebar } from "../utils/appSlice"
import { useEffect, useState } from "react"
import { addCache } from "../utils/saveSearchResultSlice"

const Head = () => {
  const [searchQuery,setSearchQuery]=useState("")
  const [showSuggestions,setShowSuggestions]=useState([])
  const [showbar,setShowbar]=useState(false)
  const dispatch=useDispatch()
  const cache=useSelector((store)=>store.cache)

  const fetchSuggestion=async()=>{
  const data=await fetch(Suggestion_APi+searchQuery)
  const json=await data.json()
  console.log(searchQuery)
  console.log(json[1])
  setShowSuggestions(json[1])
  dispatch(addCache({
    [searchQuery]:json[1]
  }))
}
  const handleClick=()=>{
    dispatch(toggleSidebar())
  }
  useEffect(()=>{
    
      const timer=setTimeout(()=>{
        if(cache[searchQuery]){
          setShowSuggestions(cache[searchQuery])
        }
        else{
        fetchSuggestion()}
        },200)
    
    return ()=>clearTimeout(timer)
    },[searchQuery])
  return (
    <div className="grid grid-cols-12 shadow-lg">
      <div className="col-span-1 flex">
      <img 
      
      onClick={handleClick}
      src={hamburgerIcon} alt="more" className="h-10 mt-5 cursor-pointer"/>
     <a href={"/"}> <img src={youtubeIcon} alt="ytube"  className="h-20"/></a>
      </div>
      <div className="col-span-10 py-5 text-center ">
       <div> <input className="w-1/2 rounded-l-full p-2 border border-gray-400"
        value={searchQuery}
        onChange={(e)=>{ setSearchQuery(e.target.value)}}
        onFocus={()=>setShowbar(true)}
        onBlur={()=>setShowbar(false)}
        
        />

        <button className="rounded-r-full border border-gray-400 bg-gray-300 p-2">Search</button>
        </div>
        {showbar&& <div className="fixed bg-white mx-[23rem]   w-[49rem] "
        
        >
          <ul >
            {showSuggestions&& showSuggestions.map((suggestions,index)=>
            <li key={index} className="shadow-lg p-1 m-1 border border-gray-300 hover:bg-gray-100"
            
            > 🔍{ suggestions}</li>
            )}
          </ul>
        </div>}
      </div>
      <div className="col-span-1">
        <img src={userIcon} alt="user" className="h-12 mt-5"/>

      </div>
    </div>
  )
}

export default Head