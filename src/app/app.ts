import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Gridster, GridsterConfig, GridsterItem, type GridsterItemConfig } from 'angular-gridster2';
import { SalesChartComponent } from './sales-chart.component';

interface DashboardItem extends GridsterItemConfig {
  title: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Gridster, GridsterItem, SalesChartComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  title = 'angular-gridster-demo';

  public options: GridsterConfig = {
    gridType: 'fit',
    compactType: 'none',
    draggable: { enabled: true },
    resizable: { enabled: true },
    minCols: 6,
    maxCols: 6,
    minRows: 6,
    maxRows: 6,
    displayGrid: 'always'
  };

  public dashboard: DashboardItem[] = [
    { cols: 2, rows: 2, y: 0, x: 0, title: 'Revenue Chart Overview' },
    { cols: 2, rows: 2, y: 0, x: 2, title: 'Widget 1' },
    { cols: 2, rows: 2, y: 2, x: 0, title: 'Widget 2' }
  ];
}
