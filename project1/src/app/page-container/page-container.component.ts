import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators,FormArray} from '@angular/forms'
@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.styl']
})
export class PageContainerComponent implements OnInit {
regform:FormGroup;
array1:FormArray;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.regform=this.fb.group({
      firstname: new FormControl('',[Validators.required])
    });
  }
// formarray(): void{
//   let array1=this.fb.group({
//     firstname: new FormControl('',[Validators.required]),
//     formArray: this.fb.array([])
//   });
//   console.log(array1);
// }
// addmore(){
//   this.formarray();
//   console.log(this.array1);
// }
}
