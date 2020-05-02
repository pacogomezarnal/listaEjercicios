import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-testdb',
  templateUrl: './testdb.component.html',
  styleUrls: ['./testdb.component.css']
})
export class TestdbComponent implements OnInit {
  ejercicios: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.ejercicios = firestore.collection('ejercicios').valueChanges();
   }

  ngOnInit(): void {
  }

}
