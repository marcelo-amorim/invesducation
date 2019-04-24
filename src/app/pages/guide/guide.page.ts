import { Component } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: 'guide.page.html',
  styleUrls: ['guide.page.scss'],
})

export class GuidePage {
	slideOpts = {
	  initialSlide: 1,
	  speed: 400
	};
	constructor() {}
}
