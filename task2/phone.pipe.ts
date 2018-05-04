import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'PhoneNumber' })
export class PhonePipe implements PipeTransform {
  transform(phoneNo: any): any {    
   
		if(Number(phoneNo) == NaN)			
			return 'NA';
		else
			return Number(phoneNo);
    
  }
}