import { Component, effect, WritableSignal } from "@angular/core";
import { RenderableReport } from "../../elements/report-model";
import { ReportService } from "../../services/report.service";

@Component({
    selector: "app-header",
    templateUrl: "header.component.html",
    styleUrl: "header.component.css" 
})
export class HeaderComponent {
    report!: WritableSignal<RenderableReport | null>;
    renderReport!: RenderableReport;

    constructor(private reportService: ReportService) {
        effect(() => {
            this.report = reportService.report;
            if (this.report() != null) {
                this.renderReport = this.report()!;
            }
        })
    }

    public printScreen() {
        let docWindow = window;
        docWindow.print();
    }
}