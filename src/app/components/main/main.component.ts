import { Component } from "@angular/core";
import { FormComponent } from "../main/form/form.component";

@Component({
  selector: "app-main",
  imports: [FormComponent],
  templateUrl: "./main.component.html",
  styleUrl: "./main.component.css",
})
export class MainComponent {
  emailValue: string = "";
  success: boolean = false;

  onSendValue(value: string) {
    this.emailValue = value;
  }

  onShowSuccess(success: boolean) {
    this.success = success;
  }

  dismiss() {
    this.success = false;
  }
}
