import { AfterViewInit, Component, ComponentRef, inject, Input, Type, ViewChild, ViewContainerRef } from "@angular/core";
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
    @Input() content!: Element; 
    private stylerService: StylerService = inject(StylerService);

    ngAfterViewInit(): void {
        this.renderComponentByContent(this.content);
    }

    renderComponentByContent(content: Element) {
        const component: Type<any> = this.getComponentByElementContentId(content);
        const renderedComponentRef = this.setSelectedComponentInTheContainer(component);
        this.setContentInComponentContent(renderedComponentRef, content);
        this.setStyleInComponentInstance(renderedComponentRef, content)
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

    setStyleInComponentInstance({instance}: ComponentRef<RenderableComponentImplementation>, content: Element) {
        const styles = (content as StyledElement).style
        if (styles) {
            this.stylerService.styleComponent(instance, styles);
        }
    }
}