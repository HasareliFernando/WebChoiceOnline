import { Component, OnInit } from '@angular/core';
import { AngularFire} from 'angularfire2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public db:AngularFire) { }

  ngOnInit() {
  }



}
