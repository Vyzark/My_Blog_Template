import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'post-card',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
})
export class PostCardComponent {
  myPost = input.required<Post>()
}
