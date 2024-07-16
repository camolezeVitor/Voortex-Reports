import { AfterContentInit, Component } from "@angular/core";
import { RenderableComponentImplementation } from "../base/base.component";

@Component({
    selector: "app-paragraph",
    templateUrl: "paragraph.component.html"
})
export class ParagraphComponent extends RenderableComponentImplementation implements AfterContentInit {

    shownText: string | null = null;

    ngAfterContentInit(): void {
        this.shownText = this.content?.content as string;
        this.validateParagraph();
    }

    validateParagraph() {
        this.content?.setElementDefaultProperties(this.nativeElement)
    }
}