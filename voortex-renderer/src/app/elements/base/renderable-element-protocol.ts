import { ReportElementState } from "../../states/report-element.state";
import { RenderableReport } from "../report-model";
import { ElementSpecs } from "./specs-type";

export interface RenderableReportElement {
    renderedElementUuid: string;
    elementState: ReportElementState;
    elementSpecs: ElementSpecs;
    id: string;
    styles?: Partial<CSSStyleDeclaration>;
    content?: any;
    fatherElement: RenderableReportElement | RenderableReport;
    path: string;
}