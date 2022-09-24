import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginConstants } from '../shared/constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
isText:boolean=true;
isPdf:boolean=false;
isVideo:boolean=false;
isScan:boolean=false;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  changetoTextbox()
  {
    this.isText=true;
    this.isPdf=false;
    this.isScan=false;
    this.isVideo=false;
  }
  changetoPdfbox()
  {
    this.isText=false;
    this.isPdf=true;
    this.isScan=false;
    this.isVideo=false;
  }
  changetoScanbox()
  {
    this.isText=false;
    this.isPdf=false;
    this.isScan=true;
    this.isVideo=false;
  }
  changetoVideobox()
  {
    this.isText=false;
    this.isPdf=false;
    this.isScan=false;
    this.isVideo=true;
  }
  routetoQuestionspage(): void {
    this.router.navigate(['question']).then(()=>{
      window.location.reload();
   });
  }
  logo=LoginConstants.imgPath.logo;
}
