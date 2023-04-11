import { useTodos } from '../hooks/useTodos';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';



export const TodoApp = () => {
  
  const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToogleTodo } = useTodos();

  
  return (
    <>
        <h1>TodoApp: {todosCount}, <span>pendientes: { pendingTodosCount }</span></h1>
        <hr />
        <div className="row">
          <div className="col-7">
            <TodoList 
              todos={todos} 
              onDeleteTodo={ handleDeleteTodo } 
              onToogleTodo={ handleToogleTodo }
            />

          </div>
          <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr />
            <TodoAdd onNewTodo = {handleNewTodo} />
          </div>
        </div>
        
    </>
  )
}
