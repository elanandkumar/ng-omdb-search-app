import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieService } from './movie.service';
import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';
import { SearchResultsComponent } from './searchResults.component';

const routes: Routes = [
  {
    path: '', component: SearchComponent
  },
  {
    path: 'search-results', component: SearchResultsComponent
  },
  {
    path: 'search-results/:title/:year', component: SearchResultsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
