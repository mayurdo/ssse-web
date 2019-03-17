import { Component, OnInit } from '@angular/core';
import { CompletedProjectConfig } from './completed-project-config';


@Component({
  selector: 'app-completed-project',
  templateUrl: './completed-project.component.html',
  styleUrls: ['./completed-project.component.css']
})
export class CompletedProjectComponent implements OnInit {

  constructor() { }

  projects: any[];
  selProject: any;
  sliderOPT: any;

  ngOnInit() {
    this.projects = CompletedProjectConfig.getCompletedProjects();
    this.selProject = this.projects[0];

    this.sliderOPT = {
      responsiveClass: true,
      nav: true,
      dots:false,
      responsive: {
        '100': {
          items: 1
        },
        '768': {
          items: 3
        },
        '980': {
          items: 4
        }
      }
    }
  }

}
