import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeSearchbarComponent } from './fake-searchbar.component';

describe('FakeSearchbarComponent', () => {
  let component: FakeSearchbarComponent;
  let fixture: ComponentFixture<FakeSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakeSearchbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FakeSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
