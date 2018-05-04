import { Component } from '@angular/core';
import { EmployeeService } from '/employee.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component ({
   selector: '',
   template: ` 
			<form #f="ngForm"  (ngSubmit)="f.valid && onFormSubmit(Employee)">
			<div>
				<label>Name: </labe><input type="text" maxlength="4" name="name" [(ngModel)]="Employee.name" #name="ngModel" required/>
			</div>
			<div>
			<label>Phone Number: </labe><input type="number" name="phnumber" [(ngModel)]="Employee.phnumber" #phnumber="ngModel" required/>
			</div>
			<div>
			<label>City: </labe><input name="city" [(ngModel)]="Employee.adress.city" #city="ngModel" />
			</div>
			<div>
			<label>Adress 1: </labe><input name="address_line1" [(ngModel)]="Employee.address.address_line1" #address_line1="ngModel" />
			</div>
			<div>
			<label>Addrss 2: </labe><input name="address_line2" [(ngModel)]="Employee.address.address_line2" #address_line2="ngModel" />
			</div>
			<div>
			<label>Posatl Code: </labe><input name="postal_code" [(ngModel)]="Employee.address.postal_code" #postal_code="ngModel" />
			</div>
			<div>
				 <button >Add User</button> 
			</div>
			</form>
   `,
})

export class AddEditEmployee {
	constructor(private dataservice : EmployeeService, private router: Router, private route: ActivatedRoute){}
	Employee:any={
		name : '',
		phnumber : null,
		address:{
			city: '',
			address_line1 : '',
			address_line2: '',
			postal_code: ''
		}
		
	}
	
	ngOnInit() {
			//for edit get the record from database by id and populate the form
		this.route.params.subscribe(params => {
			if(params!=undefined){
				let id = params['id']; 
				dataservice.getEmployeeByID(id).subscribe(data =>{				
					this.Employee.id=data.id;
					this.Employee.phnumber=data.phnumber;
					this.Employee.address.city=data.address.city;
					this.Employee.address.address_line1=data.address.address_line1;
					this.Employee.address.address_line2=data.address.address_line2;
					this.Employee.address.postal_code=data.address.postal_code;
			
				})
			}
			
		});
	}
	
	// Add/update record
	saveEmployee(){
		dataservice.SaveEmployee(employee).subscribe(data =>{
			alert("Save/Update Successfully");
			router.navigate(['/employees'])
			
		})
		
	}
}