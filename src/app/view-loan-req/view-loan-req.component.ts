import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-view-loan-req',
  templateUrl: './view-loan-req.component.html',
  styleUrls: ['./view-loan-req.component.css']
})
export class ViewLoanReqComponent implements OnInit {

  constructor(private loanService:LoanService) { }
  users =[ ];
  ngOnInit() {
  this.loanService.getlist().subscribe(lists =>{
  	console.log(lists);
  	this.users = lists;
  });
  }

}
