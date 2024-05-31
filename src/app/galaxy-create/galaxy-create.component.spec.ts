import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxyCreateComponent } from './galaxy-create.component';

describe('GalaxyCreateComponent', () => {
  let component: GalaxyCreateComponent;
  let fixture: ComponentFixture<GalaxyCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalaxyCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalaxyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
