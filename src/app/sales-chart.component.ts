import { Component } from '@angular/core';

@Component({
  selector: 'app-sales-chart',
  standalone: true,
  template: `
    <div class="chart-panel">
      <div class="chart-bars" aria-label="Sales chart">
        <span class="bar" style="height: 35%"></span>
        <span class="bar" style="height: 55%"></span>
        <span class="bar" style="height: 48%"></span>
        <span class="bar" style="height: 72%"></span>
        <span class="bar" style="height: 85%"></span>
        <span class="bar" style="height: 66%"></span>
      </div>
      <div class="chart-legend">
        <span>Revenue</span>
        <strong>$48.2K</strong>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }

      .chart-panel {
        display: flex;
        flex-direction: column;
        gap: 12px;
        height: 100%;
        justify-content: center;
      }

      .chart-bars {
        display: flex;
        align-items: end;
        gap: 10px;
        height: 120px;
      }

      .bar {
        flex: 1;
        display: block;
        background: linear-gradient(180deg, #4f9cf9 0%, #2f6eea 100%);
        border-radius: 6px 6px 0 0;
        min-height: 18px;
      }

      .chart-legend {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #495057;
        font-size: 0.85rem;
      }
    `
  ]
})
export class SalesChartComponent {}
