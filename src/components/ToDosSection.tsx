import { TodosSection } from "../utils/PropsTypes"
import ToDoCard from "./ToDoCard"

const ToDosSection = ({todos,onDelete}:TodosSection) => {

    if(todos.length===0){
        return (
            <div className="flex justify-center mt-5">
                <h1 className="font-headLandOne text-4xl text-gray-600 ">There are no todos for you, Add some new !</h1>
                
            </div>
        )
    }


    return (
    <div>
      {todos.map((cc,index)=>{
        return (
            <div key={index} className=" flex flex-col h-full w-full">
        <ToDoCard description={cc.description} title={cc.title} createdAt={cc.createdAt} onDelete={onDelete}/>
      </div> 
        )
      })}
    </div>
  )
}

export default ToDosSection
