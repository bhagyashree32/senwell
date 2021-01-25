import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  record: any;
  constructor(private fb: FormBuilder, private firebase: AngularFirestore) { }

  ngOnInit(): void {
    this.record = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      msg: ['', Validators.required]

    })

  }
  setData() {
    this.record.value = {
      name: "",
      email: "",
      phone: "",
      msg: ""
    }
  }
  onSubmit() {

    this.firebase.collection("record").doc().set({
      ...this.record.value},{merge:true}).then(data=>
        {debugger}).catch((a)=>{
          debugger
        })
        debugger
    this.setData();
  }
}
