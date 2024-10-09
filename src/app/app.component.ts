import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee, faHome, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Menu inicial';
  subTitle = 'Menu';
  showWelcomeText = true;
  faCoffee = faCoffee;
  faHome = faHome;
  faUser = faUser;
  faSearch = faSearch;

  constructor(private router: Router) {}

  ngOnInit() {
    // monitora mudanças de rota
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // verifica a rota atual, se for a rota inicial ("/"), exibe o texto
        this.showWelcomeText = (event.url === '/');
      }
    });
  }
}