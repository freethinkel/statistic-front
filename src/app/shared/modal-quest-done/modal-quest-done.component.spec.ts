import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalQuestDoneComponent } from './modal-quest-done.component';

describe('ModalQuestDoneComponent', () => {
  let component: ModalQuestDoneComponent;
  let fixture: ComponentFixture<ModalQuestDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalQuestDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalQuestDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
