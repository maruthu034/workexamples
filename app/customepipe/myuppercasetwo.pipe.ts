import { Pipe, PipeTransform } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
@Pipe({
    name: 'myuppercasetwo'
})
export class MyUppercaseTwoPipe implements PipeTransform {
    transform(value: string, seperator: string): string {
        const maruthu = new UpperCasePipe();
        let result = maruthu.transform(value);
        result = result.split(' ').join(seperator);
        return result;
    }
}
