import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { PostService } from '../../services/post.service';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

type Category = {
  category: string;
  icon: string;
};

@Component({
  selector: 'new-post',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DatePipe,
    EditorModule,
    FloatLabelModule,
    InputTextModule,
    DropdownModule,
    CheckboxModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule
  ],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css',
})

export class NewPostComponent {
  postService = inject(PostService);

  date: Date = new Date()
  categories: Category[] | undefined;

  myForm: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required]),
    author: new FormControl(null, [Validators.required]),
    img_url: new FormControl(null, [Validators.required]),
    category: new FormControl(null, [Validators.required]),
    featured: new FormControl(false, []),
    published_at: new FormControl(this.date, []),
  });

  ngOnInit() {
    this.categories = this.postService.categoryList;
  }

  onSubmit() {
    console.log(this.myForm.value);

    this.postService.create(this.myForm.value)
    this.myForm.reset()
  }
}
