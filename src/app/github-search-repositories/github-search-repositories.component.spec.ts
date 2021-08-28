import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubSearchRepositoriesComponent } from './github-search-repositories.component';

describe('GithubSearchRepositoriesComponent', () => {
  let component: GithubSearchRepositoriesComponent;
  let fixture: ComponentFixture<GithubSearchRepositoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubSearchRepositoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubSearchRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
