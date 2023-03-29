import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems = [
    { title: 'Ferhat Osanoglu' },
    { title: 'About' },
    { title: 'Projects' },
    { title: 'Contact' }
  ]
  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    document.documentElement.setAttribute('data-theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
  dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  toggleDarkTheme() {
    this.dark = !this.dark;
    document.documentElement.setAttribute('data-theme', this.dark ? 'dark' : 'light');
    this.cdr.detectChanges()
  }

}
