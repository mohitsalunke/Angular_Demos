import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myProductPipe'
})
export class MyProductPipePipe implements PipeTransform {

  transform(price:number, discount:number ): number {
    console.log(price);
    // if(price>20000)
    // {
      
    //   return price*discount/100;
    // }
    // else(price<19000)
    // {
    //   return price*discount/100;
    // }
    if(discount==0)
    {
      return price;
    }
    else{
      return price*discount/100;
    }
    
  }

}
