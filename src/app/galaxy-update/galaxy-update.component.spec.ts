import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxyUpdateComponent } from './galaxy-update.component';

describe('GalaxyUpdateComponent', () => {
  let component: GalaxyUpdateComponent;
  let fixture: ComponentFixture<GalaxyUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalaxyUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalaxyUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
