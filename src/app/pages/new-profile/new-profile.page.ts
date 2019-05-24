import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile/profile.service';
// import { ProfileService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.page.html',
  styleUrls: ['./new-profile.page.scss'],
})
export class NewProfilePage implements OnInit {

  usernameForm: FormGroup;
  profile: any;
  constructor(
    private formBuilder: FormBuilder,
    private storage: Storage,
    private profileService: ProfileService,
    ) {
    this.profile = this.storage.get('profile');
  }

  ngOnInit() {
    var username  = (this.profile != null ? this.profile.username : '');
    console.log(this.profile);
    this.usernameForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  register(){
    console.log(this.usernameForm.value)
    this.profileService.register(this.usernameForm.value).subscribe();
  }

}
