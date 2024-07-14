import { AfterContentInit, Component } from "@angular/core";
import { Size } from "@voortex-modules";
import { RenderableComponentImplementation } from "../base/base.component";
import { getPageSize } from "./utils/page-size";

@Component({
    selector: "app-page-component",
    templateUrl: "page.component.html",
    styleUrl: "page.component.css"
})
export class PageComponent extends RenderableComponentImplementation implements AfterContentInit {
    
    ngAfterContentInit(): void {
        this.setPageSize();
    }

    setPageSize() {
        let pageSize: string = (this.content as any).pageSize;

        if (pageSize) { 
            let size: Size = getPageSize(pageSize);
            this.nativeElement['style']['width'] = String(size.xSize).concat("mm");
            this.nativeElement['style']['height'] = String(size.ySize).concat("mm");
        }
    }
}