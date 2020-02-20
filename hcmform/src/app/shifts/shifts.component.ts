import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import * as $ from 'jquery';
// import { log } from 'util';
@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.styl']
})
export class ShiftsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }


  public myDatePickerOption: IMyDpOptions = {
    dateFormat: 'yyyy-mm-dd', // dd-mmm-yyyy
    editableDateField: false,
    showTodayBtn: true,
    sunHighlight: true,
    satHighlight: false,
    markCurrentDay: true,
    markCurrentMonth: true,
    markCurrentYear: true,
    inline: true,
    selectorHeight: '232px',
    selectorWidth: '252px',
    height: '34px',
    width: '100%',
    componentDisabled: false,
    showClearDateBtn: true,
    openSelectorOnInputClick: true,
    disableSince: {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate() + 1
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

    $(document).ready(function(){
      $('.next').click(function(){
        $('.pagination').find('.list-item .active').next().addClass('active');
        $('.pagination').find('.list-item .active').prev().removeClass('active');
        // if($('.list-item').children().hasClass('active'))
        // {
        //   $('.list-item').children('.active').removeClass('active');
        //   $('.list-item').next('.list-item').children('.list-link').addClass('active')
        // }
      });
      $('.prev').click(function(){
        $('.pagination').find('.list-item .active').prev().addClass('active');
        $('.pagination').find('.list-item .active').next().removeClass('active');
      });
    });
}
value:any
open(event:any){
  this.value= event;
  console.log(this.value);
}}
