import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';
import * as $ from 'jquery';
@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.styl']
})
export class PageContentComponent implements OnInit {
  regform:FormGroup;
  submitted:boolean;
  // employeeform:FormGroup;

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
    // middlename:new FormControl('',[Validators.required]),
    religion:new FormControl('',[Validators.required]),
    nationality:new FormControl('',[Validators.required]),
    locality:new FormControl('',[Validators.required]),
    // address:new FormControl('',[Validators.required]),
    // relation:new FormControl('',[Validators.required]),
    dob:new FormControl('',[Validators.required]),
    gender:new FormControl('',[Validators.required]),
    status:new FormControl('',[Validators.required]),
    // blood:new FormControl('',[Validators.required]),
    lastname:new FormControl('',[Validators.required,Validators.minLength(6)]),
    email:new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]),
    phonenum:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    name:new FormControl('',[Validators.required]),
    contactnum:new FormControl('',[Validators.required]),
    fathername:new FormControl('',[Validators.required]),
    mothername:new FormControl('',[Validators.required]),
    spousename:new FormControl({value:''},[Validators.required]),
    address1:new FormControl('',[Validators.required]),
    address2:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    state:new FormControl('',[Validators.required]),
    country:new FormControl('',[Validators.required]),
    pincode:new FormControl('',[Validators.required]),

    employeeid: new FormControl({value:'',disabled:false},[Validators.required]),
    Companyemail: new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]),
    officialno: new FormControl('',[Validators.required]),
    doj: new FormControl('',[Validators.required]),
    location: new FormControl('',[Validators.required]),
    businessunit: new FormControl('',[Validators.required]),
    department: new FormControl('',[Validators.required]),
    subdepartment: new FormControl('',[Validators.required]),
    employeetype: new FormControl('',[Validators.required]),
    designation: new FormControl('',[Validators.required]),
    repmanager: new FormControl('',[Validators.required]),
    notice: new FormControl('',[Validators.required]),
    Biometric: new FormControl('',[Validators.required]),
    });
    // this.employeeform=this.formBuilder.group({
      // employeeid: new FormControl('',[Validators.required]),
      // Companyemail: new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]),
      // officialno: new FormControl('',[Validators.required]),
      // doj: new FormControl('',[Validators.required]),
      // location: new FormControl('',[Validators.required]),
      // businessunit: new FormControl('',[Validators.required]),
      // department: new FormControl('',[Validators.required]),
      // subdepartment: new FormControl('',[Validators.required]),
      // employeetype: new FormControl('',[Validators.required]),
      // designation: new FormControl('',[Validators.required]),
      // repmanager: new FormControl('',[Validators.required]),
      // notice: new FormControl('',[Validators.required]),
      // Biometric: new FormControl('',[Validators.required]),
    // });
    $(document).ready(function(){
      $("").click(function(){

      });
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
  // alert(JSON.stringify(this.regform.value));
  // alert('success');
  console.log(x);
}
values: any = [];
  send(value: string) {
    this.values.push(value);
}
}