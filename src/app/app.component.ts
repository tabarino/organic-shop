import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './services/user.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(
        private authService: AuthService,
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        if (location.pathname === '/login') {
            authService.user$.subscribe(user => {
                if (user) {
                    userService.save(user);
                    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');

                    if (!returnUrl) {
                        return;
                    }

                    if (returnUrl.includes('admin')) {
                        this.router.navigateByUrl('/');
                    } else {
                        this.router.navigateByUrl(returnUrl);
                    }
                }
            });
        }
    }
}
