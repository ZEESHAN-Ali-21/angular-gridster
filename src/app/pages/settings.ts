import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  template: `
    <section class="page-container">
      <h1 class="page-title">Settings</h1>
      <p class="page-description">Manage your workspace preferences.</p>
      <div class="empty-page">
        <p>Settings content will appear here.</p>
      </div>
    </section>
  `
})
export class Settings {}
