import { Component, ElementRef, inject, signal, WritableSignal } from "@angular/core";
import { Element, Size } from "@voortex-modules";
import { RenderableComponent } from "./renderable-component";

@Component({
    selector: "app-base-renderable",
    template: ``
}) 
export class RenderableComponentImplementation implements RenderableComponent {

    content: Element | null = null;
    nativeElement: any =  inject(ElementRef).nativeElement;
    size: Size | null = null;
    isAbleForValidation: WritableSignal<boolean> = signal(false);
}