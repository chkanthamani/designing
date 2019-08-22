import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';
@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.styl']
})
export class PageContentComponent implements OnInit {
  regform:FormGroup;
  submitted=false;

  constructor(private formBuilder: FormBuilder) {}
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
    showTodayBtn: false,
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    todayBtnTxt: 'today',
    satHighlight: true,
    markCurrentDay: true,
    showDecreaseDateBtn: true,
    disableUntil: {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate()-1
    }
  };



  ngOnInit() {
    this.regform=this.formBuilder.group({
    saluation: new FormControl('',[Validators.required]),
    firstname: new FormControl('',[Validators.required,Validators.minLength(6)]),
    lastname:new FormControl('',[Validators.required,Validators.minLength(6)]),
    email:new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]),
    phonenum:new FormControl('',[Validators.required,Validators.pattern("")]),
    name:new FormControl('',[Validators.required]),
    contactnum:new FormControl('',[Validators.required]),
    fathername:new FormControl('',[Validators.required]),
    mothername:new FormControl('',[Validators.required]),
    spousename:new FormControl('',[Validators.required]),
    address1:new FormControl('',[Validators.required]),
    address2:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    state:new FormControl('',[Validators.required]),
    country:new FormControl('',[Validators.required]),
    pincode:new FormControl('',[Validators.required]),
    dob:new FormControl('',[Validators.required])
    });
  }
  // get fname(){return this.regform.controls;}
//   onSubmit() {
//     this.submitted = true;
//     if (this.regform.invalid) {
//         return;
//     }
//     else
//       alert("success");
// }
submit(x){
  alert(JSON.stringify(this.regform.value));
  console.log(x);
}
}