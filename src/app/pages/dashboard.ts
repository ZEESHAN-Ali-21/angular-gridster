import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <section class="page-container">
      <h1 class="page-title">Dashboard</h1>
      <p class="page-description">Your workspace overview.</p>
      <div class="empty-page">
        <p>Dashboard content will appear here.</p>
      </div>
    </section>
  `
})
export class Dashboard {}
