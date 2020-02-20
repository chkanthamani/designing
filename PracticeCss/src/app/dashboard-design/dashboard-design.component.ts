import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-design',
  templateUrl: './dashboard-design.component.html',
  styleUrls: ['./dashboard-design.component.scss']
})
export class DashboardDesignComponent implements OnInit {
loctaion:any=[];
  constructor() { }

  ngOnInit() {
    this.loctaion = [
      {
        location: 'Curepipe',
        status: '1',
        Device: '6/34'
      },
      {
        location: 'Vicos phonix',
        status: '0',
        Device: '2/50'
      },
      {
        location: 'Quatres',
        status: '1',
        Device: '6/34'
      },
      {
        location: 'Albion',
        status: '1',
        Device: '4/20'
      },
      {
        location: 'Albion',
        status: '1',
        Device: '4/20'
      },
      {
        location: 'Albion',
        status: '0',
        Device: '4/20'
      },

      {
        location: 'Albion',
        status: '1',
        Device: '4/20'
      },
      {
        location: 'Albion',
        status: '0',
        Device: '4/20'
      },
    ]
  }

}
