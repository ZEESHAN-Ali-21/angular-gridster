import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  standalone: true,
  template: `
    <section class="page-container">
      <h1 class="page-title">Reports</h1>
      <p class="page-description">View and manage your workspace reports.</p>
      <div class="empty-page">
        <p>Reports content will appear here.</p>
      </div>
    </section>
  `
})
export class Reports {}
