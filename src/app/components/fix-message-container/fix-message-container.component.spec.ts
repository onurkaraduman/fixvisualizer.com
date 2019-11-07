import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixMessageContainerComponent } from './fix-message-container.component';

describe('FixMessageContainerComponent', () => {
  let component: FixMessageContainerComponent;
  let fixture: ComponentFixture<FixMessageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixMessageContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixMessageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
