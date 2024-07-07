import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ThemeService } from '../../services/theme.service';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import Swal from 'sweetalert2';

@Component({
  selector: 'contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FloatLabelModule,
    InputTextModule,
    ButtonModule,
    InputTextareaModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  themeService = inject(ThemeService);

  Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    showCloseButton: true,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  myForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/),
    ]),
    // prettier-ignore
    phone: new FormControl(null, [Validators.pattern(/^(\+|00)[1-9][0-9 \-\(\)\.]{5,32}$/)]),
    text: new FormControl(null, [Validators.required]),
  });

  onSubmit() {
    this.Toast.fire({
      icon: 'success',
      title: 'Message sent Successfully!',
    });
    this.myForm.reset();
  }
}
