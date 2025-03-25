import { Component } from '@angular/core';
import { AttributeService } from '../attribute.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

  attributes$ = this.service.allAttributes$;
  overallLevel$ = this.service.overallLevel$;
  constructor(private service: AttributeService) {
  }
}
