import { Component, OnInit } from '@angular/core';
import { Todo } from '../interface';
import { TodoService } from '../providers/todo.service';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    todoList: Todo[];

    constructor(private todoServe: TodoService) {}

    ngOnInit() {
        this.todoList = this.todoServe.getTodos();
    }

    delete(ids: number[]) {
        this.todoList = this.todoServe.delete(ids);
    }

    add(data: Partial<Todo>) {
        this.todoList = this.todoServe.addTodo(data);
    }
}
