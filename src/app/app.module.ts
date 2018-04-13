
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {CdkTableModule} from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
}  from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import 'hammerjs';


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { StudentComponentComponent,DialogEditStudent } from './component/student-component/student-component.component';
import { AppRoutingModule } from './app.routing.module';

import {studentService} from './shared/service/studentservice/student.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DialogEditStudent,
    StudentComponentComponent
  ],
  imports: [
    BrowserModule,
    CdkTableModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [studentService],
  entryComponents: [DialogEditStudent],
  bootstrap: [AppComponent]

})
export class AppModule { }
