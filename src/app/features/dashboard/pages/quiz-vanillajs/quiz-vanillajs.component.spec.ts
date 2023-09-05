import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizVanillajsComponent } from './quiz-vanillajs.component';

describe('QuizVanillajsComponent', () => {
  let component: QuizVanillajsComponent;
  let fixture: ComponentFixture<QuizVanillajsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizVanillajsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizVanillajsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
