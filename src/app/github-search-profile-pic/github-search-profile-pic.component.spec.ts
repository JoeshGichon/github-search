import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubSearchProfilePicComponent } from './github-search-profile-pic.component';

describe('GithubSearchProfilePicComponent', () => {
  let component: GithubSearchProfilePicComponent;
  let fixture: ComponentFixture<GithubSearchProfilePicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubSearchProfilePicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubSearchProfilePicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
