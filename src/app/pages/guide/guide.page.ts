import { Component } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-guide',
  templateUrl: 'guide.page.html',
  styleUrls: ['guide.page.scss'],
})

export class GuidePage {
	slideOpts = {
	  initialSlide: 0,
	  speed: 400
	};
	constructor(private authService: AuthService) {}

	logout() {
	    this.authService.logout();
	}
}
