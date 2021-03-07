import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GithubUser } from '../interfaces/Github';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private base_url: string = "https://api.github.com";
  constructor(private http: HttpClient) { }

  getGithubUser():Observable<GithubUser> {
    return this.http.get<GithubUser>(`${ this.base_url }/users/josuebaez61`);
  }

  getRepos() {
    return this.http.get(`${ this.base_url }/users/josuebaez61/repos`);
  }
}
