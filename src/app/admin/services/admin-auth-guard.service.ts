import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {
    constructor(private authService: AuthService) {
    }

    canActivate(): Observable<boolean> {
        return this.authService.appUser$.pipe(
            map(appUser => appUser.isAdmin)
        );
    }
}
