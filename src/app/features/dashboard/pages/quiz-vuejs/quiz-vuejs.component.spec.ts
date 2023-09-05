import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizVuejsComponent } from './quiz-vuejs.component';

describe('QuizVuejsComponent', () => {
  let component: QuizVuejsComponent;
  let fixture: ComponentFixture<QuizVuejsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizVuejsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizVuejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
