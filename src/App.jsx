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
  // example of how is use state is written and used
    { input: "todo 1-v1", complete: true },
    { input: "todo 2-v2", complete: false },
  ]);


  return (
    <>
      <Header todos={todo_List} />
      <TabHeader todos={todo_List} />
      <Todolist todos={todo_List} />
      <Todoinput />
    </>
  );
}

export default App;
