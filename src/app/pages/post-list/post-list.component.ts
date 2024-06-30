import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import { DividerModule } from 'primeng/divider';
import { PostCard2Component } from '../../components/post-card2/post-card2.component';

@Component({
  selector: 'post-list',
  standalone: true,
  imports: [
    PostCardComponent,
    PostCard2Component,
    DividerModule,
    CardModule,
    ButtonModule,
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  // postList: Post = []
}
