import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmpHomeComponent } from './emp-home/emp-home.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';

import { EmpAttendanceComponent } from './emp-attendance/emp-attendance.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmpHomeComponent,

    EmpAttendanceComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
     ButtonModule,
     TableModule,
     ReactiveFormsModule,

  ]
})
export class EmployeeModule { }
