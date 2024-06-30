import { Component, inject, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Post } from '../../interfaces/post.interface';
import { ChipModule } from 'primeng/chip';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'post-card2',
  standalone: true,
  imports: [CardModule, ButtonModule, ChipModule],
  templateUrl: './post-card2.component.html',
  styleUrl: './post-card2.component.css',
})
export class PostCard2Component {
  themeService = inject(ThemeService);

  myPost2 = input.required<Post>()
}
