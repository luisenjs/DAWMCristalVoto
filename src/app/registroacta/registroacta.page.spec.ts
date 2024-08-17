import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroactaPage } from './registroacta.page';

describe('RegistroactaPage', () => {
  let component: RegistroactaPage;
  let fixture: ComponentFixture<RegistroactaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroactaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
