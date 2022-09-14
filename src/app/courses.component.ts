
import { Component } from '@angular/core';
import { CoursesService } from './course/courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>

        <button class="btn btn-primary" [class.active]="isActive">Save</button>
        <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Style Binding</button>
        <button class="btn btn-outline-warning" (click)="onSave()">Event Binding</button>
        <button (keyup.enter)="onKeyUp()">Press Enter</button>
        <input (keyup.enter)="onKeyUp2()" />
        <input #email (keyup.enter)="onKeyUp3(email.value)" />
        `
})

export class CoursesComponent {
  title = "List of courses";
  courses;
  isActive = true;

    onSave() {
        console.log("Button was clicked");
    }

    onKeyUp() {
        console.log("Enter was pressed");
    }

    onKeyUp2() {
        console.log("Enter was pressed");
    }

    onKeyUp3(email: string) {
        console.log(email);
    }


  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}