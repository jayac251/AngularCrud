import { Component, OnInit } from '@angular/core';
import { Student} from './../../model/student.model';
import {DatagridPropertyComparator,ClrDatagridSortOrder} from '@clr/angular';
import {ClrDatagridPagination,ClrDatagrid} from '@clr/angular';

@Component({
  selector: 'app-addmodifyemp',
  templateUrl: './addmodifyemp.component.html',
  styleUrls: ['./addmodifyemp.component.css']
})
export class AddmodifyempComponent implements OnInit {
  addNewPopup=false;
  selected: string[] = [];
  nameSortOrder =ClrDatagridSortOrder.DESC;
  nameComparator = new DatagridPropertyComparator('name');
  idSortOrder =ClrDatagridSortOrder.DESC;
  idComparator = new DatagridPropertyComparator('id');
  students:Student[]=[
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

  constructor() { }

  ngOnInit() {
  }
  
  onAdd() {
    this.addNewPopup =true;
  } 
}
