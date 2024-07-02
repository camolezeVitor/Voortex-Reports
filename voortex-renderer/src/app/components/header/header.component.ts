import { Component, Input } from "@angular/core";
import { ReportImplementation as Report } from "@voortex-modules";

@Component({
    selector: "app-header",
    templateUrl: "header.component.html",
    styleUrl: "header.component.css" 
})
export class HeaderComponent {
    @Input() report!: Report
}