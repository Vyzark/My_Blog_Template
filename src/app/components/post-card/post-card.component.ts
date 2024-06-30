import { Component, inject, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Post } from '../../interfaces/post.interface';
import { ChipModule } from 'primeng/chip';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'post-card',
  standalone: true,
  imports: [CardModule, ButtonModule, ChipModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
})
export class PostCardComponent {
  themeService = inject(ThemeService)

  myPost = input.required<Post>()
}
