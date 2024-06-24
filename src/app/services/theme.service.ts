import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDark: boolean = false;

  //TODO: Clarify how document injection works inside the constructor
  private constructor(@Inject(DOCUMENT) private document: Document) {}

  changeMode() {
    let indexLink = this.document.getElementById("app-theme") as HTMLLinkElement;

    this.isDark = !this.isDark;
    if (this.isDark) {
      indexLink.href = "lara-dark-purple.css"
    } else {
      indexLink.href = "lara-light-purple.css"
    }
  }
}
