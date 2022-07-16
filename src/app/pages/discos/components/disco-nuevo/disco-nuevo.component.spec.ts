import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoNuevoComponent } from './disco-nuevo.component';

describe('DiscoNuevoComponent', () => {
  let component: DiscoNuevoComponent;
  let fixture: ComponentFixture<DiscoNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoNuevoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
