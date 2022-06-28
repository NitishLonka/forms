import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  checkoutForm!:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.checkoutForm = new FormGroup({
      fullname:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      address:new FormControl('',Validators.required),
      city:new FormControl('',Validators.required),
      phonenumber:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)]),
      confirmpassword:new FormControl('',Validators.required),
      terms:new FormControl('',Validators.requiredTrue)
    })
  }

  get f() { return this.checkoutForm.controls; }

}
