import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    console.log("in filtre" +items);
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( iy => {
      console.log("in search")
      return iy.name.toLowerCase().includes(searchText);
    });

  }

}
