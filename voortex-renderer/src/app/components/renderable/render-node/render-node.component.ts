import { Component } from "@angular/core";

@Component({
    selector: "R-app-node",
    template: `
    <ng-content />
    `
})
export class RenderNodeComponent {

    constructor() {}
}