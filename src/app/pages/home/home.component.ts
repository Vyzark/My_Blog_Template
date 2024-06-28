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

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    ButtonModule,
    InputGroupModule,
    PostCardComponent,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  submitted: boolean = false

  myForm: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'),
    ]),
  });

  ngOnInit() {
    document.body.classList.add('body-bg');
  }

  ngOnDestroy() {
    document.body.classList.remove('body-bg');
  }

  onSubmit() {
    if (this.myForm.value.email === "") {
      this.submitted = false
    } else {
      this.submitted = true
    }
    
    if (this.myForm.valid && this.myForm.value.email !== null && this.myForm.value.email !== "") {
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
}
