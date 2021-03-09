import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get('https://us-central1-my-portfolio-bc108.cloudfunctions.net/getProjects', { headers: {'accept':'*/*'}});
  }
}
