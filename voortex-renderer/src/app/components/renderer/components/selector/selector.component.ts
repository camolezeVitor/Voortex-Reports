import { AfterViewInit, Component, Input, Type, ViewChild, ViewContainerRef } from "@angular/core";
import { Element } from "@voortex-modules";
import { VoortexComponentsMap } from "../components-map";


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
        this.setSelectedComponentInTheContainer(component);   
    }

    getComponentByElementContentId(element: Element): Type<any> {
        return VoortexComponentsMap.get(element.id)!;
    }

    setSelectedComponentInTheContainer(component: Type<any>) {
        this.containerUsedForHostingComponent.createComponent(component);
    }
}