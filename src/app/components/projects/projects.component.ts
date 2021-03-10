import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: any[] = [];
  responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
  ];


  constructor(private _projects: ProjectsService) {}

  subscription: Subscription;

  ngOnInit(): void {
    this.getProjects();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goToProjectUrl(url: string) {
    window.open(url,'_blank');
  }

  getProjects() {
    this._projects.getProjects().subscribe( (res:any) => {
      this.projects = res.projects;
    });
  }
}
