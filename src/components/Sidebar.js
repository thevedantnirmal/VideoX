import { useSelector } from "react-redux"

const Sidebar = () => {
  const showSideBar=useSelector((store)=>store.sidebar.isSideBarShow)
if(!showSideBar) return null
  return (
    <div>
      <ul>
        <li className="text-xl p-1 font-semibold">Home</li>
        <li className="text-xl p-1 font-semibold">Shorts </li>
        <li className="text-xl p-1 font-semibold">Subscription</li>
        
      </ul>
      <ul>
        <li className="text-xl py-2 font-semibold">Explore</li>
        <li>Trending</li>
        <li className="p-1">Shopping</li>
        <li className="p-1">Gaming</li>
        <li className="p-1">Music</li>
        <li className="p-1">Live</li>
      </ul>

    </div>
  )
}

export default Sidebar