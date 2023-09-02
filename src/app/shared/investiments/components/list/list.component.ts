import { Component } from '@angular/core';
import { Investiments } from '../../model/investiments'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public investiments: Array<Investiments> = [
    {
      name: 'Bank 1',
      value: 100
    },
    {
      name: 'Bank 2',
      value: 100
    },
    {
      name: 'Bank 3',
      value: 100
    },
    {
      name: 'Bank 4',
      value: 100
    },
  ]
}
