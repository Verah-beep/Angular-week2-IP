import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitsearchComponent } from './gitsearch/gitsearch.component';
import { GitsearchFormComponent } from './gitsearch-form/gitsearch-form.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { RoutingComponent } from './routing/routing.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    GitsearchComponent,
    GitsearchFormComponent,
    RepositoriesComponent,
    RoutingComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
