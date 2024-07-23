import { PageImplementation, ParagraphImplementation, ReportElement } from "@voortex-modules";
import { RenderableReportElement } from "../base/renderable-element-protocol";
import { RenderablePage } from "../page-model";
import { RenderableParagraph } from "../paragraph-model";
import { RenderableReport } from "../report-model";

export class ReportElementFactory {

    static convertToRenderable(element: ReportElement, fatherElement: RenderableReportElement | RenderableReport, path: string) {
        switch(element.id) {
            case "PG": 
                return new RenderablePage(element as PageImplementation, fatherElement as RenderableReport, path);
            case "PA":
                return new RenderableParagraph(element as ParagraphImplementation, fatherElement as RenderableReportElement, path);
            default: 
                throw Error("Class not implemented in renderer!!");
        }
    }
}