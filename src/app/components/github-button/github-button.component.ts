import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { GithubUser } from '../../interfaces/Github';

@Component({
  selector: 'app-github-button',
  templateUrl: './github-button.component.html',
  styleUrls: ['./github-button.component.scss']
})
export class GithubButtonComponent implements OnInit {

  githubUser: GithubUser;

  constructor(private github: GithubService) { }

  ngOnInit(): void {
    this.github.getGithubUser().subscribe((res) => {
      this.githubUser = res;
    })
  }

  openGithub( url:string ) {
    if ( url ) {
      window.open(url, "_blank");
    }
  }

}
