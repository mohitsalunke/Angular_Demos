import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expoentialStrength'
})
export class ExpoentialStrengthPipe implements PipeTransform {

  transform(value: number, exponent:string): number {
    let exp=parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1: exp);
  }

}
