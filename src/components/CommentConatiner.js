import { userIcon } from "../utils/constants"

const comments=[
    {
        name:"Vedant",
        text:"Lorem ipsum This is a mock text for you",
        replies:[]
    },{
        name:"Vedant",
        text:"Lorem ipsum This is a mock text for you",
        replies:[{
            name:"Vedant",
            text:"Lorem ipsum This is a mock text for you",
            replies:[{
                name:"Vedant",
                text:"Lorem ipsum This is a mock text for you",
                replies:[{
                    name:"Vedant",
                    text:"Lorem ipsum This is a mock text for you",
                    replies:[]
                }]
            }]
        }]
    },
    {
        name:"Vedant",
        text:"Lorem ipsum This is a mock text for you",
        replies:[{
            name:"Vedant",
            text:"Lorem ipsum This is a mock text for you",
            replies:[]
        }]
    }

]
const DisplayComment=({comment})=>{
    const {name,text}=comment
return(<div>
    <div className="flex">
    <img src={userIcon} alt="icon" className="h-10"/>
    <h1 className="pt-2">{name}</h1>

    </div>
    <div>
        <p>{text}</p>

    </div>

</div>)
}
const CommentList=({comment})=>{
    return(
        comment.map((info,index)=>
        <div>
        <DisplayComment comment={info} key={index}/>
        
        <div className="pl-5 border border-l-2 shadow-lg m-3">
            <CommentList comment={info.replies}/>

        </div>
        </div>
        ))

    
}
const CommentConatiner = () => {
  return (
    <div>
        <CommentList comment={comments}/>
    </div>
  )
}

export default CommentConatiner