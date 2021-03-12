import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecodingComponent } from './decoding/decoding.component';
import { DescriptionComponent } from './description/description.component';
import { SomeCodeComponent } from './some-code/some-code.component';
import { GithubButtonComponent } from './github-button/github-button.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';



@NgModule({
  declarations: [
    DecodingComponent,
    DescriptionComponent,
    SomeCodeComponent,
    GithubButtonComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent
  ],
  exports: [
    DecodingComponent,
    DescriptionComponent,
    SomeCodeComponent,
    GithubButtonComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    ReactiveFormsModule,
    RecaptchaModule
  ]
})
export class ComponentsModule { }
