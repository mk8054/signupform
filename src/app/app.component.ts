import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  img = "";
  filename = "Choose File"
  signupform: FormGroup;
  constructor(private fb: FormBuilder) {
    this.signupform = this.fb.group(
      {
        'fname': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        'lname': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        'email': ['', Validators.compose([Validators.required, Validators.email])],
        'mobile': ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])],
      }
    )
  }

  submit() {
    console.log(this.signupform.value);
  }

  uploadImage(img) {
    this.filename = img[0].name;
    console.log(img)
    this.img = img
  }

}
