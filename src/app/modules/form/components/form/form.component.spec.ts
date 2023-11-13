import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../../../modules/material/material-module';
import { FormComponent } from './form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, NoopAnimationsModule, ReactiveFormsModule], 
      declarations: [FormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create FormComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with invalid initial state', () => {
    expect(component.profileForm.valid).toBe(false);
  });

  it('should be invalid when required fields are not filled in', () => {
    component.profileForm.setValue({
      firstName: '',
      lastName: '',
      age: null,
      prevAttended: false,
      sport: '',
      comment: ''
    });
    expect(component.profileForm.valid).toBe(false);
  });  

  it('should be invalid when input values exceed maximum length', () => {
    component.profileForm.setValue({
      firstName: 'Lorem ipsum dolor sit amet, consectetur',
      lastName: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      age: 30,
      prevAttended: false,
      sport: 'Football',
      comment: 'This is a comment that exceeds the maximum length of 4000 characters. '.repeat(100)
    });
    expect(component.profileForm.valid).toBe(false);
  });

  it('should submit the form when all fields are valid', () => {
    spyOn(component, 'openModal');
    component.profileForm.setValue({
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
      prevAttended: false,
      sport: 'Football',
      comment: ''
    });
    component.onSubmit();
    expect(component.openModal).toHaveBeenCalledWith('Form submitted successfully');
  });
  
});
