import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing'

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) should list investiments', () => {
    expect(component.investiments.length).toEqual(4)
    expect(component.investiments[0].name).toEqual('Bank 1')
    expect(component.investiments[3].name).toEqual('Bank 4')
  })

  it('(I) should list investiments', () => {
    const investiments: HTMLElement[] = fixture.debugElement.nativeElement
      .querySelectorAll('.list-item')

    expect(investiments.length).toEqual(4)
    expect(investiments[0].textContent?.trim()).toEqual('Bank 1 | 100')
    expect(investiments[3].textContent?.trim()).toEqual('Bank 4 | 100')
  })
});
