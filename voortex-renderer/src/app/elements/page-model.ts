import { PageImplementation, PageSize } from "@voortex-modules";
import { ReportElementState } from "../states/report-element.state";
import { RenderableReportElement } from "./base/renderable-element-protocol";
import { ElementSpecs } from "./base/specs-type";
import { ReportElementFactory } from "./factory/element-strategy-factory";

export class RenderablePage implements RenderableReportElement {
    renderedElementUuid!: string;
    elementState!: ReportElementState;
    elementSpecs!: ElementSpecs;
    id!: string;
    styles?: Partial<CSSStyleDeclaration> | undefined;
    content?: Array<RenderableReportElement>;

    //Exclusive
    pageSize!: PageSize; 
    
    constructor(page: PageImplementation) {
        this.renderedElementUuid = crypto.randomUUID();
        this.elementState = ReportElementState.RENDER_TEST;
        this.id = page.id;
        this.styles = page.styles; 
        this.pageSize = page.pageSize;
        this.content = page.content.map(element => (ReportElementFactory.convertToRenderable(element)));
    }
}