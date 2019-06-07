import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoSalvarComponent } from './contato-salvar.component';

describe('ContatoSalvarComponent', () => {
  let component: ContatoSalvarComponent;
  let fixture: ComponentFixture<ContatoSalvarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoSalvarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoSalvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
