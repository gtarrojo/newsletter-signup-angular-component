import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: "app-form",
  imports: [ReactiveFormsModule],
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.css",
})
export class FormComponent {
  email = new FormControl("", [
    Validators.required,
    Validators.email,
    Validators.minLength(3),
  ]);
  success: boolean = true;
  formValue: string = "";

  @Output() showSuccess = new EventEmitter<boolean>();
  @Output() sendValue = new EventEmitter<string>();

  onSubmit(event: Event) {
    event?.preventDefault();
    this.formValue = this.email.value ?? "";
    console.log("Emitting success:", this.success);
    console.log("Emitting value:", this.formValue);
    this.showSuccess.emit(this.success);
    this.sendValue.emit(this.formValue);
  }
}
