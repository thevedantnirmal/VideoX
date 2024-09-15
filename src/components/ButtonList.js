import Button from "./Button"

const ButtonList = () => {
  const list=["ALl","WebDev","React","Node","Trailor","HipHop","Indian","Classical","Devotional","Firbase","Js","Gaming","Minecraft","Fortnite"]

  return (
    <div><ul className="flex">
     { list.map((tag,index)=>(
      <li key={index}><Button name={tag} /></li>
     ))}
      </ul></div>
  )
}

export default ButtonList