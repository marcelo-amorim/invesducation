import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  private profile = null;

  constructor(
    private storage: Storage,
    private authService: AuthService
  ) {
    this.storage.get('profile').then((val) =>{
      this.profile = val;
      this.profile.carteira = this.profile.carteira.toFixed(2)
      console.log(this.profile);
    });
   }

  ngOnInit() {
    
    
  }

  logout() {
    this.authService.logout();
  }
}
