import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tweetsSort'
})
export class TweetsSortPipe implements PipeTransform {

  transform(array: Array<any>, order: boolean): Array<string> {
    if (order === undefined ) {
      return array;
    }

    if (order) {
      array.sort((a: any, b: any) => {
        return (a.user.followers_count < b.user.followers_count) ? 1 : -1;
      });
      return array.sort();
    }

    return array.reverse();
  }

}
