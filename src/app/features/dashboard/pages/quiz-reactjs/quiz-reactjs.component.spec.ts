import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizReactjsComponent } from './quiz-reactjs.component';

describe('QuizReactjsComponent', () => {
  let component: QuizReactjsComponent;
  let fixture: ComponentFixture<QuizReactjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizReactjsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizReactjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
