import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitName'
})
export class SplitNamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    var transformed;
    if (typeof value === 'string') {
      // remove salutation
      transformed = value.replace(/Mr. |Mrs. |Miss. /, "");
      // get firstname 
      transformed = transformed.split(" ", 1)
    }  
    
    return transformed;
  }

}
