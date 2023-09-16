export interface ToDoCardProps{
    title:string;
    description:string;
    createdAt:Date;
    onDelete:(createdAt:Date)=>void;
}

export interface AddTodoProps{
    title:string;
    description:string;
    onChangeTitle:(eve:React.ChangeEvent<HTMLInputElement>)=>void;
    onChangeDescription:(eve:React.ChangeEvent<HTMLTextAreaElement>)=>void;
    onSubmitHandel:()=>void;
}
export interface TodosSection{
    todos:ToDoObject[]
    onDelete:(createdAt:Date)=>void;
}
export interface ToDoObject{
    title:string;
    description:string;
    createdAt:Date;
}