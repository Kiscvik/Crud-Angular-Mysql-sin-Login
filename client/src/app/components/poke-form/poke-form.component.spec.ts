import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeFormComponent } from './poke-form.component';

describe('PokeFormComponent', () => {
  let component: PokeFormComponent;
  let fixture: ComponentFixture<PokeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
