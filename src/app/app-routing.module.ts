import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubSearchProfileComponent } from './github-search-profile/github-search-profile.component';
import { GithubSearchRepositoriesComponent } from './github-search-repositories/github-search-repositories.component';

const routes: Routes = [
  {path:"github-search-profile",component:GithubSearchProfileComponent},
  {path:"github-search-repositories",component:GithubSearchRepositoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
