import { Component } from "@angular/core";
import { RenderableReport } from "../../elements/report-model";

@Component({
    selector: "app-header",
    templateUrl: "header.component.html",
    styleUrl: "header.component.css" 
})
export class HeaderComponent {
    report!: RenderableReport;

    public printScreen() {
        let docWindow = window;
        docWindow.print();
    }
}