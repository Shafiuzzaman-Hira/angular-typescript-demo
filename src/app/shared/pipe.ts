import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class searchPipe implements PipeTransform {
  transform(items: any[], criteria: any): any { 
    criteria = criteria.toLowerCase();
            return items.filter(item =>{
               for (let key in item ) {
                 if((""+item[key]).toLowerCase().includes(criteria)){
                    return true;
                 }
               }
               return false;
            });
        }
}