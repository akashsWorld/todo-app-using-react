import React from "react";
import { AddTodoProps } from "../utils/PropsTypes";

const AddTodo = ({title,description,onChangeDescription,onChangeTitle,onSubmitHandel}:AddTodoProps) => {
  return (
    <div className="flex justify-center my-5">
      <div className=" h-96 w-[48vw] p-16">
        <div className="flex flex-col w-full h-full p-4 justify-center">
          <label htmlFor="todo-name" className="font-ebGaraMond font-semibold text-2xl text-gray-700">Name of the todo</label>
          <input
            type="text"
            name=""
            id="todo-name"
            className="h-8 w-[20vw] mt-3 p-2 font-ebGaraMond"
            placeholder="Enter the name of the todo"
            onChange={onChangeTitle}
            value={title}
          />
          <label htmlFor="todo-description" className="mt-3 font-ebGaraMond font-semibold text-2xl text-gray-700">
            Todo Description
          </label>
          <textarea
            name=""
            id="todo-description"
            className="mt-3 w-[25vw] h-16 p-2 font-ebGaraMond"
            placeholder="Enter the description of the todo"
            onChange={onChangeDescription}
            value={description}
          />
          {/* <input
            type="submit"
            className=" rounded-md h-10 w-16 bg-black text-white hover:bg-white hover:text-black hover:border-black hover:border-[1px] mt-3 font-ebGaraMond"
          /> */}
          <input
            type="submit"
            className=" rounded-md h-12 w-16 bg-black text-white hover:button-on-hover mt-3 font-ebGaraMond"
            onClick={onSubmitHandel}
          />
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
