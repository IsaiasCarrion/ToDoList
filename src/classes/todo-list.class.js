import { Todo } from ".";

export class TodoList {
    constructor() {
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLolcalStorage();
    }

    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLolcalStorage();
    }

    marcarCompletado(id) {
        for (const todo of this.todos) {
            if (todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLolcalStorage();
                break;
            }
        }
    }

    eliminarCompletados() {
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLolcalStorage();
    }

    guardarLolcalStorage() {
        localStorage.setItem("todo", JSON.stringify(this.todos));
    }

    cargarLocalStorage() {
        this.todos = localStorage.getItem("todo")
            ? JSON.parse(localStorage.getItem("todo"))
            : [];

        this.todos = this.todos.map(Todo.fromJson);
    }
}
