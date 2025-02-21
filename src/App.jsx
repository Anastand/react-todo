import { Header } from "./components/Header";
import { TabHeader } from "./components/TabHeader";
import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";
import { useState, useEffect } from "react";
function App() {
  const [todo_List, settodo_List] = useState([
    /*
    - this is an example of useState and how it is implemented
    - the todo_list is the todo and settodo_list is a setter function that can be called to add todo 'need to learn more '
    - 
    */
    { input: "go complete the todo project", complete: false },
    { input: "start using react", complete: true },
  ]);

  const [selectedTab, setSelectedTab] = useState("Open");

  function handleaddtodo(newtodo) {
    // this is used to add todo , we cant just add value to use state as it is immutable so we create a newone with all the value and append new value to it
    const newTodoList = [...todo_List, { input: newtodo, complete: false }];
    console.log("todo here");
    // settodo_list is used to update the already created use state to the newtodo array with new todo appended to it
    settodo_List(newTodoList);
    savetodoappdata(newTodoList);
  }
  function handleEditTodo(index) {
    let newtodoedited = [...todo_List];
    let completedtodomodify = todo_List[index];
    // completedtodomodify.complete = true;
    completedtodomodify["complete"] = true;
    newtodoedited[index] = completedtodomodify;
    settodo_List(newtodoedited);
    savetodoappdata(newtodoedited);
  }

  function handleDeleteTodo(index) {
    let newtodoafterdeletion = todo_List.filter((val, valindex) => {
      return valindex != index;
    });
    settodo_List(newtodoafterdeletion);
    savetodoappdata(newtodoafterdeletion);
  }
  function savetodoappdata(current) {
    localStorage.setItem("todo-app", JSON.stringify({ todo_List: current }));
  }
  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    }
    let db = JSON.parse(localStorage.getItem("todo-app"));
    settodo_List(db.todo_List);
  }, []);
  return (
    <>
      <Header todos={todo_List} />

      <TabHeader
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todo_List}
      />
      <Todolist
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        selectedTab={selectedTab}
        todos={todo_List}
      />

      <Todoinput handleaddtodo={handleaddtodo} />
    </>
  );
}

export default App;
