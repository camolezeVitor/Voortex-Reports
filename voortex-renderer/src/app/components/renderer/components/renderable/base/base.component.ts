import { ChangeDetectionStrategy, Component, effect, ElementRef, inject, signal, WritableSignal } from "@angular/core";
import { Element, Size } from "@voortex-modules";
import { RenderableComponent } from "./renderable-component";

@Component({
    selector: "app-base-renderable",
    template: ``,
    changeDetection: ChangeDetectionStrategy.OnPush
}) 
export class RenderableComponentImplementation implements RenderableComponent {

    content: Element | null = null;
    nativeElement: any =  inject(ElementRef).nativeElement;
    size: Size | null = null;
    isAbleForValidation: WritableSignal<boolean> = signal(false);

    constructor() {
        effect(() => {
            if (this.isAbleForValidation()) {
                this.setValidationConditions();
            }
        })
    }

    setValidationConditions() {
        this.content?.setElementDefaultProperties(this.nativeElement);
    }

    setValidationFunction(validationFunction: Function) {
        this.content!.validationFunction = validationFunction;
    }
}