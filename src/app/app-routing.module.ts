import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubSearchComponent } from './github-search/github-search.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"github-search",component:GithubSearchComponent},
  {path:"home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
