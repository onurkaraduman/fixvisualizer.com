import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixMessageAccordionComponent } from './fix-message-accordion.component';

describe('FixMessageAccordionComponent', () => {
  let component: FixMessageAccordionComponent;
  let fixture: ComponentFixture<FixMessageAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixMessageAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixMessageAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
