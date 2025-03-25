import { Component } from '@angular/core';
import { AttributeService } from './attribute.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'QuestLife';
  user = 'User';
  otherTheme = 'dark';
  overallLevel$ = this.service.overallLevel$;

  constructor(private service: AttributeService) {

  }
}
