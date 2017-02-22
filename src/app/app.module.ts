import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipeListComponent} from './recipes/recipe-list/recipe-list.component'

import { CategoryService } from './services/category.service';
import { RecipeHeaderService } from './services/recipe-header.service'

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CategoryService, RecipeHeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
