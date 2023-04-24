import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(user: User[], searchUser: string){
        if (!user) return [];
        if (!searchUser) return user;
        searchUser = searchUser.toLowerCase();
        return user.filter(it => {
            return it.firstName.toLowerCase().includes(searchUser) || it.lastName.toLowerCase().includes(searchUser) ;
        });
    }
}
