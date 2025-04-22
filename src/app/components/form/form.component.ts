import { Component } from "@angular/core";
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
}
