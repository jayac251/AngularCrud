import { Component, OnInit } from '@angular/core';
import { Student} from './../../model/student.model';
import {DatagridPropertyComparator,ClrDatagridSortOrder,} from '@clr/angular';
import {ClrDatagridPagination,ClrDatagrid} from '@clr/angular';
import {StudentService} from '../../service/student.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-addmodifystud',
  templateUrl: './addmodifystud.component.html',
  styleUrls: ['./addmodifystud.component.css']
})
export class AddmodifystudComponent implements OnInit {
  addNewPopup=false;
  selected: string[] = [];
 idSortOrder =ClrDatagridSortOrder.ASC;
  idComparator = new DatagridPropertyComparator('id');

  nameSortOrder =ClrDatagridSortOrder.ASC;
  nameComparator = new DatagridPropertyComparator('name');
  maxid:number;
  //students: Student[];
  students:Observable<Student[]>;
  student: Student={id:null,name:null,passport:null,isactive:null,history_id:null,status:null};
  constructor(private _studentService: StudentService) {}
 

  ngOnInit() {
    this.students = this._studentService.getStudentsList();
    this.maxid=this.students.length+1;
  }
  saveStudent(student: Student): void {
    this.student.id=this.maxid;
    this._studentService.save(this.student);
    console.log(student.name);
    //this._router.navigate(['AddModify']);
  }
}
