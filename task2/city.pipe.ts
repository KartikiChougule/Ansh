import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'city' })
export class CityPipe implements PipeTransform {
  transform(cities: any, searchText: any): any {
    if(searchText == null) return cities;

    return cities.filter(function(cities){
      return cities.address.city.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }
}