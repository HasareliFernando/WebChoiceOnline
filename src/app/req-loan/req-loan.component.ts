import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';
import { LoanService } from '../loan.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-req-loan',
  templateUrl: './req-loan.component.html',
  styleUrls: ['./req-loan.component.css']
})
export class ReqLoanComponent implements OnInit {

  constructor(private loanService:LoanService,private db: AngularFire) { }
  reqLoanForm:FormGroup;
  user = {};
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

  public onSubmmit(){
   this.user = {
      "amount" : this.reqLoanForm.get('amount').value,
      "emp_name": this.reqLoanForm.get('name').value,
      "remark": this.reqLoanForm.get('loantype').value,
      "status": 'Pending',
      "scheme": this.reqLoanForm.get('scheme').value,
      "expDate": this.reqLoanForm.get('expDate').value,
      "reason": this.reqLoanForm.get('reason').value
     

    };
    this.db.database.list('/LoanReq').push(this.user);
  }

}
