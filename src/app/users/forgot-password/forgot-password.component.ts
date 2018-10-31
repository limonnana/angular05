import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  recoveryForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.recoveryForm = this.formBuilder.group({
      email: ['', Validators.required]
     })
  }

  get f() { return this.recoveryForm.controls; }

  onSubmit() {
    console.log('reset to email ... ' + this.f.email.value);
  }

}
