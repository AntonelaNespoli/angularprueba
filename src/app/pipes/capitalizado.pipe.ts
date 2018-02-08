import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalizado' })
export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, todas: boolean = true): string {
        value = value.toLowerCase();
        let values = value.split(' ');
        if (todas) {
            for (let i in values) {
                values[i] = values[1][0].toUpperCase() + values[1].substr[1];
            }
        } else {
            for (let i in values) {
                values[0] = values[0][0].toUpperCase() + values[0].substr[1];
            }
        }
        console.log(values);
        return values.join(' ');
    }
}