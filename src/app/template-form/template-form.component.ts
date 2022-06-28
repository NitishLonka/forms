import { Component, OnInit ,NgModule} from '@angular/core';
import {hero} from '../hero';
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  formData:any={};
  constructor() { }

  ngOnInit(): void {
  }
  issubmitted=false;
  onSubmit(){this.issubmitted=true;console.log(true);console.log(this.formData)};
}
