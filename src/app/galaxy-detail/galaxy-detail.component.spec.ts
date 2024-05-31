import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxyDetailComponent } from './galaxy-detail.component';

describe('GalaxyDetailComponent', () => {
  let component: GalaxyDetailComponent;
  let fixture: ComponentFixture<GalaxyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalaxyDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalaxyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
