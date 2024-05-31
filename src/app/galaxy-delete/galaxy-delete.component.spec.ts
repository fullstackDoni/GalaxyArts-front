import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxyDeleteComponent } from './galaxy-delete.component';

describe('GalaxyDeleteComponent', () => {
  let component: GalaxyDeleteComponent;
  let fixture: ComponentFixture<GalaxyDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalaxyDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalaxyDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
