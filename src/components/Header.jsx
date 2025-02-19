export function Header(props) {
  const { todos } = props;
  const todo_length = todos.length;
  const istaskplural = todo_length != 1;
  const istasksortask = (istaskplural) ? 'Tasks' : 'Task';
  return (
    <header>
      <h1>You Have {todo_length} {istasksortask} Assigned</h1>
    </header>
  );
}
