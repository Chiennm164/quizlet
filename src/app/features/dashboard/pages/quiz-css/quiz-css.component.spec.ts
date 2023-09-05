import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCssComponent } from './quiz-css.component';

describe('QuizCssComponent', () => {
  let component: QuizCssComponent;
  let fixture: ComponentFixture<QuizCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizCssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
