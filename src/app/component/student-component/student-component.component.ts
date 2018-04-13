
import { Component, OnInit,Inject } from '@angular/core';
import {StudentDto} from "../../shared/model/student/student.model";
import {studentService} from "../../shared/service/studentservice/student.service";
import { Observable } from 'rxjs/Observable';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css']
})
export class StudentComponentComponent implements OnInit {
  studentDtos:StudentDto[];
  constructor(private studentService:studentService,private dialog:MatDialog) { }

  ngOnInit() {
    this.studentService.getAllStudents().subscribe(data=> {
        this.studentDtos=data;
      });
  }

  openStudentDailog(studentDto:StudentDto): void {
    let dialogRef = this.dialog.open(DialogEditStudent, {
      height: '400px',
      width: '600px',
      data: { fname: studentDto.fname, lastname: studentDto.lastname,dob:new Date(studentDto.dob),
        doj:new Date(studentDto.doj),session:studentDto.session,phone:studentDto.phone}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'student-edit-dialog.html',
})
export class DialogEditStudent {

  constructor(
    public dialogRef: MatDialogRef<DialogEditStudent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
