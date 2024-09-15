import { Outlet } from "react-router-dom"
import MainContainer from "./MainContainer"
import Sidebar from "./Sidebar"

const Body = () => {
  return (
    <div className="flex">
      <div className="p-14">
    <Sidebar/>
    </div>
    <div className="w-full">
      <Outlet/>
    
    </div>
    </div>
  )
}

export default Body