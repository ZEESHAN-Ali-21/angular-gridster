
import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  activeNav = 'dashboard';
  showProfileMenu = false;

  navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '▦', path: '/dashboard' },
    { id: 'analytics', label: 'Analytics', icon: '▥', path: '/analytics' },
    { id: 'reports', label: 'Reports', icon: '▤', path: '/reports' },
    { id: 'users', label: 'Users', icon: '♙', path: '/users' },
    { id: 'settings', label: 'Settings', icon: '⚙', path: '/settings' },
    { id: 'help', label: 'Help Center', icon: '?', path: '/help' }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const path = this.router.url.split('?')[0].split('/')[1];
        this.activeNav = path || 'dashboard';
        this.showProfileMenu = false;
      }
    });
  }

  getPageTitle(): string {
    return this.navItems.find(item => item.id === this.activeNav)?.label
      ?? 'Dashboard';
  }

  toggleProfileMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.showProfileMenu = !this.showProfileMenu;
  }

  @HostListener('document:click')
  closeProfileMenu(): void {
    this.showProfileMenu = false;
  }

  viewDetails(): void {
    this.showProfileMenu = false;
    alert('View Details clicked');
  }

  logout(): void {
    this.showProfileMenu = false;

    const confirmed = confirm('Are you sure you want to log out?');

    if (confirmed) {
      alert('Logout logic is not connected yet.');
    }
  }
}
