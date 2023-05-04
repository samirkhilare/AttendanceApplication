import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpHomeComponent } from './emp-home/emp-home.component';
import { EmpAttendanceComponent } from './emp-attendance/emp-attendance.component';

const routes: Routes = [
  {path:'empHome',component:EmpHomeComponent},
  {path:'empAttendance',component:EmpAttendanceComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
