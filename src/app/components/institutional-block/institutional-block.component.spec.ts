import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalBlockComponent } from './institutional-block.component';

describe('InstitutionalBlockComponent', () => {
  let component: InstitutionalBlockComponent;
  let fixture: ComponentFixture<InstitutionalBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionalBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionalBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
