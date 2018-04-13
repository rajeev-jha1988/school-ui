import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {StudentDto} from "../../model/student/student.model";

import { environment } from '../../../../environments/environment';
import {AppConstant} from '../../constant/school.constant';
import { Observable } from 'rxjs/Observable';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class studentService{

constructor(private httpClient:HttpClient){}


public  getAllStudents():Observable<any> {
    return this.httpClient.get(environment.apiUrl+AppConstant.getAllStudentURL);
  }

 
  public createStudent(studentDto:StudentDto) {
    return this.httpClient.put(environment.apiUrl+AppConstant.createStudent, studentDto);
  }

}