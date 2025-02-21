import Todocard from "./Todocard";
import Todoinput from "./Todoinput";

export default function Todolist(props) {
  const { todos, selectedTab } = props;
  const filteredtodos =
    selectedTab == "All"
      ? todos
      : selectedTab == "Completed"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);

  return (
    <>
      {filteredtodos.map((todo, todoindex) => {
        return (
          <Todocard
            key={todoindex}
            todoindex={todos.findIndex(val => val.input ==todos.input)}
            {...props}
            todo={todo}
          />
        );
      })}
    </>
  );
}
