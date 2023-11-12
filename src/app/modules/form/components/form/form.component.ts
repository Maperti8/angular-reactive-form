import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {

  selectedSport: string = '';
  sports: string[] = ['Football', 'Volleyball', 'Swimming', 'Badminton', 'Table Tennis'];
  profileForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(25)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      age: [null, [Validators.required, Validators.min(0)]],
      prevAttended: [false, [Validators.required]],
      sport: ['', [Validators.required]],
      comment: ['', [Validators.required, Validators.maxLength(4000)]],
    });
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
