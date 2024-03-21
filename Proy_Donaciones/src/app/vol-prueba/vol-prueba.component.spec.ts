import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolPruebaComponent } from './vol-prueba.component';

describe('VolPruebaComponent', () => {
  let component: VolPruebaComponent;
  let fixture: ComponentFixture<VolPruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VolPruebaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
