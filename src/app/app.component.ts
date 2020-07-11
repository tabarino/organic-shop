import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(
        private authService: AuthService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        authService.user$.subscribe(user => {
            if (user) {
                const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
                this.router.navigateByUrl(returnUrl);
            }
        });
    }
}
