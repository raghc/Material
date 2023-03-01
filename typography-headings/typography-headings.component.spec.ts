import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographyHeadingsComponent } from './typography-headings.component';

describe('TypographyHeadingsComponent', () => {
  let component: TypographyHeadingsComponent;
  let fixture: ComponentFixture<TypographyHeadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypographyHeadingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypographyHeadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
