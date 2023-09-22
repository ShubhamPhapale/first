import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Assignment1Component } from './assignment1/assignment1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

var routes:Routes = [
  {path:'test',loadChildren:() => import('./test/test.module').then(m=> m.TestModule)}
]

@NgModule({
  declarations: [
    AppComponent,
    Assignment1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
