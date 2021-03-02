import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginasListComponent } from './paginas-list.component';

describe('PaginasListComponent', () => {
  let component: PaginasListComponent;
  let fixture: ComponentFixture<PaginasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
