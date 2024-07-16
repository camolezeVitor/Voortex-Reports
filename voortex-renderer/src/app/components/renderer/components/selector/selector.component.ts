import { AfterViewInit, Component, ComponentRef, ElementRef, inject, Input, Type, ViewChild, ViewContainerRef } from "@angular/core";
import { Element, StyledElement } from "@voortex-modules";
import { StylerService } from "../../services/styler.service";
import { VoortexComponentsMap } from "../components-map";
import { RenderableComponentImplementation } from "../renderable/base/base.component";
import { RenderableComponent } from "../renderable/base/renderable-component";


@Component({
    selector: "app-selector",
    template: `
    <ng-container #genContainer />
    `
})
export class SelectorComponent implements AfterViewInit {
    @ViewChild("genContainer", {read: ViewContainerRef}) containerUsedForHostingComponent!: ViewContainerRef; 
    @Input() content!: Element | any; 
    private stylerService: StylerService = inject(StylerService);
    private elRef: ElementRef = inject(ElementRef);

    async ngAfterViewInit(): Promise<void> {
        this.renderComponentByContent(this.content);
    }

    async renderComponentByContent(content: Element): Promise<void> {
        const component: Type<any> = this.getComponentByElementContentId(content);
        const renderedComponentRef = this.setSelectedComponentInTheContainer(component);
        this.setContentInComponentContent(renderedComponentRef, content);
        await this.setStyleInComponentInstance(renderedComponentRef, content);
        this.setComponentInstanceSizeForValidation(renderedComponentRef, this.elRef);
        this.setComponentInstanceAbleForValidation(renderedComponentRef);
    }

    getComponentByElementContentId(element: Element): Type<any> {
        return VoortexComponentsMap.get(element.id)!;
    }

    setSelectedComponentInTheContainer(component: Type<any>) {
        return this.containerUsedForHostingComponent.createComponent(component);
    }

    setContentInComponentContent({instance}: ComponentRef<RenderableComponent>, content: Element) {
        instance.content = content;
    }

    async setStyleInComponentInstance({instance}: ComponentRef<RenderableComponentImplementation>, content: Element) {
        const styles = (content as StyledElement).style
        this.stylerService.styleComponent(instance, styles);
    }

    setComponentInstanceSizeForValidation({instance}: ComponentRef<RenderableComponentImplementation>, {nativeElement}: ElementRef) {
        const { offsetWidth, offsetHeight } = nativeElement;
        instance.size = { xSize: offsetWidth, ySize: offsetHeight };
    }
    
    setComponentInstanceAbleForValidation({instance}: ComponentRef<RenderableComponentImplementation>) {
        instance.isAbleForValidation.update(() => true);
    }
}