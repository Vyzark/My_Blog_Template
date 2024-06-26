import { Component, ViewEncapsulation } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { ButtonModule } from 'primeng/button';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import Swal from 'sweetalert2';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'home',
  standalone: true,
  imports: [ButtonModule, InputGroupModule, PostCardComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  //TODO: Check why validator is not working, anything written in the field will go through
  myForm: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.pattern('/^[^@s]+@[^@s]+.[^@s]+$/'),
    ]),
  });

  ngOnInit() {
    document.body.classList.add('body-bg');
  }

  ngOnDestroy() {
    document.body.classList.remove('body-bg');
  }

  onSubmit() {
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
    }
  }
}
