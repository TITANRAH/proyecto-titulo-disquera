import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoListComponent } from './disco-list.component';

describe('DiscoListComponent', () => {
  let component: DiscoListComponent;
  let fixture: ComponentFixture<DiscoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
