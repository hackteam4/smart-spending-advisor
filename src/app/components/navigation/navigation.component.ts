import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {

  accountForm = new FormGroup({
    accountNumber: new FormControl('', [Validators.required]),
  })

  submit() {
    if (this.accountForm.valid) {
       const accountNumber = this.accountForm.controls.accountNumber.value;
    }
  }
}


