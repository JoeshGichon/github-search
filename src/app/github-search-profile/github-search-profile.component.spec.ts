import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubSearchProfileComponent } from './github-search-profile.component';

describe('GithubSearchProfileComponent', () => {
  let component: GithubSearchProfileComponent;
  let fixture: ComponentFixture<GithubSearchProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubSearchProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubSearchProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
