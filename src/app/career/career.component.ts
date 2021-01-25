import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore'

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {
  data$: any;
  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.data$ = this.db.collection("record").doc().snapshotChanges();

  }

  /*about1=[
    {'id':1,'name1':'SR. EMBEDDED ENGINEER','name':'4-5 Years Exp','description':'Strong programming with project management skill'},
    {'id':2,'name1':'SR. EMBEDDED ENGINEER','name':'2-4 Years Exp','description':'Strong programming with project management skill','image':'assets/b1 (3).jpeg'},
    {'id':3,'name1':'SR.WEB DEVELOPER','name':'2-4 Years Exp','description':'Strong programming with project management skill','image':'assets/pratu.jpeg'},

  ]*/
}
