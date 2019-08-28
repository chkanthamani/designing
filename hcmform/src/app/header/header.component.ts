import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $(".fa-cog").click(function(){
        if($(this).hasClass("active")){
          $(this).animate({
          });
        }
        else{
          $(this).addClass("active");
        }
      });
    });
  }

}
