import { Injectable } from '@angular/core';
import { Student } from '../model/student.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService
{
  constructor(private httpClient: HttpClient) {
  }
   private liststudents:Student[]=[
        { id:1, name: 'Supraja', passport: 'xyz', isactive: 'Y', status: 'approved', history_id: 0 },
        { id:2, name: 'girisha', passport: 'abc', isactive: 'Y', status: 'approved', history_id: 0 },
        { id:3, name: 'Chandra', passport: 'abc', isactive: 'Y', status: 'approved', history_id: 0 },
        { id:4, name: 'Suresh', passport: 'abc', isactive: 'Y', status: 'approved', history_id: 0 },
        { id:5, name: 'Lalitha', passport: 'abc', isactive: 'Y', status: 'approved', history_id: 0 },
        { id:6, name: 'Ram', passport: 'abc', isactive: 'Y', status: 'approved', history_id: 0 },
        { id:7, name: 'Latha', passport: 'abc', isactive: 'Y', status: 'approved', history_id: 0 },
        { id:8, name: 'Vijay', passport: 'abc', isactive: 'Y', status: 'approved', history_id: 0 },
        { id:9, name: 'Adhira', passport: 'abc', isactive: 'Y', status: 'approved', history_id: 0 },
        { id:10, name: 'Ashwin', passport: 'abc', isactive: 'Y', status: 'approved', history_id: 0 }
      ];

      getStudents(): Student[] {
        return this.liststudents;
      }

      getStudentsList(): Observable<Student[]> {
        return this.httpClient.get<Student[]>('http://localhost:8080/students');
    }

      save(student: Student) {
        this.liststudents.push(student);
        console.log(student.name);
        
    } 
}
