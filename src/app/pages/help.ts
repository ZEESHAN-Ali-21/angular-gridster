import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  standalone: true,
  template: `
    <section class="page-container">
      <h1 class="page-title">Help Center</h1>
      <p class="page-description">Find guidance and support for your workspace.</p>
      <div class="empty-page">
        <p>Help and support content will appear here.</p>
      </div>
    </section>
  `
})
export class Help {}
