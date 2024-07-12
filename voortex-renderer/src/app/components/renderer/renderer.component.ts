import { Component, Input } from "@angular/core";
import { Report } from "@voortex-modules";

@Component({
    selector: "app-renderer",
    templateUrl: "renderer.component.html",
    styleUrl: "renderer.component.css"
})
export class RendererComponent {
    @Input() report!: Report;   
}