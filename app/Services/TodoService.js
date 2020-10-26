import { ProxyState } from "../AppState.js";
import Todo from "../models/Todo.js";
import { api } from "../Services/AxiosService.js";

// TODO you will need to change 'YOURNAME' to your actual name or all requests will be rejected
let url = 'daniel/todos/'


class TodoService {
  constructor() {
    this.getTodos()
  }
  async getTodos() {
    console.log("Getting the Todo List");
    let res = await api.get(url);
    ProxyState.todos = res.data.data.map(rawTodos => new Todo(rawTodos))
  }


  addTodo(todo) {
    api.post(url, todo).then(res => {
      this.getTodos()
    }).catch(err => console.error(err))
  }
  completedTask() {

  }

  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find(todo => todo._id == todoId);
    // //		change its completed status to whatever it is not (ex: false => true or true => false)
    let res = await api.put(url + todoId, todo, this.completedTask)
    this.getTodos()

    console.log(ProxyState.todos);
    //TODO how do you trigger this change
  }

  async removeTodo(todoId) {
    let todo = await ProxyState.todos.find(todo => todo._id == todoId)
    let res = await api.delete(url + todoId, todo)
    this.getTodos()
  }
}

const todoService = new TodoService();
export default todoService;