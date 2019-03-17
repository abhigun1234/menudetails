import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrohomeComponent } from './restrohome.component';

describe('RestrohomeComponent', () => {
  let component: RestrohomeComponent;
  let fixture: ComponentFixture<RestrohomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestrohomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
