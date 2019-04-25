import { Component } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})

export class ProfilePage {
	constructor(private authService: AuthService){}
	
	customNames = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

	logout() {
	    this.authService.logout();
	}
}
