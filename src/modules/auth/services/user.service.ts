import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

import { User } from '@modules/auth/model/auth.model';



const userSubject: ReplaySubject<User> = new ReplaySubject(1);

@Injectable()
export class UserService {
    constructor() {
        this.user = {
            id: '0000',
            firstName: 'Fernanda',
            lastName: 'Cordeiro',
            email: 'fernandev.cordeiro@gmail.com',
        };
    }

    set user(user: User) {
        userSubject.next(user);
    }

    get user$(): Observable<User> {
        return userSubject.asObservable();
    }
}
