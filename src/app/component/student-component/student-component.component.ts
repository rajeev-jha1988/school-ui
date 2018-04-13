
import { Component, OnInit } from '@angular/core';
import {StudentDto} from "../../shared/model/student/student.model";
import {studentService} from "../../shared/service/studentservice/student.service";
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css']
})
export class StudentComponentComponent implements OnInit {
  studentDtos:StudentDto[];
  constructor(private studentService:studentService) { }

  ngOnInit() {
    this.studentService.getAllStudents().subscribe(data=> {
        this.studentDtos=data;
      });
  }

  
}
