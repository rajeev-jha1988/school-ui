import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { StudentComponentComponent } from './component/student-component/student-component.component';
const routes: Routes = [
  { path: 'students', component: StudentComponentComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
