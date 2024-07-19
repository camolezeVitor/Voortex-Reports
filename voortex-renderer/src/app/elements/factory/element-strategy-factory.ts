import { PageImplementation, ParagraphImplementation, ReportElement } from "@voortex-modules";
import { RenderablePage } from "../page-model";
import { RenderableParagraph } from "../paragraph-model";

export class ReportElementFactory {

    static convertToRenderable(element: ReportElement) {
        switch(element.id) {
            case "PG": 
                return new RenderablePage(element as PageImplementation);
            case "PA":
                return new RenderableParagraph(element as ParagraphImplementation);
            default: 
                throw Error("Class not implemented in renderer!!");
        }
    }
}