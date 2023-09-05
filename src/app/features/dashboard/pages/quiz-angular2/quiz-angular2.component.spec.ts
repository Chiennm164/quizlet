import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAngular2Component } from './quiz-angular2.component';

describe('QuizAngular2Component', () => {
  let component: QuizAngular2Component;
  let fixture: ComponentFixture<QuizAngular2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizAngular2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizAngular2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
