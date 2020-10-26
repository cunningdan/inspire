import { ProxyState } from "../AppState.js";
import todoService from "../Services/TodoService.js";

function _drawTodos() {
  let todo = ProxyState.todos
  let template = ""
  todo.forEach(i => template += i.template)
  document.getElementById("todo").innerHTML = template
}

export default class TodoController {
  constructor() {
    ProxyState.on("todos", _drawTodos)
    _drawTodos()
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo(e, todoId) {
    e.preventDefault();
    var formData = e.target;
    var todo = {
      description: formData.description.value,
      id: todoId
    };

    todoService.addTodo(todo);
  }


  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(e, todoId) {
    e.preventDefault()
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}