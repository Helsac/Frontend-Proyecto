import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGovBfpComponent } from './delete-gov-bfp.component';

describe('DeleteGovBfpComponent', () => {
  let component: DeleteGovBfpComponent;
  let fixture: ComponentFixture<DeleteGovBfpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteGovBfpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGovBfpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
