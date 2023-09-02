import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'teste-unitario'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('teste-unitario');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('teste-unitario app is running!');
  });

  it('soma should return the sum of values', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance

    expect(app.soma(1, 1)).toEqual(2)
  })

  it('soma should return the sum of values (wrong value)', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance

    expect(app.soma(1, 2)).not.toEqual(2)
  })
});
