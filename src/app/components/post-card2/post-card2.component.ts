import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'post-card2',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './post-card2.component.html',
  styleUrl: './post-card2.component.css',
})
export class PostCard2Component {
  myPost2 = input.required<Post>()
}
