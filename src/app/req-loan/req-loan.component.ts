import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';

@Component({
  selector: 'app-req-loan',
  templateUrl: './req-loan.component.html',
  styleUrls: ['./req-loan.component.css']
})
export class ReqLoanComponent implements OnInit {

  constructor() { }
  reqLoanForm:FormGroup;
  ngOnInit() {
  	this.reqLoanForm = new FormGroup({
	    name: new FormControl(''),
	    loantype: new FormControl(''),
	    amount: new FormControl(''),
	    scheme: new FormControl(''),
	    expDate: new FormControl(''),
	    reason: new FormControl('')
	  });
  }

}
