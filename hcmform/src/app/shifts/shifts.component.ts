import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// import { log } from 'util';
@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.styl']
})
export class ShiftsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
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
  regform:FormGroup;
  mydate = new Date();

  ngOnInit() {
    this.regform=this.formBuilder.group({
      dob : ['']
    })
    this.regform.patchValue({
      dob:{
        date: {
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
          day: new Date().getDate()
        }
      }
    });
}
value:any
open(x){
  this.value= x.formatted;
  console.log(this.value);
   // this.value.patchValue({Date: new Date()});
}

enter(event:any) {
  if(event.keyCode == 13) {
    alert('you just clicked enter');
    // rest of your code
  }
}
}
