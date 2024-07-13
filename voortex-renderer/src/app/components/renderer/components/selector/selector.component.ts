import { AfterViewInit, Component, ComponentRef, Input, Type, ViewChild, ViewContainerRef } from "@angular/core";
import { Element } from "@voortex-modules";
import { VoortexComponentsMap } from "../components-map";
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

    ngAfterViewInit(): void {
        this.renderComponentByContent(this.content);
    }

    renderComponentByContent(content: Element) {
        const component: Type<any> = this.getComponentByElementContentId(content);
        const renderedComponentRef = this.setSelectedComponentInTheContainer(component);
        this.setContentInComponentContent(renderedComponentRef, content);
    }

    getComponentByElementContentId(element: Element): Type<any> {
        return VoortexComponentsMap.get(element.id)!;
    }

    setSelectedComponentInTheContainer(component: Type<any>) {
        return this.containerUsedForHostingComponent.createComponent(component);
    }

    setContentInComponentContent({instance}: ComponentRef<RenderableComponent>, content: Element) {
        instance.content = content;
        console.log(instance);
    }


}