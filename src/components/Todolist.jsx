import Todocard from "./Todocard";
import Todoinput from "./Todoinput";

export default function Todolist(props) {
  const { todos, selectedTab, setSelectedTab } = props;
  const tab = selectedTab;
  const filteredtodos =
    tab == "All"
      ? todos
      : tab == "Completed"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);

  return (
    <>
      {filteredtodos.map((todo, todoindex) => {
        return <Todocard key={todoindex} todo={todo} />;
      })}
    </>
  );
}
