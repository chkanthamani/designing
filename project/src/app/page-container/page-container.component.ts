import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.styl']
})
export class PageContainerComponent implements OnInit {
  list: any;
  name: any = [];
  array: any = ['1', 'hello', 3, 4, 6];
  array1: any = [3, 5, 7, 4, 2, 6, 8];
  object: any = [{ name: 'yami', desg: 'designer' }, { name: 'bindu', desg: 'tester' }, { name: 'reema', desg: 'developer' }]
  constructor() { }
  ngOnInit() {
  }
  add() {
    if (this.list.length != 0) {
      this.name.push(this.list);
      this.list = '';
    }
  }
  remove(index: any) {
    this.name.splice(index, 1);
  }
  foreach() {
    _(this.array).each(function (obj) {
      if (obj == 3) return obj;
      console.log(obj);
    })
  }
  map() {
    var finalArray = _.map({ one: 4, two: 2, three: 3 }, (obj, key) => {
      return obj * 3;
    });
    console.log('map', finalArray);
  }
  filter() {
    var filteredArray = _.filter(this.array, (obj) => {
      return obj * 3 == 9;
    });
    console.log('filter', filteredArray);
  }
  reduce() {
    var filteredArray = _.reduce(this.array1, (obj, num) => {
      return obj + 3;
    });
    console.log('reduce', filteredArray);
  }
  reduceright() {
    var filteredArray = _.reduceRight(this.array1, (obj, num) => {
      return obj.concat(num);
    }, []);
    console.log('reduceright', filteredArray);
  }
  find() {
    var filteredArray = _.find(this.array1, (obj) => {
      return obj % 2 == 0;
    });
    console.log('find', filteredArray);
  }
  findwhere() {
    var filteredArray = _.findWhere(this.array1, (obj) => {
      return obj % 2 == 0;
    });
    console.log('findwhere', filteredArray);
  }
  invoke() {
    var filteredArray = _.invoke([[2, 5, 3], [3, 2, 1]], 'sort');
    console.log('invoke', filteredArray);
  }
  indexby() {
    var filteredArray = _.indexBy(this.object, 'name', (obj, ) => {
      return obj;
    });
    console.log('index', filteredArray);
  }
  countby() {
    var filteredArray = _.countBy(this.array1, _.filter(this.array, {
    })
    );
    console.log('countby', filteredArray);
  }
  indexof() {
    var filteredArray = _.indexOf(this.array1, 'name', (obj, ) => {
      return obj;
    });
    console.log('indexOf', filteredArray);
  }
}
