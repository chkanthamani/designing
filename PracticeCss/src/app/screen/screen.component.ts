import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';
@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {
  regform:FormGroup;
  editform:FormGroup;
  details:any=[];
  array1: any=[];
  array2: any=[];
  constructor(private fb :FormBuilder) { }
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
    showTodayBtn: true,
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    todayBtnTxt: 'today',
    satHighlight: true,
    markCurrentDay: true,
    showDecreaseDateBtn: true,
    // disableUntil: {
    //   year: new Date().getFullYear(),
    //   month: new Date().getMonth() + 1,
    //   day: new Date().getDate()-1
    // }
  };
  ngOnInit() {
    this.regform = this.fb.group({
      firstname : new FormControl('',[Validators.required,Validators.minLength(6)]),
      lastname : new FormControl('',[Validators.required,Validators.minLength(4)]),
      mname : new FormControl('',[]),
      dob:new FormControl('',[Validators.required]),
      gender:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]),
      contactnum:new FormControl('',[Validators.required,Validators.minLength(10)]),
    })
    this.editform = this.fb.group({
      firtname: new FormControl('',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      contactnum: new FormControl('',[Validators.required])
    })
  }

  submit(){
    // alert(JSON.stringify(this.regform.value));
    this.array1.push(this.regform.value)
    console.log(this.array1);
    // this.regform.reset();
  }
  edit(){
    this.array2.push(this.editform.value);
    console.log(this.array2);
  }

}
