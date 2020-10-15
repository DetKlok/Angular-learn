import { Component, OnInit } from '@angular/core';
import { ICourseData } from './course-item-data-interface';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  courseItemData: ICourseData;

  constructor() {
    this.courseItemData = {
      id: 1,
      title: 'Video Course 1. Name tag',
      creationDate: '1h 28min',
      duration: '08/28/2020',
      description: 'Lorem ipsum'
    };
  }

  ngOnInit(): void {
  }

}
