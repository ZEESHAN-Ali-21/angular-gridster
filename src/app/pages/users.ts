import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  template: `
    <section class="page-container">
      <h1 class="page-title">Users</h1>
      <p class="page-description">Manage users and their workspace access.</p>
      <div class="empty-page">
        <p>User management content will appear here.</p>
      </div>
    </section>
  `
})
export class Users {}
