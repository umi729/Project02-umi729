import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Searchbar2Component } from './searchbar2.component';

describe('Searchbar2Component', () => {
  let component: Searchbar2Component;
  let fixture: ComponentFixture<Searchbar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Searchbar2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Searchbar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
