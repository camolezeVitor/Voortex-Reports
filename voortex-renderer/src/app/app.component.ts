import { ChangeDetectionStrategy, Component, effect, OnInit, signal } from '@angular/core';
import { TEST_REPORT } from "../../../example";
import { RenderableReport } from './elements/report-model';
import { ReportService } from './services/report.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit{
  report = signal<null | RenderableReport>(null);

  constructor(private reportService: ReportService) {

    effect(() => {
      this.report = this.reportService.report;
      console.log(this.report());
    }) 
  }

  ngOnInit(): void {
    this.reportService.report.update(() => new RenderableReport(TEST_REPORT));
    console.log(this.reportService.accessElementByPath("PG[0]"));
  }
}
