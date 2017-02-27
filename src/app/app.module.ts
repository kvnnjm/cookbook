import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { RecipeListComponent} from './recipes/recipe-list/recipe-list.component'
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component'
import { RecipeSearchComponent } from './recipes/recipe-search/recipe-search.component'

import { CategoryService } from './services/category.service';
import { RecipeHeaderService } from './services/recipe-header.service';
import { RecipeService } from './services/recipe.service'
import { RecipeSearchService}  from "./services/recipe-search.service";

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [CategoryService, RecipeHeaderService, RecipeService, RecipeSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
