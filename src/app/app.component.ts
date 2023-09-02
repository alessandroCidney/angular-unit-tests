import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teste-unitario';

  public soma (v1: number, v2: number) {
    return v1 + v2
  } 
}
