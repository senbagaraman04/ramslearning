import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../core/http-service.service';

export interface courseListData {
  id: string;
  price: string;
  thumbnailURL: string;
  title: string;
  videoLink: string[];
}


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.less']
})


export class CourseListComponent implements OnInit {

  constructor(private httpService: HttpServiceService) { }

  private backendURL = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/courses26269ff.json';
  public courseData: courseListData;

  ngOnInit(): void {
    this.httpService.courseData(this.backendURL).subscribe(clist => {
      this.courseData = clist;
    });
  }

}
