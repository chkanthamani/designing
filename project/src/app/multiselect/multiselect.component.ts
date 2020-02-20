import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
declare var $: any;
import * as _ from 'underscore';
import { NgStyle } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'multiselect-dropdown',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.styl']
})
export class MultiselectComponent implements OnInit {
  dropdowntitle: any;
  title = 0;
  name: any;
  dummyarray: any = [];
  dataList: any = [];
  @Output() selecteditem: EventEmitter<any> = new EventEmitter();
  @Output() onDeSelect: EventEmitter<any> = new EventEmitter();
  @Input() data: any;
  @Input() settings: any;
  @Input() settings1: any;

  constructor() { }

  ngOnInit() {
    this.getData();
    this.settings = this.settings1;
    this.dummyarray = this.settings;
  }

  dropdown() {
    this.title = this.title + 1;
    // console.log(this.data, 'name');
  }
  // select(event:any, index) {
  //   console.log(this.settings,'settings',this.dummyarray);
  //   if ($('.input-check input').is(':checked')) {
  //       this.selecteditem.emit(event.name);
  //       this.dummyarray = this.settings;
  //       // console.log('checked',event.name);
  //   }
  //   else {
  //     this.dummyarray = _.without(this.dummyarray, _.findWhere(this.dummyarray, (element:any) => {
  //       return element.index == event.index;
  //   }))
  //     console.log('false');
  //   }
  // }
  getData() {
    this.dataList = this.data;
  }
  select(e: any, item) {
    const isChecked = e.target.checked;
    if (isChecked) {
      this.selecteditem.emit(item.name);
      // this.dummyarray.push(item);
      // this.dummyid.push(item.id);
      // console.log('check',isChecked);
      console.log('check', item.name);
    }
    else {
      this.onDeSelect.emit(item.name);
      this.dummyarray = _.without(this.settings, item.name, (obj) => {
        return obj;
      });
      console.log('uncheck', this.dummyarray);
    }
  }
}
