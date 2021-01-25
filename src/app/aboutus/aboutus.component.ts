import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  about=[
    {'id':1,'name':'Analysis','description':'Our team is expert in understood the clients requirements properly','image':'/assets/analysis.jpg'},
    {'id':2,'name':'Planning','description':'Our team is expert in understood the clients requirements properly.','image':'assets/planing.jpg'},
    {'id':3,'name':'Designing','description':'Our team is expert in understood the clients requirements properly.','image':'assets/designing.jpg'},
    {'id':4,'name':'Development','description':'Our team is expert in understood the clients requirements properly','image':'/assets/development.jpg'},
    {'id':5,'name':'Testing','description':'Our team is expert in understood the clients requirements properly.','image':'assets/testing.jpg'},
    {'id':6,'name':'Free Support','description':'Our team is expert in understood the clients requirements properly.','image':'assets/free.jpg'},
  ]
  about1=[
    {'id':1,'name':'Ajaysinh Pawar','description':'Software Developer','image':'/assets/ajay.JPG'},
    {'id':2,'name':'Bhagyashree Pare','description':'Web designer','image':'assets/b1 (3).jpeg'},
    {'id':3,'name':'Pratiksha Shukla','description':'Web Tester','image':'assets/pratu.jpeg'},
    {'id':4,'name':'Aditi Dubey ','description':'Web Developer','image':'/assets/aditi1.jpeg'},
    {'id':5,'name':'Swati Surade','description':'Web Developer','image':'assets/swati (2).jpeg'},
  ]


}

  
  



