import { ReportElementState } from "../../states/report-element.state";
import { ElementSpecs } from "./specs-type";

export interface RenderableReportElement {
    renderedElementUuid: string;
    elementState: ReportElementState;
    elementSpecs: ElementSpecs;
    id: string;
    styles?: Partial<CSSStyleDeclaration>;
    content?: any;
}