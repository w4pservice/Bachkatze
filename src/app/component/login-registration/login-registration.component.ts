import { Component } from '@angular/core';

import { Member }    from '../../model/member.model';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html'
})
export class HeroFormComponent {

  model = new Member('2345', 'Dr IQ', 'Thomas', 'Keller', 'me@me.ch', 3097, 'Liebefeld');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
