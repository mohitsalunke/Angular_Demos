import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'designationPipe'
})
export class DesignationPipePipe implements PipeTransform {

  transform(value: any, YrofExp:number): unknown {
    if(YrofExp>=10)
    {
      return 'Sr.'+value;
    }
    else(YrofExp<9)
    {
      return 'jr.'+value;
    }
  }

}
