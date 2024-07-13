import { Component, ElementRef, inject } from "@angular/core";
import { Element } from "@voortex-modules";
import { RenderableComponent } from "./renderable-component";

@Component({
    selector: "app-base-renderable",
    template: ``
}) 
export class RenderableComponentImplementation implements RenderableComponent {

    content: Element | null = null;
    nativeElement: any =  inject(ElementRef).nativeElement;
    
}