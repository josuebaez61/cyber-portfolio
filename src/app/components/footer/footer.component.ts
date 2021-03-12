import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { timingSafeEqual } from 'crypto';
import { ProjectsService } from 'src/app/services/projects.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  electricBlue: string = '#6CF5F4';
  cyberGreen: string = '#DDFC57';
  labelColor: string = '#DDFC57';
  contactForm: FormGroup;
  sendingData: boolean = false;

  get invalidName() {
    return this.contactForm.get('name').invalid && this.contactForm.get('name').touched;
  }
  get invalidEmail() {
    return this.contactForm.get('email').invalid && this.contactForm.get('email').touched;
  }
  get invalidSubject() {
    return this.contactForm.get('subject').invalid && this.contactForm.get('subject').touched;
  }
  get invalidMessage() {
    return this.contactForm.get('message').invalid && this.contactForm.get('message').touched;
  }

  constructor(private fb: FormBuilder, private project: ProjectsService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(1)],],
      message: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  
  ngOnInit(): void {
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.sendingData = true;
      const data = this.contactForm.value;
      this.contactForm.controls['name'].disable();
      this.contactForm.controls['email'].disable();
      this.contactForm.controls['subject'].disable();
      this.contactForm.controls['message'].disable();
      this.project.sendMessage(data)
        .subscribe((res: any) => {
          this.contactForm.setValue({
            name: '',
            email: '',
            subject: '',
            message: '',
          })
          this.sendingData = false;
          this.contactForm.controls['name'].enable();
          this.contactForm.controls['email'].enable();
          this.contactForm.controls['subject'].enable();
          this.contactForm.controls['message'].enable();
        }, (error: any) => {
          this.sendingData = false;
        });
     }
  }
}
