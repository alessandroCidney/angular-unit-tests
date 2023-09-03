import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing'
import { Investiments } from '../../model/investiments'
import { MOCK_LIST } from '../../services/list-investiments.mock'
import { ListInvestimentsService } from '../../services/list-investiments.service'
import { of } from 'rxjs/internal/observable/of'

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: ListInvestimentsService

  const mockList: Array<Investiments> = MOCK_LIST

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.inject(ListInvestimentsService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) should list investiments', () => {
    spyOn(service, 'list').and.returnValue(of(mockList))

    component.ngOnInit()
    fixture.detectChanges()

    expect(service.list).toHaveBeenCalledWith()
    expect(component.investiments.length).toBe(5)

    expect(component.investiments[0].name).toEqual('Bank 1')
    expect(component.investiments[0].value).toEqual(100)

    expect(component.investiments[4].name).toEqual('Bank 5')
    expect(component.investiments[4].value).toEqual(100)
  })

  it('(I) should list investiments', () => {
    spyOn(service, 'list').and.returnValue(of(mockList))

    component.ngOnInit()
    fixture.detectChanges()

    const investiments: HTMLElement[] = fixture.debugElement.nativeElement
      .querySelectorAll('.list-item')

    expect(investiments.length).toEqual(5)
    expect(investiments[0].textContent?.trim()).toEqual('Bank 1 | 100')
    expect(investiments[4].textContent?.trim()).toEqual('Bank 5 | 100')
  })
});
