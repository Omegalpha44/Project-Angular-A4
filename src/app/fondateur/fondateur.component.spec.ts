import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondateurComponent } from './fondateur.component';

describe('FondateurComponent', () => {
  let component: FondateurComponent;
  let fixture: ComponentFixture<FondateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FondateurComponent]
    });
    fixture = TestBed.createComponent(FondateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
