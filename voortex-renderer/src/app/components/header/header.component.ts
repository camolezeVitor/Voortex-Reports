import { Component, Input } from "@angular/core";
import { Report } from "@voortex-modules";

@Component({
    selector: "app-header",
    templateUrl: "header.component.html",
    styleUrl: "header.component.css" 
})
export class HeaderComponent {
    @Input() report!: Report;

    public printScreen() {
        let docWindow = window;
        docWindow.print();
    }
}