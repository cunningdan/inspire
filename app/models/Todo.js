export default class Todo {
  constructor(data) {
    this._id = data._id
    this.description = data.description
    this.completed = data.completed
  }
  get template() {
    return /*html*/ `
    <div class="text-black">${this.description}
    <button class="btn btn-primary" onclick="app.todoController.toggleTodoStatus('${this._id}')"></button>
    <button class="btn btn-success" onclick="app.todoController.removeTodo('${this._id}')">Remove</button>
    </div>
    `
  }
}