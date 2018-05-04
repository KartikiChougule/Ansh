import { Component } from '@angular/core';
import { EmployeeService } from '/employee.service';

  
@Component ({
   selector: 'my-app',
   template: `
	<a  [routerLink] = "['/employees/add']">Add New</a>
	<table class="table table-responsive table-hover">
    <tr>
      <th >ID</th>
      <th>Name</th>
      <th>Phone</th>
	  <th>City</th>
	  <th>Address1</th>
      <th>Address2</th>
	  <th>Postal Code</th>
	  <th>Edit</th>
    </tr>
    <tr *ngFor="let item of records.data">
      <td>{{item.id}}</td>
      <td>{{item.name}}</td>
      <td>{{item.phone | PhoneNumber}}</td>
	  <td>{{item.id}}</td>
      <td>{{item.address.city}}</td>
      <td>{{item.address.address_line1}}</td>
	  <td>{{item.address.address_line2}}</td>
	  <td>{{item.address.postal_code}}</td>
	  <td><a [routerLink] = "['/employees/:id/edit', item.id]">Edit</a>
    </tr>
  </table>

  `,
  pipe:[PhonePipe]
})
export class AppComponent  { 
	
	records :any = {"data": [{
		"id": 1,
		"name": "Jhon",
		"phone": "9999999999",
		"address":
		{
		"city": "Pune",
		"address_line1":"ABC road",
		"address_line2":"XYZ building",
		"postal_code":"12455"
		}
		}, {
		"id": 2,
		"name": "Jacob",
		"phone": "AZ99A99PQ9",
		"address":
		{
		"city": "Pune",
		"address_line1":"PQR road",
		"address_line2":"ABC building",
		"postal_code":"13455"
		}
		}, {
		"id": 3,
		"name": "Ari",
		"phone": "145458522",
		"address":
		{
		"city": "Mumbai",
		"address_line1":"ABC road",
		"address_line2":"XYZ building",
		"postal_code":"12455"
		}
		}]
	}
	
	
		
		

}