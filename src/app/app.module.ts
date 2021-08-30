import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// my imported modules
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { GithubSearchProfileComponent } from './github-search-profile/github-search-profile.component';
import { GithubSearchProfilePicComponent } from './github-search-profile-pic/github-search-profile-pic.component';
import { GithubSearchProfileDescriptionComponent } from './github-search-profile-description/github-search-profile-description.component';
import { GithubSearchRepositoriesComponent } from './github-search-repositories/github-search-repositories.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubSearchComponent,
    GithubSearchProfileComponent,
    GithubSearchProfilePicComponent,
    GithubSearchProfileDescriptionComponent,
    GithubSearchRepositoriesComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
