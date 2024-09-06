import { Component, OnInit } from '@angular/core';
import { IncrementerService } from '../services/incrementer.service';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.scss'],
})
export class IncrementerComponent  implements OnInit {

  constructor(
    public incrementer: IncrementerService
  ) { }

  ngOnInit() {}

  decrementar() {
    if (this.incrementer.valor > 0)
      this.incrementer.valor--;
  }

  incrementar() {
    this.incrementer.valor++;
  }

}
