import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.styl']
})
export class PageContainerComponent implements OnInit {
  view:any=false;
  variable:any;
  constructor() { }
  istoggle:any=[];
  ngOnInit() {
}
accordion(){
  this.variable=true;
}

toggleSwitch(e: any) {
  $(e.target).parents('.job-main-content').find('.card').toggleClass('Collapse');
}
switch(event: any) {
  $(event.target).parents('.job-main-content').find('.card').toggleClass('dark');
}
  collapse(i : any){
    if(!this.istoggle[i]){
      this.istoggle[i] = false;
    } 
    this.istoggle[i]=!this.istoggle[i];  
  }
  isToggle(i: any) {
    return this.istoggle[i];
  }
  viewmore(){
    if(this.view==false){
    this.view=true;
    }
    else{
      this.view=false;
    }
  }
  // callPath(item: any) {
  //   console.log('item', item);
  //   // const body = {
  //   //   dt: this.dt,
  //   //   emp_id: item.emp_id,
  //   //   path: item.path
  //   // };
  //   // this._payrollService.fetchPayslips(body).subscribe((data: any) => {
  //   //   console.log(data);
  //   const url = AppSettings.allowanceDownload + item.emp_id + '_' + item.allowance_file;
  //   console.log('url', url);
  //   this.downloadPath = url;
  // }
}
