import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import { DividerModule } from 'primeng/divider';
import { PostCard2Component } from '../../components/post-card2/post-card2.component';
import { Post } from '../../interfaces/post.interface';
import { PostService } from '../../services/post.service';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { NgClass } from '@angular/common';

@Component({
  selector: 'post-list',
  standalone: true,
  imports: [
    PostCardComponent,
    PostCard2Component,
    DividerModule,
    ButtonModule,
    ButtonGroupModule,
    NgClass
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  postService = inject(PostService);

  postList: Post[] = [];

  ngOnInit() {
    this.postList = this.postService.getAll();
    console.log(this.postList[0].content);
    
  }

  filterList(cat: string) {
    if (cat === 'all') {
      this.postList = this.postService.getAll();
    } else {
      this.postList = this.postService.getByCategory(cat);
    }
  }
}
