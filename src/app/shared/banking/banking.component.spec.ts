import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankingComponent]
    });
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`
    (U) getPoupanca():
    should have poupanca = 10
  `, () => {
    expect(component.getPoupanca).toEqual(10)
  })

  it(`
    (U) getCarteira(): should have carteira = 50
  `, () => {
    expect(component.getCarteira).toEqual(50)
  })

  it(`
    (U) setSacar(): should transfer poupanca from carteira
  `, () => {
    component.setSacar('10')

    expect(component.getPoupanca).toEqual(0)
    expect(component.getCarteira).toEqual(60)
  })

  it(`
    (U) setDepositar(): should transfer carteira from poupanca
  `, () => {
    component.setDepositar('50')

    expect(component.getCarteira).toEqual(0)
    expect(component.getPoupanca).toEqual(60)
  })

  it(`
    (U) setSacar(): should do nothing if the value isn't a number
    or if poupanca < value
  `, () => {
    expect(component.setSacar('a')).toBeUndefined()
    expect(component.setSacar('1000')).toBeUndefined()
  })

  it(`
    (U) setDepositar(): should do nothing if the value isn't a number
    or if carteira < value
  `, () => {
    expect(component.setDepositar('a')).toBeUndefined()
    expect(component.setDepositar('1000')).toBeUndefined()
  })

  it(`
    (I) setDepositar(): should transfer carteira from poupanca
  `, () => {
    let el = fixture.debugElement.nativeElement
    el.querySelector('#input-depositar').value = '10'
    el.querySelector('#depositar').click()

    fixture.detectChanges()

    expect(el.querySelector('#get-poupanca').textContent).toEqual('20')
    expect(el.querySelector('#get-carteira').textContent).toEqual('40')
  })

  it(`
    (I) setSacar(): should transfer poupanca from carteira
  `, () => {
    let el = fixture.debugElement.nativeElement
    el.querySelector('#input-sacar').value = '10'
    el.querySelector('#sacar').click()

    fixture.detectChanges()

    expect(el.querySelector('#get-carteira').textContent).toEqual('60')
    expect(el.querySelector('#get-poupanca').textContent).toEqual('0')
  })
});
