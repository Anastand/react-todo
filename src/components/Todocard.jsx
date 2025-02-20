export default function Todocard(props) {
  const { todo, handleDeleteTodo, todoindex, handleEditTodo } = props;
  console.log(todo);
  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <button
        onClick={() => {
          handleEditTodo(todoindex);
        }}
        disabled={todo.complete}
      >
        <h6>DONE</h6>
      </button>
      <button
        onClick={() => {
          handleDeleteTodo(todoindex);
        }}
      >
        <h6>DELETE</h6>
      </button>
    </div>
  );
}
