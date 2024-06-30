import { Component, ViewEncapsulation } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { ButtonModule } from 'primeng/button';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import Swal from 'sweetalert2';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CardModule } from 'primeng/card';
import { PostCard2Component } from '../../components/post-card2/post-card2.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    ButtonModule,
    InputGroupModule,
    PostCardComponent,
    PostCard2Component,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  submitted: boolean = false;
  //TODO: TEST NEW EMAIL VALIDATOR: /(?<username>[\w\.-]+)@(?<domain>[\w\.-]+)\.(?<tld>[a-zA-Z]{2,6})/

  myForm: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'),
    ]),
  });
  Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    showCloseButton: true,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  ngOnInit() {
    document.body.classList.add('body-bg');
  }

  ngOnDestroy() {
    document.body.classList.remove('body-bg');
  }

  onSubmit() {
    this.submitted = this.myForm.value.email === '' ? false : true;

    if (
      this.myForm.valid &&
      this.myForm.value.email !== null &&
      this.myForm.value.email !== ''
    ) {
      try {
        // Store subscription info in Local Storage
        localStorage.setItem('subscribedEmail', this.myForm.value.email);
        Swal.fire({
          title: 'Subscribed!',
          text: 'Thank you for your subscription.',
          icon: 'success',
          backdrop: false,
        });
      } catch (error) {
        console.log(error);

        this.Toast.fire({
          icon: 'error',
          title: 'Error',
          text: 'Please, reload the page and try again.',
        });
      }
    }
  }
}
