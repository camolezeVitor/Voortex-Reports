import { Component, ElementRef } from "@angular/core";

@Component({
    selector: "RB",
    template: ""
})
export class RenderableBase {
    constructor(public elRef: ElementRef) {}
}