//libraries to use pipe from angular
import { Pipe, PipeTransform } from '@angular/core';

//pipe is class & name is used in the template
@Pipe({
  name: 'tempConvertor'
})

//PipeTransform is interface & it defines only one method tranform
//value and unit===>it convert the value which is received
//C==>Celsius & F==>Fahrenheit
export class TempConvertorPipe implements PipeTransform {
  transform(value: number, unit: string) {
    if(value && !isNaN(value)) {
        if (unit === 'C') {
            var temperature = (value - 32) /1.8 ;
            return temperature.toFixed(2);
        } else if (unit === 'F'){
            var temperature = (value * 1.8 ) + 32
            return temperature.toFixed(2);
        }
    }
    return;
}
}
