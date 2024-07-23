import { signal, WritableSignal } from "@angular/core";
import { PageImplementation, PageSize } from "@voortex-modules";
import { ReportElementState } from "../states/report-element.state";
import { RenderableReportElement } from "./base/renderable-element-protocol";
import { ElementSpecs } from "./base/specs-type";
import { ReportElementFactory } from "./factory/element-strategy-factory";
import { RenderableReport } from "./report-model";

export class RenderablePage implements RenderableReportElement {
    renderedElementUuid!: string;
    elementState!: ReportElementState;
    elementSpecs!: ElementSpecs;
    id!: string;
    styles?: Partial<CSSStyleDeclaration> | undefined;
    content?: Map<string, WritableSignal<RenderableReportElement>> = new Map<string, WritableSignal<RenderableReportElement>>();
    fatherElement!: RenderableReport;
    path!: string;

    //Exclusive
    pageSize!: PageSize; 
    
    constructor(page: PageImplementation, report: RenderableReport, path: string) {
        this.renderedElementUuid = crypto.randomUUID();
        this.elementState = ReportElementState.RENDER_TEST;
        this.id = page.id;
        this.styles = page.styles; 
        this.pageSize = page.pageSize;
        this.fatherElement = report;
        this.path = path;
        page.content.forEach((element, _) => {
            const path: string = `${this.path}-${element.id}[${_}]`;
            this.content?.set(path, signal(ReportElementFactory.convertToRenderable(element, this, path)));
        })
    }
}