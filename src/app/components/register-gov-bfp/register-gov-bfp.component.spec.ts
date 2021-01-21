import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGovBfpComponent } from './register-gov-bfp.component';

describe('RegisterGovBfpComponent', () => {
  let component: RegisterGovBfpComponent;
  let fixture: ComponentFixture<RegisterGovBfpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterGovBfpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterGovBfpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
