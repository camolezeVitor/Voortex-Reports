import { AfterContentInit, Component } from "@angular/core";
import { RenderableComponentImplementation } from "../base/base.component";

@Component({
    selector: "app-page-component",
    templateUrl: "page.component.html",
    styleUrl: "page.component.css"
})
export class PageComponent extends RenderableComponentImplementation implements AfterContentInit {
    
    ngAfterContentInit(): void {
        console.log(this);    
    }
}