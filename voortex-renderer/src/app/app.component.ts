import { Component, OnInit } from '@angular/core';
import { ReportImplementation } from '@voortex-modules';
import { TEST_REPORT } from "../../../example";
import { RenderableReport } from './elements/report-model';
import { ReportService } from './services/report.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit{
  public report!: ReportImplementation;
  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.reportService.report.update(() => new RenderableReport(TEST_REPORT));
  }
}
