import { Component, OnInit, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../../services/theme.service';
import { Router, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [MenubarModule, ButtonModule, RouterLinkActive, NgClass],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  themeService = inject(ThemeService);
  router = inject(Router);

  items: MenuItem[] | undefined;
  activeLink: HTMLAnchorElement | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
          this.router.navigateByUrl('/home');
        },
        route: '/home'
      },
      {
        label: 'Posts',
        icon: 'pi pi-folder',
        command: () => {
          this.router.navigateByUrl('/posts');
        },
        route: '/posts'
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        command: () => {
          this.router.navigateByUrl('/contact');
        },
        route: '/contact'
      },
      {
        label: 'Create Post',
        icon: 'pi pi-pen-to-square',
        command: () => {
          this.router.navigateByUrl('/new');
        },
        route: '/new'
      },
    ];
  }
}
