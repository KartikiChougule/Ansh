import { Injectable } from '@angular/core';  
import { Http , Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class EmployeeService {  
	constructor(private _http: Http){}
	getEmployeeByID(empId: Number) { 
		this._http.get(empId).map((response: Response) => response.json()) 
	} 
	SaveEmployee(EmployeeObj: any) { 
		this._http.post(EmployeeObj).map((response: Response) => response.json()) 
	} 
} 