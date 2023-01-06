import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() onAddTask = new EventEmitter<Task>();

  taskForm = new FormGroup({
    text: new FormControl<string>('', [Validators.required]),
    day: new FormControl<string>('', [Validators.required]),
    reminder: new FormControl<boolean>(false),
  });

  submit() {
    const value = this.taskForm.value;
    if (!value.text) {
      alert('add text');
      return;
    }
    if (this.taskForm.invalid) {
      return;
    }
    this.onAddTask.emit(value as Task);
    this.taskForm.reset();
  }
}
