import { Component, OnInit, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../../services/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [MenubarModule, ButtonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  themeService = inject(ThemeService)
  router = inject(Router)


  items: MenuItem[] | undefined;


  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
          //TODO: ADD PATH
          this.router.navigateByUrl("");
      }
      },
      {
        label: 'Posts',
        icon: 'pi pi-star',
        command: () => {
          //TODO: ADD PATH
          this.router.navigateByUrl("");
      }
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        command: () => {
          //TODO: ADD PATH
          this.router.navigateByUrl("");
      }
      },
      {
        label: 'Create Post',
        icon: 'pi pi-pen-to-square',
        command: () => {
          //TODO: ADD PATH
          this.router.navigateByUrl("");
      }
      },
    ];
  }

}
