import { Header } from "./components/Header";
import { TabHeader } from "./components/TabHeader";
import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";
import { useState } from "react";
function App() {
  // const todo_List = [
  //   { input: "todo 1-v1", complete: true },
  //   { input: "todo 2-v2", complete: false },
  //   { input: "todo 3-v3", complete: true },
  //   { input: "todo 4-v4", complete: false },
  //   { input: "todo 5-v5", complete: true },
  // ];

  const [todo_List, settodo_List] = useState([
    /*
    - this is an example of useState and how it is implemented
    - the todo_list is the todo and settodo_list is a setter function that can be called to add todo 'need to learn more '
    - 
    */
    { input: "go complete the todo project", complete: false },
    { input: "start using react", complete: true },
  ]);

  function handleaddtodo(newtodo) {
    // this is used to add todo , we cant just add value to use state as it is immutable so we create a newone with all the value and append new value to it
    const newTodoList = [...todo_List, { input: newtodo, complete: false }];
    console.log("todo here");
    // settodo_list is used to update the already created use state to the newtodo array with new todo appended to it
    settodo_List(newTodoList);
  }
  function handleEditTodo() {}
  function handleDeleteTodo() {}
  return (
    <>
      <Header todos={todo_List} />
      <TabHeader todos={todo_List} />
      <Todolist todos={todo_List} />
      <Todoinput handleaddtodo={handleaddtodo} />
    </>
  );
}

export default App;
