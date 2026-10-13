import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics',
  standalone: true,
  template: `
    <section class="page-container">
      <h1 class="page-title">Analytics</h1>
      <p class="page-description">Explore trends and performance across your workspace.</p>
      <div class="empty-page">
        <p>Analytics content will appear here.</p>
      </div>
    </section>
  `
})
export class Analytics {}
