import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecodingComponent } from './decoding/decoding.component';
import { DescriptionComponent } from './description/description.component';
import { SomeCodeComponent } from './some-code/some-code.component';
import { GithubButtonComponent } from './github-button/github-button.component';
import { SkillsComponent } from './skills/skills.component';



@NgModule({
  declarations: [
    DecodingComponent,
    DescriptionComponent,
    SomeCodeComponent,
    GithubButtonComponent,
    SkillsComponent
  ],
  exports: [
    DecodingComponent,
    DescriptionComponent,
    SomeCodeComponent,
    GithubButtonComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
