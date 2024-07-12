import { AfterContentInit, Component, Input, Type, ViewChild } from "@angular/core";
import { Element } from "@voortex-modules";

@Component({
    selector: "app-selector",
    template: `
    <ng-container #genContainer />
    `
})
export class SelectorComponent implements AfterContentInit {
    @ViewChild("genContainer") selectedComponent!: Type<any>; 
    @Input() content!: Element; 

    ngAfterContentInit(): void {
        
    }

    getComponentByElementContentId(): Type<any> {
    }

    setSelectedComponentInTheContainer(component: Type<any>) {

    }
}