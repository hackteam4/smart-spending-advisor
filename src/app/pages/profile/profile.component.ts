import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  profileForm = new FormGroup({
    totalIncome : new FormControl(0),
    totalExpenses : new FormControl(0),
    salary: new FormControl(0),
    rentIncome: new FormControl(0),
    householdExpenses: new FormControl(0),
    personalExpenses: new FormControl(0)
  })

  calculateTotalIncome() {

  }

  calculateTotalExpenses() {

  }
}
