import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  displayIcons:boolean = false;
  jello_animation:boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.jello_animation = true;
    },300)
  }

}
