import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubSearchProfileDescriptionComponent } from './github-search-profile-description.component';

describe('GithubSearchProfileDescriptionComponent', () => {
  let component: GithubSearchProfileDescriptionComponent;
  let fixture: ComponentFixture<GithubSearchProfileDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubSearchProfileDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubSearchProfileDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
