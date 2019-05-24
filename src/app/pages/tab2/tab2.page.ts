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
    
   }

  ngOnInit() {
    this.storage.get('profile').then((val) =>{
      console.log(this.profile);
      this.profile = val;
    });
    
  }

  logout() {
    this.authService.logout();
  }
}
