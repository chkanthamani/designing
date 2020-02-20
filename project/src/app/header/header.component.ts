import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  clickMessage = '';
  user: any = [];
  bot: any = [];
  a:any;
  searchValue = '';

  ngOnInit() {
    $(document).ready(() => {
      $('.circle').click(() => {
        $('.main').toggleClass('active');
      });
      $('[data-toggle="tooltip"]').tooltip();
      $('effect-11').bind('keypress', () => {
        $('.chat-box').animate({ scrollTop: $('.chat-box')[0].scrollHeight}, 1000);
      });
      $('.chat-submit').click(() => {
        $('.chat-box').scrollTop(10000);
      });
      $('.effect-11').keyup(() => {
        $('.chat-box').scrollTop(10000);
      });
    });
  }


  onClickMe(event: any) {
    this.user.push(event);
    this.a=='true';
    // this.object.push(event);
    if (event === 'hello') {
      this.bot.push('How can I help you?');
      this.a='false';
      // this.object.push('How can I help you?');
  } else if (event === 'what is your name?') {
    this.bot.push('You can call me whatever you want to');
    // this.object.push('You can call me whatever you want to');
}

  }
}

