import { Component } from '@angular/core';

interface Todo {
    text: string;
 }
 
 // Это интерфейс Todo, который определяет структуру задачи. Задача
 // должна иметь свойство text типа string.
 
 @Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
 })
 // Это декоратор @Component, который определяет компонент Angular. 
 // selector определяет имя компонента, которое можно использовать в
 // других компонентах или шаблонах. templateUrl определяет путь к
 // файлу шаблона HTML для компонента, а styleUrls определяет путь к
 //  файлу CSS для компонента.
 
 export class TodoListComponent {
    newTodoText = '';
    todos: Todo[] = [];
 
    addTodo() {
        
        if (this.newTodoText.trim().length === 0) {
            return;
        }
 
        this.todos.push({ text: this.newTodoText}); 
        this.newTodoText = '';
    }

    showTodo(id: number) {
        console.log(id);
        
    }
 }
 // Это определение компонента. Класс TodoListComponent является компонентом Angular 
 // и экспортируется из модуля. Он имеет два свойства и один метод:
 // newTodoText - это свойство, которое хранит текущее значение текста новой задачи.
 // todos - это массив задач, который содержит все задачи.
 // addTodo() - это метод, который добавляет новую задачу в массив задач. Метод проверяет, 
 // что новый текст задачи не пустой и добавляет новую задачу в массив todos, затем очищает поле ввода.