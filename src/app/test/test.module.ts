import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home1Component } from '../home1/home1.component';
import { Routes, RouterModule } from '@angular/router';
import { Home2Component } from '../home2/home2.component';

var routes:Routes = [
  {path:"home1", component:Home1Component},
  {path:"home2", component:Home2Component},
  {path:"", redirectTo:'home1', pathMatch:'full'}
]

@NgModule({
  declarations: [
    Home1Component,
    Home2Component
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class TestModule { }
