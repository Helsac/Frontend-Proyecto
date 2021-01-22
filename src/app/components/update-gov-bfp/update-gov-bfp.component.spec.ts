import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGovBfpComponent } from './update-gov-bfp.component';

describe('UpdateGovBfpComponent', () => {
  let component: UpdateGovBfpComponent;
  let fixture: ComponentFixture<UpdateGovBfpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGovBfpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGovBfpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
