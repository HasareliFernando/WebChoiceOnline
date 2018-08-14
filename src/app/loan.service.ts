import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


export class AdReq{
	
}


@Injectable()
export class LoanService {
	
  constructor(private db: AngularFire) { }

  lists: FirebaseListObservable<any[]>;

  getlist(){
  	this.lists = this.db.database.list('/LoanReq') as FirebaseListObservable<Lists[]>
  	return this.lists;
  }



}
interface Lists{
	$key?:string;
	amount?:number;
	emp_name?:string;
	expDate?:string;
	remark?:string;
	status?:string;


}
