import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonbonniereComponentComponent } from './bonbonniere-component.component';

describe('BonbonniereComponentComponent', () => {
  let component: BonbonniereComponentComponent;
  let fixture: ComponentFixture<BonbonniereComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonbonniereComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonbonniereComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
