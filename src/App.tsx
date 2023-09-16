import { useCallback, useState } from "react";
import { AddTodo, Navbar } from "./components";
import { ToDoObject } from "./utils/PropsTypes";
import ToDosSection from "./components/ToDosSection";

const App = () => {
  const [todos, setTodos] = useState<ToDoObject[]>([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitHandler = useCallback(() => {
    if (title.length === 0) {
      return;
    }
    setTodos((curr) => [
      ...curr,
      {
        title: title,
        description: description,
        createdAt: new Date(),
      },
    ]);

    setTitle("");
    setDescription("");
  }, [title, description]);

  const onDeleteHandel = useCallback((createdAt:Date) => {

    setTodos(cc=>{
      const array:ToDoObject[] = [];

      cc.map(obj=>{
        if(obj.createdAt!==createdAt){
          array.push(obj);
        }
        return obj;
      })
      return array;
    })
  }, []);

  const onchangeTitleHandler = useCallback(
    (eve: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(eve.target.value);
    },
    []
  );

  const onchangeDescriptionHandler = useCallback(
    (eve: React.ChangeEvent<HTMLTextAreaElement>) => {
      setDescription(eve.target.value);
    },
    []
  );

  return (
    <div className="overflow-auto w-full h-screen bg-slate-300">
      <Navbar />
      <AddTodo
        title={title}
        description={description}
        onChangeDescription={onchangeDescriptionHandler}
        onChangeTitle={onchangeTitleHandler}
        onSubmitHandel={onSubmitHandler}
        
      />

      <div className="pl-4 py-4">
        <h2 className="font-headLandOne text-3xl text-gray-700">
          Number of todos left- {todos.length}
        </h2>
      </div>

      <div className="justify-center flex">
        <hr className="w-[95vw] border-[1px] border-black" />
      </div>

      <ToDosSection todos={todos} onDelete={onDeleteHandel} />
    </div>
  );
};

export default App;
