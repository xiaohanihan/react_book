import { view as Filter } from "./filter";
import { view as TodoList } from "./todos";

const TodoApp = () => {
  return  (<div>
    <TodoList />
    <Filter />
  </div>)
}

export default TodoApp;