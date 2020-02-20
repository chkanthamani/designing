import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Pipe, PipeTransform, Query } from '@angular/core';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.styl']
})
export class FormsComponent implements OnInit {
  regform: FormGroup;
  loop: any = [];
  value = 0;
  data: any = [];
  options: any = [];
  options1:any=[];
  fileToUpload: File;
  list: any = [];
  dummydata: any = [];
  searchTerm: any;
  itemcopy: any = '';
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.loop = [
      {
        title: 'Firstname',
        sub: [
          { subtitle: 'firstlist1', },
          { subtitle: 'firstlist2', },
          { subtitle: 'firstlist3', },
        ]
      },
      {
        title: 'Secondname',
        sub: [
          { subtitle: 'secondlist1', },
          { subtitle: 'secondlist2', },
          { subtitle: 'secondlist3', },
        ]
      },
      {
        title: 'Thirdname',
        sub: [
          { subtitle: 'thirdlist1', },
          { subtitle: 'thirdlist2', },
          { subtitle: 'thirdlist3', },
        ]
      },
      {
        title: 'Fourthname',
        sub: [
          { subtitle: 'fourthlist1', },
          { subtitle: 'fourthlist2', },
          { subtitle: 'fourthlist3', },
        ]
      },
    ]
    this.regform = this.fb.group({
      array: this.fb.array([this.initAddress()])
    })
    this.data = [
      {
        id: 1,
        name: 'Designer'
      },
      {
        id: 2,
        name: 'Tester'
      },
      {
        id: 3,
        name: 'Developer'
      },
      {
        id: 4,
        name: 'Android'
      }
    ]
    this.list = [
      {
        name: 'Manoj Varma',
        dob: '1-2-1993',
        mail: 'manoj123@gmail.com',
        phnnum: '1234567890'
      },
      {
        name: 'Kavitha Reddy',
        dob: '1-2-1993',
        mail: 'manoj123@gmail.com',
        phnnum: '1234567890'
      },
      {
        name: 'Arjun Pasad',
        dob: '1-2-1993',
        mail: 'manoj123@gmail.com',
        phnnum: '1234567890'
      },
      {
        name: 'Krishna',
        dob: '1-2-1993',
        mail: 'manoj123@gmail.com',
        phnnum: '1234567890'
      },
      {
        name: 'Lalitha',
        dob: '1-2-1993',
        mail: 'manoj123@gmail.com',
        phnnum: '1234567890'
      },
    ]
    this.getdata();
  }

  //search filter

  getdata() {
    this.dummydata = this.list;
  }
  search(term:any) {
    this.dummydata = this.list.filter(function (data) {
      return data.name.indexOf(term) >= 0;
    });
  }

  //form
  initAddress() {
    return this.fb.group({
      firstname: new FormControl('', [Validators.required, Validators.minLength(4)]),
      lastname: new FormControl('', [Validators.required]),
      phnnum: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]),
      address: new FormControl('', [Validators.required])
    });
  }
  addform() {
    this.value = this.value + 1;
    const control = this.regform.controls['array'] as FormArray;
    control.push(this.initAddress());
    console.log(control);
  }
  deleteform(i: number) {
    this.value = this.value - 1;
    const control = this.regform.controls['array'] as FormArray;
    control.removeAt(i);
    console.log(control);
  }

  //multiselect
  Onchange(value: any) {
    this.options.push(value);
  }
  deselect(value: any) {
    this.options1.push(value);
  }
}
