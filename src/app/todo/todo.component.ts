import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Todo {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [FormsModule, CommonModule]
})
export class TodoComponent {
  todos: Todo[] = [];
  newTodo: Todo = { id: 0, title: '', description: '' };
  editingTodo: Todo | null = null;
  isEditing: boolean = false;

  get currentTodo() {
    return this.isEditing && this.editingTodo ? this.editingTodo : this.newTodo;
  }

  addTodo() {
    if (this.newTodo.title && this.newTodo.description) {
      this.newTodo.id = new Date().getTime();
      this.todos.push({ ...this.newTodo });
      this.newTodo = { id: 0, title: '', description: '' };
    }
  }

  editTodo(todo: Todo) {
    this.isEditing = true;
    this.editingTodo = { ...todo };
  }

  updateTodo() {
    if (this.editingTodo) {
      const index = this.todos.findIndex(t => t.id === this.editingTodo?.id);
      if (index > -1) {
        this.todos[index] = this.editingTodo;
        this.isEditing = false;
        this.editingTodo = null;
      }
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
